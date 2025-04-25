import React, { useEffect, useState } from 'react';
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
} from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
  // Product state (from your existing code)
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
    priceOptions: []
  });

  // Orders state (new)
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [orderError, setOrderError] = useState(null);
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'orders'
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');

  // From your existing code
  const [currentOption, setCurrentOption] = useState({
    name: '',
    price: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingOption, setEditingOption] = useState({
    name: '',
    price: ''
  });

  const productsRef = collection(db, 'products');
  const ordersRef = collection(db, 'orders');

  // Use your existing fetch products logic
  useEffect(() => {
    if (activeTab === 'products') {
      fetchProducts();
    }
  }, [activeTab]);

  // New effect to fetch orders
  useEffect(() => {
    if (activeTab === 'orders') {
      fetchOrders();
    }
  }, [activeTab, orderStatusFilter]);

  // Your existing products fetch function
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
        
        // Clean data by trimming keys
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

  // New function to fetch orders
  const fetchOrders = async () => {
    try {
      setLoadingOrders(true);
      
      // Create a query that orders by createdAt in descending order (newest first)
      const ordersQuery = query(ordersRef, orderBy('createdAt', 'desc'));
      const data = await getDocs(ordersQuery);
      
      if (data.empty) {
        setOrders([]);
        setLoadingOrders(false);
        return;
      }
      
      let ordersArray = data.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      
      // Apply status filter if not set to 'all'
      if (orderStatusFilter !== 'all') {
        ordersArray = ordersArray.filter(order => order.status === orderStatusFilter);
      }
      
      setOrders(ordersArray);
      setLoadingOrders(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrderError("Failed to fetch orders: " + error.message);
      setLoadingOrders(false);
    }
  };

  // Function to update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, {
        status: newStatus,
        lastUpdated: new Date()
      });
      
      // If the currently selected order is being updated, update its status in the state
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder({
          ...selectedOrder,
          status: newStatus,
          lastUpdated: new Date()
        });
      }
      
      // Refresh the orders list
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status: " + error.message);
    }
  };

  // Function to delete an order
  const deleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      return;
    }
    
    try {
      await deleteDoc(doc(db, 'orders', orderId));
      
      // If the deleted order is currently selected, clear the selection
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(null);
      }
      
      // Refresh the orders list
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete order: " + error.message);
    }
  };

  // Your existing product functions (addPriceOption, removePriceOption, handleAdd, etc.)
  // Keep all your existing product-related functions here
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
    
    // Reset the current option fields
    setCurrentOption({
      name: '',
      price: ''
    });
  };

  const removePriceOption = (index) => {
    const updatedOptions = [...newProduct.priceOptions];
    updatedOptions.splice(index, 1);
    setNewProduct({
      ...newProduct,
      priceOptions: updatedOptions
    });
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
        }))
      });
      setNewProduct({ 
        name: '', 
        description: '', 
        feature: '', 
        image: '', 
        price: '', 
        rating: '',
        priceOptions: [] 
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
    // Ensure priceOptions is defined when editing
    const productWithOptions = {
      ...product,
      priceOptions: product.priceOptions || []
    };
    setEditingProduct(productWithOptions);
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
    
    // Reset the editing option fields
    setEditingOption({
      name: '',
      price: ''
    });
  };

  const removeEditingPriceOption = (index) => {
    const updatedOptions = [...(editingProduct.priceOptions || [])];
    updatedOptions.splice(index, 1);
    setEditingProduct({
      ...editingProduct,
      priceOptions: updatedOptions
    });
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
        }))
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

  // Function to format date
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    
    try {
      // If timestamp is a Firebase Timestamp
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleString();
      }
      // If timestamp is a JS Date or can be parsed as one
      return new Date(timestamp).toLocaleString();
    } catch (error) {
      console.error("Error formatting date:", error);
      return 'Invalid Date';
    }
  };

  // Function to export orders to CSV
  const exportOrdersToCSV = () => {
    if (orders.length === 0) {
      alert("No orders to export");
      return;
    }
    
    // Create CSV header row
    let csvContent = "Order ID,Customer Name,Email,Phone,Address,Total Amount,Status,Date\n";
    
    // Add data rows
    orders.forEach(order => {
      const orderDate = formatDate(order.createdAt);
      const row = [
        order.id,
        order.customerName,
        order.customerEmail,
        order.customerPhone,
        `"${order.customerAddress.replace(/"/g, '""')}"`, // Handle quotes in address
        order.total ? order.total.toFixed(2) : '0.00',
        order.status || 'pending',
        orderDate
      ];
      
      csvContent += row.join(',') + "\n";
    });
    
    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `orders_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to manually send/resend order confirmation email
  const resendOrderEmail = async (order) => {
    try {
      // You need to have the sendOrderEmail cloud function set up as described previously
      const sendOrderEmail = httpsCallable(functions, 'sendOrderEmail');
      await sendOrderEmail({
        orderId: order.id,
        adminEmail: 'admin@yourdomain.com', // Replace with your admin email
        orderData: order
      });
      
      alert("Order confirmation email resent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to resend email: " + error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      
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
          {/* Your existing product management code */}
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
            
            <button onClick={handleAdd}>Add Product</button>
          </div>

          <div className="product-list">
            <h3>Products ({products.length})</h3>
            
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : products.length === 0 ? (
              <p>No products found. Add some products to get started.</p>
            ) : (
              // Force array rendering with Array.from
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
      
      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="orders-section">
          <div className="orders-header">
            <h3>Orders Management</h3>
            
            <div className="orders-actions">
              <div className="status-filter">
                <label>Filter by Status:</label>
                <select 
                  value={orderStatusFilter} 
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                >
                  <option value="all">All Orders</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <button 
                className="export-button"
                onClick={exportOrdersToCSV}
                disabled={orders.length === 0}
              >
                Export CSV
              </button>
            </div>
          </div>
          
          {loadingOrders ? (
            <p>Loading orders...</p>
          ) : orderError ? (
            <p style={{ color: 'red' }}>{orderError}</p>
          ) : (
            <div className="orders-container">
              <div className="orders-list">
                {orders.length === 0 ? (
                  <p>No orders found for the selected filter.</p>
                ) : (
                  <>
                    <div className="order-list-header">
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
                        onClick={() => setSelectedOrder(order)}
                      >
                        <span className="order-id-col">{order.id.slice(0, 8)}...</span>
                        <span className="customer-col">{order.customerName}</span>
                        <span className="date-col">{formatDate(order.createdAt)}</span>
                        <span className="amount-col">₹{order.total?.toFixed(2) || '0.00'}</span>
                        <span className={`status-col status-${order.status || 'pending'}`}>
                          {order.status || 'pending'}
                        </span>
                        <span className="actions-col">
                          <button 
                            className="view-order-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedOrder(order);
                            }}
                          >
                            View
                          </button>
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Order Details Panel */}
              {selectedOrder && (
                <div className="order-details-panel">
                  <div className="order-details-header">
                    <h3>Order #{selectedOrder.id}</h3>
                    <button 
                      className="close-details-btn"
                      onClick={() => setSelectedOrder(null)}
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="order-status-section">
                    <span className={`order-status status-${selectedOrder.status || 'pending'}`}>
                      {selectedOrder.status || 'pending'}
                    </span>
                    
                    <div className="status-actions">
                      <button 
                        className={`status-btn ${selectedOrder.status === 'pending' ? 'active' : ''}`}
                        onClick={() => updateOrderStatus(selectedOrder.id, 'pending')}
                      >
                        Pending
                      </button>
                      <button 
                        className={`status-btn ${selectedOrder.status === 'processing' ? 'active' : ''}`}
                        onClick={() => updateOrderStatus(selectedOrder.id, 'processing')}
                      >
                        Processing
                      </button>
                      <button 
                        className={`status-btn ${selectedOrder.status === 'shipped' ? 'active' : ''}`}
                        onClick={() => updateOrderStatus(selectedOrder.id, 'shipped')}
                      >
                        Shipped
                      </button>
                      <button 
                        className={`status-btn ${selectedOrder.status === 'delivered' ? 'active' : ''}`}
                        onClick={() => updateOrderStatus(selectedOrder.id, 'delivered')}
                      >
                        Delivered
                      </button>
                      <button 
                        className={`status-btn ${selectedOrder.status === 'cancelled' ? 'active' : ''}`}
                        onClick={() => updateOrderStatus(selectedOrder.id, 'cancelled')}
                      >
                        Cancelled
                      </button>
                    </div>
                  </div>
                  
                  <div className="order-info-grid">
                    <div className="order-meta">
                      <h4>Order Information</h4>
                      <p><strong>Date:</strong> {formatDate(selectedOrder.createdAt)}</p>
                      {selectedOrder.lastUpdated && (
                        <p><strong>Last Updated:</strong> {formatDate(selectedOrder.lastUpdated)}</p>
                      )}
                    </div>
                    
                    <div className="customer-info">
                      <h4>Customer Details</h4>
                      <p><strong>Name:</strong> {selectedOrder.customerName}</p>
                      <p><strong>Email:</strong> {selectedOrder.customerEmail}</p>
                      <p><strong>Phone:</strong> {selectedOrder.customerPhone}</p>
                      <p><strong>Address:</strong> {selectedOrder.customerAddress}</p>
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
                        {selectedOrder.items?.map((item, idx) => (
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
                      <span>₹{selectedOrder.subtotal?.toFixed(2) || '0.00'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Tax (18%)</span>
                      <span>₹{selectedOrder.tax?.toFixed(2) || '0.00'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>₹{selectedOrder.total?.toFixed(2) || '0.00'}</span>
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
                      className="resend-email-btn"
                      onClick={() => resendOrderEmail(selectedOrder)}
                    >
                      Resend Email
                    </button>
                    <button 
                      className="delete-order-btn"
                      onClick={() => deleteOrder(selectedOrder.id)}
                    >
                      Delete Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;