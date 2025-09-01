import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './Dashboard.css';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../firebase';

// Constants
const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

const ORDERS_PER_PAGE = 20;

// Validation utilities
const validateOrderData = (order) => {
  const requiredFields = ['customerName', 'customerEmail', 'items'];
  for (const field of requiredFields) {
    if (!order[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  if (!Array.isArray(order.items) || order.items.length === 0) {
    throw new Error('Order must contain at least one item');
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(order.customerEmail)) {
    throw new Error('Invalid email format');
  }
};

const sanitizeOrderData = (order) => {
  return {
    ...order,
    customerName: order.customerName?.trim(),
    customerEmail: order.customerEmail?.toLowerCase().trim(),
    customerPhone: order.customerPhone?.trim(),
    customerAddress: order.customerAddress?.trim(),
  };
};

// Date formatting utility
const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    let date;
    if (timestamp?.toDate) {
      date = timestamp.toDate();
    } else if (timestamp?.seconds) {
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }
    
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return 'Invalid Date';
  }
};

// Notification Component
const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

// Orders List Component
const OrdersList = ({ 
  orders, 
  selectedOrder, 
  onSelectOrder, 
  updatingOrder, 
  deletingOrder,
  selectedOrders,
  onToggleOrderSelection,
  onToggleAllOrders
}) => {
  if (orders.length === 0) {
    return <p>No orders found for the selected filter.</p>;
  }

  return (
    <>
      <div className="order-list-header">
        <span className="checkbox-col">
          <input
            type="checkbox"
            checked={selectedOrders.length === orders.length}
            onChange={onToggleAllOrders}
          />
        </span>
        <span className="order-id-col">Order ID</span>
        <span className="customer-col">Customer</span>
        <span className="date-col">Date</span>
        <span className="amount-col">Amount</span>
        <span className="status-col">Status</span>
        <span className="actions-col">Actions</span>
      </div>
      
      {orders.map(order => (
        <div 
          key={order.id} 
          className={`order-item ${selectedOrder?.id === order.id ? 'selected' : ''}`}
          onClick={() => onSelectOrder(order)}
        >
          <span className="checkbox-col">
            <input
              type="checkbox"
              checked={selectedOrders.includes(order.id)}
              onChange={(e) => {
                e.stopPropagation();
                onToggleOrderSelection(order.id);
              }}
            />
          </span>
          <span className="order-id-col">{order.id.slice(0, 8)}...</span>
          <span className="customer-col">{order.customerName}</span>
          <span className="date-col">{formatDate(order.createdAt)}</span>
          <span className="amount-col">₹{order.total?.toFixed(2) || '0.00'}</span>
          <span className={`status-col status-${order.status || 'pending'}`}>
            {updatingOrder === order.id ? 'Updating...' : (order.status || 'pending')}
          </span>
          <span className="actions-col">
            <button 
              className="view-order-btn"
              onClick={(e) => {
                e.stopPropagation();
                onSelectOrder(order);
              }}
              disabled={deletingOrder === order.id}
            >
              {deletingOrder === order.id ? 'Deleting...' : 'View'}
            </button>
          </span>
        </div>
      ))}
    </>
  );
};

// Order Details Component
const OrderDetails = ({ 
  order, 
  onUpdateStatus, 
  onDelete, 
  onClose,
  updatingOrder,
  deletingOrder
}) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
  };

  return (
    <div className="order-details-panel">
      <div className="order-details-header">
        <h3>Order #{order.id}</h3>
        <button 
          className="close-details-btn"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      
      <div className="order-status-section">
        <span className={`order-status status-${order.status || 'pending'}`}>
          {order.status || 'pending'}
        </span>
        
        <div className="status-actions">
          {Object.entries(ORDER_STATUSES).map(([key, status]) => (
            <button 
              key={status}
              className={`status-btn ${order.status === status ? 'active' : ''}`}
              onClick={() => onUpdateStatus(order.id, status)}
              disabled={updatingOrder === order.id}
            >
              {updatingOrder === order.id ? 'Updating...' : key.charAt(0) + key.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="order-info-grid">
        <div className="order-meta">
          <h4>Order Information</h4>
          <p><strong>Date:</strong> {formatDate(order.createdAt)}</p>
          {order.lastUpdated && (
            <p><strong>Last Updated:</strong> {formatDate(order.lastUpdated)}</p>
          )}
        </div>
        
        <div className="customer-info">
          <h4>Customer Details</h4>
          <p><strong>Name:</strong> {order.customerName}</p>
          <p><strong>Email:</strong> {order.customerEmail}</p>
          <p><strong>Phone:</strong> {order.customerPhone}</p>
          <p><strong>Address:</strong> {order.customerAddress}</p>
        </div>
      </div>
      
      <div className="order-items">
        <h4>Ordered Items</h4>
        <table className="items-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Option</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items?.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <div className="order-product">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="order-product-image"
                        onError={handleImageError}
                      />
                    )}
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>{item.selectedOption || 'Standard'}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="order-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{order.subtotal?.toFixed(2) || '0.00'}</span>
        </div>
        <div className="summary-row">
          <span>Tax (18%)</span>
          <span>₹{order.tax?.toFixed(2) || '0.00'}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>₹{order.total?.toFixed(2) || '0.00'}</span>
        </div>
      </div>
      
      <div className="order-actions">
        <button 
          className="print-order-btn"
          onClick={() => window.print()}
        >
          Print Order
        </button>
        <button 
          className="delete-order-btn"
          onClick={() => onDelete(order.id)}
          disabled={deletingOrder === order.id}
        >
          {deletingOrder === order.id ? 'Deleting...' : 'Delete Order'}
        </button>
      </div>
    </div>
  );
};

// Search and Filters Component
const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  dateRange,
  onDateRangeChange,
  selectedOrders,
  onBulkStatusUpdate,
  onExportCSV,
  ordersCount
}) => {
  return (
    <div className="orders-header">
      <h3>Orders Management ({ordersCount})</h3>
      
      <div className="search-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by customer name, email, or order ID..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div className="date-filters">
          <input
            type="date"
            value={dateRange.start || ''}
            onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
            placeholder="From date"
          />
          <input
            type="date"
            value={dateRange.end || ''}
            onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
            placeholder="To date"
          />
        </div>
        
        <div className="status-filter">
          <label>Status:</label>
          <select 
            value={statusFilter} 
            onChange={(e) => onStatusFilterChange(e.target.value)}
          >
            <option value="all">All Orders</option>
            {Object.entries(ORDER_STATUSES).map(([key, status]) => (
              <option key={status} value={status}>
                {key.charAt(0) + key.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bulk-actions">
        {selectedOrders.length > 0 && (
          <div className="bulk-status-update">
            <span>Update {selectedOrders.length} selected orders to:</span>
            {Object.entries(ORDER_STATUSES).map(([key, status]) => (
              <button
                key={status}
                className="bulk-status-btn"
                onClick={() => onBulkStatusUpdate(status)}
              >
                {key.charAt(0) + key.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        )}
        
        <button 
          className="export-button"
          onClick={onExportCSV}
          disabled={ordersCount === 0}
        >
          Export CSV
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  // Product state (keeping your existing product logic)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    feature: '',
    image: '',
    price: '',
    rating: '',
    priceOptions: [],
    benefits: [],
    specifications: {}
  });

  // Enhanced Orders state
  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]); // For filtering
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [orderError, setOrderError] = useState(null);
  const [activeTab, setActiveTab] = useState('products');
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Enhanced filtering and search
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  
  // Bulk operations
  const [selectedOrders, setSelectedOrders] = useState([]);
  
  // Loading states
  const [updatingOrder, setUpdatingOrder] = useState(null);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [bulkUpdating, setBulkUpdating] = useState(false);
  
  // Notifications
  const [notification, setNotification] = useState(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreOrders, setHasMoreOrders] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);

  // Your existing product state variables
  const [currentOption, setCurrentOption] = useState({
    name: '',
    price: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingOption, setEditingOption] = useState({
    name: '',
    price: ''
  });
  const [currentBenefit, setCurrentBenefit] = useState('');
  const [currentSpecKey, setCurrentSpecKey] = useState('');
  const [currentSpecValue, setCurrentSpecValue] = useState('');
  const [commonSpecFields] = useState([
    "Dimension",
    "Filter Replacement Cycle",
    "Input Voltage",
    "Installation",
    "Material Of Construction",
    "Maximum Inlet Pressure",
    "Minimum Inlet Pressure",
    "Operating Voltage",
    "Purification Capacity",
    "Purification Cartridges",
    "Stages Of Purification",
    "Total Dissolved Solids (TDS) Levels",
    "UF Cartridge",
    "UV Disinfection Column"
  ]);

  const productsRef = collection(db, 'products');
  const ordersRef = collection(db, 'orders');

  // Notification helper
  const showNotification = useCallback((message, type = 'success') => {
    setNotification({ message, type });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  // Enhanced fetch orders with pagination and filtering
  const fetchOrders = useCallback(async (page = 1, append = false) => {
    try {
      if (!append) setLoadingOrders(true);
      
      let ordersQuery = query(ordersRef, orderBy('createdAt', 'desc'));
      
      // Add pagination
      if (page > 1 && lastVisible) {
        ordersQuery = query(ordersQuery, startAfter(lastVisible), limit(ORDERS_PER_PAGE));
      } else {
        ordersQuery = query(ordersQuery, limit(ORDERS_PER_PAGE));
      }
      
      const data = await getDocs(ordersQuery);
      
      if (data.empty) {
        if (!append) {
          setAllOrders([]);
          setOrders([]);
        }
        setHasMoreOrders(false);
        setLoadingOrders(false);
        return;
      }
      
      const ordersArray = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      
      // Set pagination state
      setLastVisible(data.docs[data.docs.length - 1]);
      setHasMoreOrders(data.docs.length === ORDERS_PER_PAGE);
      
      if (append) {
        setAllOrders(prev => [...prev, ...ordersArray]);
      } else {
        setAllOrders(ordersArray);
      }
      
      setLoadingOrders(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrderError("Failed to fetch orders: " + error.message);
      setLoadingOrders(false);
      showNotification("Failed to fetch orders", 'error');
    }
  }, []);

  // Filtered orders based on search and filters
  const filteredOrders = useMemo(() => {
    return allOrders.filter(order => {
      // Search filter
      const matchesSearch = !searchTerm || 
        order.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Status filter
      const matchesStatus = orderStatusFilter === 'all' || order.status === orderStatusFilter;
      
      // Date range filter
      let matchesDateRange = true;
      if (dateRange.start || dateRange.end) {
        const orderDate = order.createdAt?.toDate ? order.createdAt.toDate() : new Date(order.createdAt);
        const startDate = dateRange.start ? new Date(dateRange.start) : null;
        const endDate = dateRange.end ? new Date(dateRange.end + 'T23:59:59') : null;
        
        if (startDate && orderDate < startDate) matchesDateRange = false;
        if (endDate && orderDate > endDate) matchesDateRange = false;
      }
      
      return matchesSearch && matchesStatus && matchesDateRange;
    });
  }, [allOrders, searchTerm, orderStatusFilter, dateRange]);

  // Update orders state when filters change
  useEffect(() => {
    setOrders(filteredOrders);
    setCurrentPage(1);
    setSelectedOrders([]);
  }, [filteredOrders]);

  // Enhanced order status update with optimistic updates
  const updateOrderStatus = useCallback(async (orderId, newStatus) => {
    try {
      setUpdatingOrder(orderId);
      
      // Optimistic update
      const updateOrderInState = (ordersList) => 
        ordersList.map(order => 
          order.id === orderId 
            ? { ...order, status: newStatus, lastUpdated: new Date() }
            : order
        );
      
      setAllOrders(updateOrderInState);
      setOrders(updateOrderInState);
      
      // Update selected order if it's the one being updated
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(prev => ({ 
          ...prev, 
          status: newStatus, 
          lastUpdated: new Date() 
        }));
      }
      
      // Update in database
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        status: newStatus,
        lastUpdated: new Date()
      });
      
      showNotification(`Order status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating order status:", error);
      showNotification("Failed to update order status", 'error');
      // Revert optimistic update
      fetchOrders(1, false);
    } finally {
      setUpdatingOrder(null);
    }
  }, [selectedOrder, showNotification, fetchOrders]);

  // Bulk status update
  const bulkUpdateOrderStatus = useCallback(async (newStatus) => {
    if (selectedOrders.length === 0) return;
    
    if (!window.confirm(`Are you sure you want to update ${selectedOrders.length} orders to ${newStatus}?`)) {
      return;
    }
    
    try {
      setBulkUpdating(true);
      
      // Optimistic update
      const updateOrdersInState = (ordersList) => 
        ordersList.map(order => 
          selectedOrders.includes(order.id)
            ? { ...order, status: newStatus, lastUpdated: new Date() }
            : order
        );
      
      setAllOrders(updateOrdersInState);
      setOrders(updateOrdersInState);
      
      // Batch update in database
      const batch = writeBatch(db);
      selectedOrders.forEach(orderId => {
        const orderRef = doc(db, 'orders', orderId);
        batch.update(orderRef, { 
          status: newStatus, 
          lastUpdated: new Date() 
        });
      });
      
      await batch.commit();
      
      setSelectedOrders([]);
      showNotification(`${selectedOrders.length} orders updated to ${newStatus}`);
    } catch (error) {
      console.error("Error bulk updating orders:", error);
      showNotification("Failed to bulk update orders", 'error');
      // Revert optimistic update
      fetchOrders(1, false);
    } finally {
      setBulkUpdating(false);
    }
  }, [selectedOrders, showNotification, fetchOrders]);

  // Enhanced delete order
  const deleteOrder = useCallback(async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      return;
    }
    
    try {
      setDeletingOrder(orderId);
      
      await deleteDoc(doc(db, 'orders', orderId));
      
      // Remove from state
      setAllOrders(prev => prev.filter(order => order.id !== orderId));
      setOrders(prev => prev.filter(order => order.id !== orderId));
      setSelectedOrders(prev => prev.filter(id => id !== orderId));
      
      // Clear selection if deleted order was selected
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(null);
      }
      
      showNotification("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
      showNotification("Failed to delete order", 'error');
    } finally {
      setDeletingOrder(null);
    }
  }, [selectedOrder, showNotification]);

  // Order selection handlers
  const toggleOrderSelection = useCallback((orderId) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  }, []);

  const toggleAllOrdersSelection = useCallback(() => {
    setSelectedOrders(prev => 
      prev.length === orders.length ? [] : orders.map(order => order.id)
    );
  }, [orders]);

  // Export orders to CSV
  const exportOrdersToCSV = useCallback(() => {
    if (filteredOrders.length === 0) {
      showNotification("No orders to export", 'error');
      return;
    }
    
    try {
      let csvContent = "Order ID,Customer Name,Email,Phone,Address,Total Amount,Status,Date\n";
      
      filteredOrders.forEach(order => {
        const orderDate = formatDate(order.createdAt);
        const row = [
          order.id,
          order.customerName,
          order.customerEmail,
          order.customerPhone,
          `"${order.customerAddress?.replace(/"/g, '""') || ''}"`,
          order.total ? order.total.toFixed(2) : '0.00',
          order.status || 'pending',
          orderDate
        ];
        
        csvContent += row.join(',') + "\n";
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `orders_export_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      showNotification(`Exported ${filteredOrders.length} orders to CSV`);
    } catch (error) {
      console.error("Error exporting orders:", error);
      showNotification("Failed to export orders", 'error');
    }
  }, [filteredOrders, showNotification]);

  // Effects
  useEffect(() => {
    if (activeTab === 'products') {
      fetchProducts();
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'orders') {
      fetchOrders(1, false);
    }
  }, [activeTab, fetchOrders]);

  // Your existing product functions (keeping them as they were)
  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      setLoading(true);
      
      const data = await getDocs(productsRef);
      
      if (data.empty) {
        console.log("No products found in the collection");
        setProducts([]);
        setLoading(false);
        return;
      }
      
      const productsArray = data.docs.map(doc => {
        const rawData = doc.data();
        const cleanData = {};
        Object.keys(rawData).forEach(key => {
          const trimmedKey = key.trim();
          cleanData[trimmedKey] = rawData[key];
        });
        return { ...cleanData, id: doc.id };
      });
      
      setProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products: " + error.message);
      setLoading(false);
    }
  };

  // Keep all your existing product management functions
  const addPriceOption = () => {
    if (!currentOption.name || !currentOption.price) {
      alert('Please provide both name and price for the option');
      return;
    }
    
    setNewProduct({
      ...newProduct,
      priceOptions: [
        ...newProduct.priceOptions,
        { ...currentOption, price: Number(currentOption.price) }
      ]
    });
    
    setCurrentOption({ name: '', price: '' });
  };

  const removePriceOption = (index) => {
    const updatedOptions = [...newProduct.priceOptions];
    updatedOptions.splice(index, 1);
    setNewProduct({ ...newProduct, priceOptions: updatedOptions });
  };

  const addBenefit = () => {
    if (!currentBenefit) {
      alert('Please enter a benefit');
      return;
    }
    
    setNewProduct({
      ...newProduct,
      benefits: [...newProduct.benefits, currentBenefit]
    });
    setCurrentBenefit('');
  };

  const removeBenefit = (index) => {
    const updatedBenefits = [...newProduct.benefits];
    updatedBenefits.splice(index, 1);
    setNewProduct({ ...newProduct, benefits: updatedBenefits });
  };

  const addSpecification = () => {
    if (!currentSpecKey || !currentSpecValue) {
      alert('Please provide both specification key and value');
      return;
    }
    
    setNewProduct({
      ...newProduct,
      specifications: {
        ...newProduct.specifications,
        [currentSpecKey]: currentSpecValue
      }
    });
    
    setCurrentSpecKey('');
    setCurrentSpecValue('');
  };

  const removeSpecification = (key) => {
    const updatedSpecs = { ...newProduct.specifications };
    delete updatedSpecs[key];
    setNewProduct({ ...newProduct, specifications: updatedSpecs });
  };

  const addEditingBenefit = () => {
    if (!currentBenefit) {
      alert('Please enter a benefit');
      return;
    }
    
    setEditingProduct({
      ...editingProduct,
      benefits: [...(editingProduct.benefits || []), currentBenefit]
    });
    setCurrentBenefit('');
  };

  const removeEditingBenefit = (index) => {
    const updatedBenefits = [...(editingProduct.benefits || [])];
    updatedBenefits.splice(index, 1);
    setEditingProduct({ ...editingProduct, benefits: updatedBenefits });
  };

  const addEditingSpecification = () => {
    if (!currentSpecKey || !currentSpecValue) {
      alert('Please provide both specification key and value');
      return;
    }
    
    setEditingProduct({
      ...editingProduct,
      specifications: {
        ...(editingProduct.specifications || {}),
        [currentSpecKey]: currentSpecValue
      }
    });
    
    setCurrentSpecKey('');
    setCurrentSpecValue('');
  };

  const removeEditingSpecification = (key) => {
    const updatedSpecs = { ...(editingProduct.specifications || {}) };
    delete updatedSpecs[key];
    setEditingProduct({ ...editingProduct, specifications: updatedSpecs });
  };

  const handleAdd = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill in required fields (Name, Price, and Image URL)');
      return;
    }

    try {
      await addDoc(productsRef, {
        ...newProduct,
        price: Number(newProduct.price),
        rating: parseFloat(newProduct.rating) || 0,
        priceOptions: newProduct.priceOptions.map(option => ({
          name: option.name,
          price: Number(option.price)
        })),
        benefits: newProduct.benefits || [],
        specifications: newProduct.specifications || {}
      });
      
      setNewProduct({ 
        name: '', 
        description: '', 
        feature: '', 
        image: '', 
        price: '', 
        rating: '',
        priceOptions: [],
        benefits: [],
        specifications: {} 
      });
      
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Check your permissions.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Check your permissions.");
    }
  };

  const handleEdit = (product) => {
    const productWithDefaults = {
      ...product,
      priceOptions: product.priceOptions || [],
      benefits: product.benefits || [],
      specifications: product.specifications || {}
    };
    setEditingProduct(productWithDefaults);
  };

  const addEditingPriceOption = () => {
    if (!editingOption.name || !editingOption.price) {
      alert('Please provide both name and price for the option');
      return;
    }
    
    setEditingProduct({
      ...editingProduct,
      priceOptions: [
        ...(editingProduct.priceOptions || []),
        { ...editingOption, price: Number(editingOption.price) }
      ]
    });
    
    setEditingOption({ name: '', price: '' });
  };

  const removeEditingPriceOption = (index) => {
    const updatedOptions = [...(editingProduct.priceOptions || [])];
    updatedOptions.splice(index, 1);
    setEditingProduct({ ...editingProduct, priceOptions: updatedOptions });
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, 'products', editingProduct.id);
      await updateDoc(docRef, {
        ...editingProduct,
        price: Number(editingProduct.price),
        rating: parseFloat(editingProduct.rating) || 0,
        priceOptions: (editingProduct.priceOptions || []).map(option => ({
          name: option.name,
          price: Number(option.price)
        })),
        benefits: editingProduct.benefits || [],
        specifications: editingProduct.specifications || {}
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Check your permissions.");
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      
      {/* Notifications */}
      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={hideNotification}
        />
      )}
      
      {/* Dashboard Navigation */}
      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products Management
        </button>
        <button 
          className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders Management
        </button>
      </div>
      
      {/* Products Tab */}
      {activeTab === 'products' && (
        <>
          {/* Product addition form (keeping your existing form) */}
          <div className="add-product-form">
            <h3>Add Product</h3>
            <input
              type="text"
              placeholder="Name (required)"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Feature"
              value={newProduct.feature}
              onChange={(e) => setNewProduct({ ...newProduct, feature: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL (required)"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <input
              type="number"
              placeholder="Base Price (required)"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
              type="number"
              step="0.1"
              placeholder="Rating (0-5)"
              value={newProduct.rating}
              onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
            />

            {/* Price Options Section */}
            <div className="price-options-section">
              <h4>Price Options</h4>
              
              <div className="price-options-list">
                {newProduct.priceOptions.map((option, index) => (
                  <div key={index} className="price-option-item">
                    <span>{index}: {option.name} - ₹{option.price}</span>
                    <button 
                      type="button" 
                      onClick={() => removePriceOption(index)}
                      className="remove-option-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="add-option-form">
                <input
                  type="text"
                  placeholder="Option Name"
                  value={currentOption.name}
                  onChange={(e) => setCurrentOption({ ...currentOption, name: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Option Price"
                  value={currentOption.price}
                  onChange={(e) => setCurrentOption({ ...currentOption, price: e.target.value })}
                />
                <button 
                  type="button" 
                  onClick={addPriceOption}
                  className="add-option-btn"
                >
                  Add Option
                </button>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="benefits-section">
              <h4>Product Benefits</h4>
              
              <div className="benefits-list">
                {newProduct.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <span>{index}: {benefit}</span>
                    <button 
                      type="button" 
                      onClick={() => removeBenefit(index)}
                      className="remove-benefit-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="add-benefit-form">
                <input
                  type="text"
                  placeholder="Product Benefit"
                  value={currentBenefit}
                  onChange={(e) => setCurrentBenefit(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={addBenefit}
                  className="add-benefit-btn"
                >
                  Add Benefit
                </button>
              </div>
            </div>
            
            {/* Specifications Section */}
            <div className="specifications-section">
              <h4>Product Specifications</h4>
              
              <div className="specifications-list">
                {Object.entries(newProduct.specifications).map(([key, value], index) => (
                  <div key={index} className="specification-item">
                    <span><strong>{key}:</strong> {value}</span>
                    <button 
                      type="button" 
                      onClick={() => removeSpecification(key)}
                      className="remove-spec-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="add-specification-form">
                <select
                  value={currentSpecKey}
                  onChange={(e) => setCurrentSpecKey(e.target.value)}
                >
                  <option value="">Select or type specification</option>
                  {commonSpecFields.map((field, index) => (
                    <option key={index} value={field}>{field}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Custom Specification"
                  value={currentSpecKey}
                  onChange={(e) => setCurrentSpecKey(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Specification Value"
                  value={currentSpecValue}
                  onChange={(e) => setCurrentSpecValue(e.target.value)}
                />
                <button 
                  type="button" 
                  onClick={addSpecification}
                  className="add-spec-btn"
                >
                  Add Specification
                </button>
              </div>
            </div>
            
            <button onClick={handleAdd}>Add Product</button>
          </div>

          {/* Products List */}
          <div className="product-list">
            <h3>Products ({products.length})</h3>
            
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : products.length === 0 ? (
              <p>No products found. Add some products to get started.</p>
            ) : (
              Array.from(products).map((product, index) => (
                <div key={product.id || index} className="product-card">
                  {editingProduct?.id === product.id ? (
                    <>
                      <input
                        type="text"
                        value={editingProduct.name || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      />
                      <input
                        type="text"
                        value={editingProduct.description || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                      />
                      <input
                        type="text"
                        value={editingProduct.feature || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, feature: e.target.value })}
                      />
                      <input
                        type="text"
                        value={editingProduct.image || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                      />
                      <input
                        type="number"
                        value={editingProduct.price || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                      />
                      <input
                        type="number"
                        step="0.1"
                        value={editingProduct.rating || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, rating: e.target.value })}
                      />
                      
                      {/* Edit Price Options Section */}
                      <div className="edit-price-options-section">
                        <h4>Price Options</h4>
                        
                        <div className="price-options-list">
                          {(editingProduct.priceOptions || []).map((option, index) => (
                            <div key={index} className="price-option-item">
                              <span>{index}: {option.name} - ₹{option.price}</span>
                              <button 
                                type="button" 
                                onClick={() => removeEditingPriceOption(index)}
                                className="remove-option-btn"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="add-option-form">
                          <input
                            type="text"
                            placeholder="Option Name"
                            value={editingOption.name}
                            onChange={(e) => setEditingOption({ ...editingOption, name: e.target.value })}
                          />
                          <input
                            type="number"
                            placeholder="Option Price"
                            value={editingOption.price}
                            onChange={(e) => setEditingOption({ ...editingOption, price: e.target.value })}
                          />
                          <button 
                            type="button" 
                            onClick={addEditingPriceOption}
                            className="add-option-btn"
                          >
                            Add Option
                          </button>
                        </div>
                      </div>
                      
                      {/* Edit Benefits Section */}
                      <div className="edit-benefits-section">
                        <h4>Product Benefits</h4>
                        
                        <div className="benefits-list">
                          {(editingProduct.benefits || []).map((benefit, index) => (
                            <div key={index} className="benefit-item">
                              <span>{index}: {benefit}</span>
                              <button 
                                type="button" 
                                onClick={() => removeEditingBenefit(index)}
                                className="remove-benefit-btn"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="add-benefit-form">
                          <input
                            type="text"
                            placeholder="Product Benefit"
                            value={currentBenefit}
                            onChange={(e) => setCurrentBenefit(e.target.value)}
                          />
                          <button 
                            type="button" 
                            onClick={addEditingBenefit}
                            className="add-benefit-btn"
                          >
                            Add Benefit
                          </button>
                        </div>
                      </div>
                      
                      {/* Edit Specifications Section */}
                      <div className="edit-specifications-section">
                        <h4>Product Specifications</h4>
                        
                        <div className="specifications-list">
                          {Object.entries(editingProduct.specifications || {}).map(([key, value], index) => (
                            <div key={index} className="specification-item">
                              <span><strong>{key}:</strong> {value}</span>
                              <button 
                                type="button" 
                                onClick={() => removeEditingSpecification(key)}
                                className="remove-spec-btn"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="add-specification-form">
                          <select
                            value={currentSpecKey}
                            onChange={(e) => setCurrentSpecKey(e.target.value)}
                          >
                            <option value="">Select or type specification</option>
                            {commonSpecFields.map((field, index) => (
                              <option key={index} value={field}>{field}</option>
                            ))}
                          </select>
                          <input
                            type="text"
                            placeholder="Custom Specification"
                            value={currentSpecKey}
                            onChange={(e) => setCurrentSpecKey(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Specification Value"
                            value={currentSpecValue}
                            onChange={(e) => setCurrentSpecValue(e.target.value)}
                          />
                          <button 
                            type="button" 
                            onClick={addEditingSpecification}
                            className="add-spec-btn"
                          >
                            Add Specification
                          </button>
                        </div>
                      </div>
                      
                      <button onClick={handleUpdate}>Update</button>
                      <button onClick={() => setEditingProduct(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <img 
                        src={product.image} 
                        alt={product.name || 'Product'} 
                        width="100" 
                        onError={handleImageError}
                      />
                      <h4>{product.name || 'Unnamed Product'}</h4>
                      <p>{product.description || 'No description available'}</p>
                      <p><b>Feature:</b> {product.feature || 'None'}</p>
                      <p><b>Price:</b> ₹{product.price || '0'}</p>
                      <p><b>Rating:</b> {'⭐'.repeat(Math.round(product.rating || 0))} ({product.rating || '0'})</p>
                      
                      {/* Display Price Options */}
                      {product.priceOptions && product.priceOptions.length > 0 && (
                        <div className="product-price-options">
                          <p><b>Price Options:</b></p>
                          <ul>
                            {product.priceOptions.map((option, idx) => (
                              <li key={idx}>{option.name}: ₹{option.price}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Display Benefits */}
                      {product.benefits && product.benefits.length > 0 && (
                        <div className="product-benefits">
                          <p><b>Benefits:</b></p>
                          <ul>
                            {product.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Display Specifications */}
                      {product.specifications && Object.keys(product.specifications).length > 0 && (
                        <div className="product-specifications">
                          <p><b>Specifications:</b></p>
                          <ul>
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              <li key={idx}><strong>{key}:</strong> {value}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <button onClick={() => handleEdit(product)} className='editButton'>Edit</button>
                      <button onClick={() => handleDelete(product.id)} className='deleteButton'>Delete</button>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      )}
      
      {/* Enhanced Orders Tab */}
      {activeTab === 'orders' && (
        <div className="orders-section">
          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={orderStatusFilter}
            onStatusFilterChange={setOrderStatusFilter}
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            selectedOrders={selectedOrders}
            onBulkStatusUpdate={bulkUpdateOrderStatus}
            onExportCSV={exportOrdersToCSV}
            ordersCount={filteredOrders.length}
          />
          
          {loadingOrders ? (
            <div className="loading-container">
              <p>Loading orders...</p>
            </div>
          ) : orderError ? (
            <div className="error-container">
              <p style={{ color: 'red' }}>{orderError}</p>
              <button onClick={() => fetchOrders(1, false)}>Retry</button>
            </div>
          ) : (
            <div className="orders-container">
              <div className="orders-list">
                <OrdersList
                  orders={orders}
                  selectedOrder={selectedOrder}
                  onSelectOrder={setSelectedOrder}
                  updatingOrder={updatingOrder}
                  deletingOrder={deletingOrder}
                  selectedOrders={selectedOrders}
                  onToggleOrderSelection={toggleOrderSelection}
                  onToggleAllOrders={toggleAllOrdersSelection}
                />
                
                {/* Load More Button */}
                {hasMoreOrders && (
                  <div className="load-more-container">
                    <button 
                      className="load-more-btn"
                      onClick={() => fetchOrders(currentPage + 1, true)}
                      disabled={loadingOrders}
                    >
                      {loadingOrders ? 'Loading...' : 'Load More Orders'}
                    </button>
                  </div>
                )}
              </div>
              
              {/* Enhanced Order Details Panel */}
              {selectedOrder && (
                <OrderDetails
                  order={selectedOrder}
                  onUpdateStatus={updateOrderStatus}
                  onDelete={deleteOrder}
                  onClose={() => setSelectedOrder(null)}
                  updatingOrder={updatingOrder}
                  deletingOrder={deletingOrder}
                />
              )}
            </div>
          )}
          
          {/* Bulk Update Loading Overlay */}
          {bulkUpdating && (
            <div className="bulk-updating-overlay">
              <div className="bulk-updating-modal">
                <p>Updating {selectedOrders.length} orders...</p>
                <div className="loading-spinner"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;