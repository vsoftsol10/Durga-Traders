import React, { useState } from 'react';
import './CheckoutPage.css'; // You'll need to create this CSS file
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// We'll use EmailJS for sending emails
import { getFunctions, httpsCallable } from 'firebase/functions';

// Payment gateway integration component
const PaymentGateway = ({ orderDetails, onPaymentComplete, onCancel }) => {
  return (
    <div className="payment-gateway">
      <div className="payment-header">
        <h2>Complete Payment</h2>
        <button className="close-button" onClick={onCancel}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="payment-options">
        <div className="payment-method-selector">
          <label className="payment-option">
            <input type="radio" name="paymentMethod" value="ccavenue" defaultChecked />
            <span className="checkmark"></span>
            <span className="method-name">CCAvenue</span>
            <div className="method-logo">
              <img src="/ccavenue-logo.png" alt="CCAvenue" />
              <div className="card-types">
                <img src="/visa.png" alt="Visa" />
                <img src="/mastercard.png" alt="Mastercard" />
                <img src="/amex.png" alt="American Express" />
                <img src="/netbanking.png" alt="Net Banking" />
              </div>
            </div>
          </label>
        </div>
        
        <div className="payment-summary">
          <h3>Payment Summary</h3>
          <div className="summary-item">
            <span>Order Total:</span>
            <span>₹{((orderDetails?.totalAmount || 0) * 1.18).toFixed(2)}</span>
          </div>
        </div>
        
        <div className="payment-actions">
          <button className="pay-now-button" onClick={onPaymentComplete}>
            Proceed to Payment Gateway
          </button>
          <p className="security-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Secure payment powered by CCAvenue
          </p>
        </div>
      </div>
    </div>
  );
};

// Email service to send order details to admin
const sendOrderToAdmin = async (orderData) => {
  try {
    // Initialize EmailJS with your user ID (you'll need to sign up at emailjs.com)
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const USER_ID = 'your_user_id';
    const ADMIN_EMAIL = 'admin@yourcompany.com'; // Replace with your admin email
    
    // Format order items for email
    const itemsList = orderData.items.map(item => 
      `${item.name} ${item.selectedOption ? `(${item.selectedOption})` : ''} - ₹${item.price}`
    ).join('\n');
    
    // Prepare template parameters
    const templateParams = {
      to_email: ADMIN_EMAIL,
      from_name: 'Online Store Order System',
      subject: `New Order #${orderData.orderNumber}`,
      customer_name: orderData.customerDetails.fullName,
      customer_email: orderData.customerDetails.email,
      customer_phone: orderData.customerDetails.mobileNumber,
      customer_address: `${orderData.customerDetails.address}, ${orderData.customerDetails.city}, ${orderData.customerDetails.state} - ${orderData.customerDetails.zipCode}`,
      order_number: orderData.orderNumber,
      order_items: itemsList,
      subtotal: orderData.totalAmount.toFixed(2),
      tax: (orderData.totalAmount * 0.18).toFixed(2),
      total_amount: (orderData.totalAmount * 1.18).toFixed(2),
      order_date: new Date().toLocaleString()
    };
    
    // Send the email
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Also send confirmation email to customer
const sendConfirmationToCustomer = async (orderData) => {
  try {
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_customer_template_id';
    const USER_ID = 'your_user_id';
    
    // Format order items for email
    const itemsList = orderData.items.map(item => 
      `${item.name} ${item.selectedOption ? `(${item.selectedOption})` : ''} - ₹${item.price}`
    ).join('\n');
    
    // Prepare template parameters
    const templateParams = {
      to_email: orderData.customerDetails.email,
      from_name: 'Pure Water Solutions',
      subject: `Your Order #${orderData.orderNumber} has been confirmed`,
      customer_name: orderData.customerDetails.fullName,
      order_number: orderData.orderNumber,
      order_items: itemsList,
      subtotal: orderData.totalAmount.toFixed(2),
      tax: (orderData.totalAmount * 0.18).toFixed(2),
      total_amount: (orderData.totalAmount * 1.18).toFixed(2),
      order_date: new Date().toLocaleString()
    };
    
    // Send the email
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log('Customer confirmation email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending customer email:', error);
    return false;
  }
};

// Main CheckoutPage Component
const CheckoutPage = () => {
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const navigate = useNavigate();
  
  // Get cart data from sessionStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = sessionStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [totalPrice, setTotalPrice] = useState(() => {
    const savedPrice = sessionStorage.getItem('totalPrice');
    return savedPrice ? parseFloat(savedPrice) : 0;
  });
  
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const goBackToProducts = () => {
    navigate("/personal-products");
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Validate form before proceeding
  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) 
      errors.fullName = 'Name is required';
    
    if (!formData.mobileNumber.trim()) 
      errors.mobileNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobileNumber)) 
      errors.mobileNumber = 'Enter a valid 10-digit mobile number';
    
    if (!formData.email.trim()) 
      errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) 
      errors.email = 'Enter a valid email address';
    
    if (!formData.address.trim()) 
      errors.address = 'Address is required';
    
    if (!formData.city.trim()) 
      errors.city = 'City is required';
    
    if (!formData.state.trim()) 
      errors.state = 'State is required';
    
    if (!formData.zipCode.trim()) 
      errors.zipCode = 'ZIP code is required';
    else if (!/^\d{5,6}$/.test(formData.zipCode)) 
      errors.zipCode = 'Enter a valid ZIP code';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle place order button click
  const handlePlaceOrder = () => {
    if (validateForm()) {
      setShowPaymentGateway(true);
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Handle payment completion
  

  // In your handlePaymentComplete function:
  const handlePaymentComplete = async () => {
    setIsProcessing(true);
    
    // Generate a random order number
    const newOrderNumber = 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    
    // Prepare order data
    const orderData = {
      orderNumber: newOrderNumber,
      customerDetails: formData,
      items: cartItems || [],
      totalAmount: totalPrice || 0
    };
    
    try {
      // Call Firebase function
      const functions = getFunctions();
      const processOrder = httpsCallable(functions, 'processOrder');
      const result = await processOrder(orderData);
      
      if (result.data.success) {
        // Update order status
        setOrderNumber(newOrderNumber);
        setOrderPlaced(true);
        setShowPaymentGateway(false);
        
        // Clear cart after successful order
        sessionStorage.removeItem('cartItems');
        sessionStorage.removeItem('totalPrice');
      } else {
        throw new Error(result.data.message || 'Order processing failed');
      }
    } catch (error) {
      console.error('Failed to process order:', error);
      setEmailStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle payment cancellation
  const handlePaymentCancel = () => {
    setShowPaymentGateway(false);
  };

  // Ensure cartItems is an array to prevent errors
  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const safeTotalPrice = typeof totalPrice === 'number' ? totalPrice : 0;

  // If order is successfully placed, show confirmation
  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order number is <strong>{orderNumber}</strong>.</p>
        <p>We've sent the order details to your email address {formData.email}.</p>
        
        {emailStatus === 'error' && (
          <div className="email-error-message">
            <p>There was an issue sending your order confirmation email. Please contact our support team if you don't receive it soon.</p>
          </div>
        )}
        
        <button className="continue-shopping" onClick={goBackToProducts}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button className="back-button" onClick={goBackToProducts}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Products
        </button>
        <h1 className="checkout-title">Complete Your Order</h1>
      </div>
      
      {/* Main checkout content */}
      <div className="checkout-content">
        {/* Customer Details Form - Left Side */}
        <div className="customer-details">
          <h2>Customer Details</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="required">*</span></label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleInputChange}
              className={formErrors.fullName ? 'error' : ''}
            />
            {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number <span className="required">*</span></label>
            <input 
              type="tel" 
              id="mobileNumber" 
              name="mobileNumber" 
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={formErrors.mobileNumber ? 'error' : ''}
            />
            {formErrors.mobileNumber && <p className="error-message">{formErrors.mobileNumber}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Delivery Address <span className="required">*</span></label>
            <textarea 
              id="address" 
              name="address" 
              value={formData.address}
              onChange={handleInputChange}
              className={formErrors.address ? 'error' : ''}
            ></textarea>
            {formErrors.address && <p className="error-message">{formErrors.address}</p>}
          </div>
          
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="city">City <span className="required">*</span></label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city}
                onChange={handleInputChange}
                className={formErrors.city ? 'error' : ''}
              />
              {formErrors.city && <p className="error-message">{formErrors.city}</p>}
            </div>
            
            <div className="form-group half">
              <label htmlFor="state">State <span className="required">*</span></label>
              <input 
                type="text" 
                id="state" 
                name="state" 
                value={formData.state}
                onChange={handleInputChange}
                className={formErrors.state ? 'error' : ''}
              />
              {formErrors.state && <p className="error-message">{formErrors.state}</p>}
            </div>
          </div>
          
          <div className="form-group half">
            <label htmlFor="zipCode">ZIP Code <span className="required">*</span></label>
            <input 
              type="text" 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode}
              onChange={handleInputChange}
              className={formErrors.zipCode ? 'error' : ''}
            />
            {formErrors.zipCode && <p className="error-message">{formErrors.zipCode}</p>}
          </div>
        </div>
        
        {/* Order Summary - Right Side */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-products">
            {safeCartItems.length > 0 ? (
              safeCartItems.map((item, index) => (
                <div key={`${item.id || index}-${index}`} className="summary-product-item">
                  <div className="product-thumbnail">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-model">{item.selectedOption || 'Standard Model'}</p>
                  </div>
                  <div className="product-price">₹{item.price}</div>
                </div>
              ))
            ) : (
              <div className="empty-items-message">
                <p>No items in cart. Please add some products before checkout.</p>
              </div>
            )}
          </div>
          
          <div className="cost-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{safeTotalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax (18%)</span>
              <span>₹{(safeTotalPrice * 0.18).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{(safeTotalPrice * 1.18).toFixed(2)}</span>
            </div>
          </div>
          
          <button 
            className="place-order-button" 
            onClick={handlePlaceOrder}
            disabled={safeCartItems.length === 0}
          >
            Place Order
          </button>
          
          <div className="secure-checkout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Your information is secured with SSL encryption</span>
          </div>
        </div>
      </div>
      
      {/* Payment Gateway Modal */}
      {showPaymentGateway && (
        <div className="payment-modal">
          <div className="modal-overlay" onClick={handlePaymentCancel}></div>
          <div className="modal-content">
            <PaymentGateway 
              orderDetails={{ 
                customerDetails: formData,
                items: safeCartItems,
                totalAmount: safeTotalPrice
              }}
              onPaymentComplete={handlePaymentComplete}
              onCancel={handlePaymentCancel}
            />
          </div>
        </div>
      )}
      
      {/* Processing Overlay */}
      {isProcessing && (
        <div className="processing-overlay">
          <div className="processing-spinner"></div>
          <p>Processing your order...</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;