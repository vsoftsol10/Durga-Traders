import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // You'll need to create this file
import personProduct from "../../assets/Personal-Products-01.gif";
import footerProduct from "../../assets/Personal-Products-02.gif"
import { useNavigate, useLocation } from 'react-router-dom';

// CartContext - Create a shared context for cart state
const CartContext = React.createContext();

// Modern Product Item Component
const ProductItem = ({ product, index, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showOptions) return;
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cart-options-container')) {
        setShowOptions(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showOptions]);
  
  useEffect(() => {
    // Staggered animation on initial load
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, index * 150);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  // Generate stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} className="star-icon" width="16" height="16" viewBox="0 0 24 24">
          <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" className="star-icon" width="16" height="16" viewBox="0 0 24 24">
          <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fillOpacity="0.5"/>
          <path fill="#FFD700" d="M12 17.27V2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    
    return stars;
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setShowOptions(!showOptions);
  };

  // Add function to navigate to product details page
  const navigateToProductDetails = () => {
    navigate(`/products/${product.id}`, { 
      state: { product } // This passes the entire product object as state
    });
  };

  const selectOption = (optionName, optionPrice, e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    
    // Create a copy of the product with the selected option details
    const productWithOption = {
      ...product,
      selectedOption: optionName,
      price: optionPrice
    };
    
    addToCart(productWithOption);
    setShowOptions(false);
  };
  
  // Render options function - handles cases where product might not have options
  const renderOptions = () => {
    // If no price options exist, just use the default product price
    if (!product.priceOptions || product.priceOptions.length === 0) {
      return (
        <div 
          className="option-item"
          onClick={(e) => selectOption(product.name, product.price, e)}
        >
          <span className="option-name">{product.name}</span>
          <span className="option-price">₹{product.price}</span>
          <button 
            className="option-buy-now"
            onClick={(e) => {
              e.stopPropagation();
              selectOption(product.name, product.price, e);
            }}
          >
            Buy Now
          </button>
        </div>
      );
    }
    
    // Otherwise render all available options
    return product.priceOptions.map((option, idx) => (
      <div 
        key={idx} 
        className="option-item"
        onClick={(e) => selectOption(option.name, option.price, e)}
      >
        <span className="option-name">{option.name}</span>
        <span className="option-price">₹{option.price}</span>
        <button 
          className="option-buy-now"
          onClick={(e) => {
            e.stopPropagation();
            selectOption(option.name, option.price, e);
          }}
        >
          Buy Now
        </button>
      </div>
    ));
  };
  
  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''} ${animateIn ? 'animate-in' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-top">
        <div className="product-image-container">
          <div className="water-overlay"></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
          <div className="product-price">₹{product.price}</div>
        </div>
        
        <div className="rating-container">
          {renderStars(product.rating)}
          <span className="rating-text">{product.rating}</span>
        </div>
      </div>
      
      <div className="product-divider">
        <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="wave-fill"></path>
        </svg>
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="cart-options-container">
            <button className="cta-button" onClick={handleAddToCartClick}>
              <span className="button-text">Add to Cart</span>
              <span className="button-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
            </button>
            
            {/* Options Dropdown */}
            {showOptions && (
              <div className="options-dropdown">
                {renderOptions()}
              </div>
            )}
          </div>
          
          {/* Add onClick handler to the Details button */}
          <button className="details-button" onClick={navigateToProductDetails}>
            <span>Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Bubble animation elements */}
      <div className="bubbles-container">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ cartItems, totalPrice, navigateToCheckout }) => {
  return (
    <div className="cart-container">
      <button 
        className={`checkout-button ${cartItems.length > 0 ? 'has-items' : ''}`}
        onClick={navigateToCheckout}
        disabled={cartItems.length === 0}
      >
        <span className="checkout-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </span>
        <span className="checkout-text">
          Checkout
        </span>
        <span className="checkout-price">
          ₹{totalPrice.toFixed(2)}
        </span>
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </button>
    </div>
  );
};

// Pincode Modal Component
const PincodeModal = ({ open, onClose, primaryColor, secondaryColor }) => {
  const [pincode, setPincode] = useState('');
  const [resultType, setResultType] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  
  // Function to check if pincode is from Tamil Nadu
  const isTamilNaduPincode = (code) => {
    // Tamil Nadu pincodes typically start with 6
    // This is a simplified check - in a real app, you might want a more comprehensive validation
    return code.length === 6 && code.startsWith('6');
  };
  
  if (!open) return null;
  
  return (
    <div className="pincode-modal-overlay">
      <div className="pincode-modal">
        <div className="pincode-modal-header">
          <h2 className="pincode-modal-title">Enter Your Location PIN!</h2>
          <button 
            className="pincode-close-button"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="e.g. 600001"
          className="pincode-input"
        />
        <button
          className="pincode-submit-button"
          onClick={() => {
            if (isTamilNaduPincode(pincode)) {
              setResultType('success');
              setResultMessage('🎉 Yay! We deliver to your area in Tamil Nadu!');
            } else {
              setResultType('error');
              setResultMessage('🚫 Sorry, service not available in your region.');
            }
          }}
        >
          Submit
        </button>
        
        {resultMessage && (
          <div className={`pincode-result ${resultType}`}>
            {resultMessage}
          </div>
        )}
        
        {resultMessage && (
          <button
            className="pincode-continue-button"
            onClick={onClose}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

// Checkout Page Component
const CheckoutPage = ({ cartItems, totalPrice, goBackToProducts, removeFromCart }) => {
  const navigate = useNavigate();
  
  const goToCheckout = () => {
    // Store cart data in sessionStorage
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    sessionStorage.setItem('totalPrice', totalPrice);
    
    // Navigate to checkout page
    navigate("/checkout");
  }

  // New function to navigate to product details page
  const goToProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button className="back-button" onClick={goBackToProducts}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Products
        </button>
        <h1 className="checkout-title">Your Cart</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <button className="return-button" onClick={goBackToProducts}>
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <div 
                  className="cart-item-content"
                  onClick={() => goToProductDetails(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-description">
                      {item.selectedOption ? <span className="selected-option">{item.selectedOption} - </span> : ''}
                      {item.description}
                    </p>
                  </div>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>
                <button 
                  className="remove-item-button" 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when clicking remove button
                    removeFromCart(index);
                  }}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>₹{(totalPrice * 0.18).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{(totalPrice * 1.18).toFixed(2)}</span>
            </div>
            
            <button className="place-order-button" onClick={goToCheckout}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Main Product Page Component
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [openPincodeModal, setOpenPincodeModal] = useState(false); // Changed to false by default
  const navigate = useNavigate();
  const location = useLocation();

  // Check if it's the user's first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedProductPage');
    
    if (!hasVisitedBefore) {
      // First visit - show the modal
      setOpenPincodeModal(true);
      // Set flag in localStorage to remember this user has visited
      localStorage.setItem('hasVisitedProductPage', 'true');
    }
  }, []);

  // Check for state parameter on mount to show checkout if needed
  useEffect(() => {
    if (location.state && location.state.showCheckout) {
      setOpenPincodeModal(false);
      setShowCheckout(true);
    
      // Clear the state to avoid showing checkout again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  
  // Colors for styling
  const primaryColor = '#0062cc';
  const secondaryColor = '#0099ff';
  
  // Enhanced function to update cart (shared between components)
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
    
    // Calculate new total
    const newTotal = newCart.reduce((sum, item) => sum + (item.price || 0), 0);
    setTotalPrice(newTotal);
    
    // Dispatch cart updated event
    const event = new CustomEvent('cartUpdated', { 
      detail: { count: newCart.length, total: newTotal } 
    });
    window.dispatchEvent(event);
  };
  
  // Load initial cart data from localStorage on component mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
        
        // Calculate initial total price
        const initialTotal = parsedCart.reduce((sum, item) => sum + (item.price || 0), 0);
        setTotalPrice(initialTotal);
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
    
    // Listen for cart update events from other components
    const handleCartUpdated = (event) => {
      try {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          setCartItems(parsedCart);
          const newTotal = parsedCart.reduce((sum, item) => sum + (item.price || 0), 0);
          setTotalPrice(newTotal);
        }
      } catch (error) {
        console.error("Error handling cart update:", error);
      }
    };
    
    window.addEventListener('storage', handleCartUpdated);
    window.addEventListener('cartUpdated', handleCartUpdated);
    
    return () => {
      window.removeEventListener('storage', handleCartUpdated);
      window.removeEventListener('cartUpdated', handleCartUpdated);
    };
  }, []);
  
  // Fetch products from Firebase with price options directly from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        
        // Map products directly from Firebase, expecting price options to be included
        const productsList = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProducts(productsList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    updateCart(newCart);
  };
  
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };
  
  const navigateToCheckout = () => {
    if (cartItems.length === 0) return; // Prevent checkout with empty cart
    setShowCheckout(true);
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  const goBackToProducts = () => {
    setShowCheckout(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Function to reset the "visited before" flag - for testing purposes
  const resetPincodeModal = () => {
    localStorage.removeItem('hasVisitedProductPage');
    setOpenPincodeModal(true);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalPrice, removeFromCart }}>
      <div className="product-page">
        {/* Background elements */}
        <div className="water-background"></div>
        <div className="light-rays"></div>
        
        {/* Pincode Modal */}
        <PincodeModal 
          open={openPincodeModal} 
          onClose={() => setOpenPincodeModal(false)}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
        
        {!showCheckout ? (
          <>
            {/* Header section */}
            <div className="page-header">
              <h1 className="page-title">
                <span className="title-accent">Pure</span>Water Solutions
              </h1>
              <div className="title-decoration">
                <span className="drop drop-1"></span>
                <span className="drop drop-2"></span>
                <span className="drop drop-3"></span> 
                <span className="drop drop-4"></span> 
                <span className="drop drop-5"></span> 
                <span className="drop drop-6"></span> 
              </div>
            </div>
            <img src={personProduct} alt="Poster" className="ProductPoster" />
            {/* Loading state */}
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading products...</p>
              </div>
            ) : error ? (
              <div className="error-container">
                <p className="error-message">{error}</p>
                <button className="retry-button" onClick={() => window.location.reload()}>
                  Retry
                </button>
              </div>
            ) : (
              /* Product grid */
              <div className="product-grid">
                {products.map((product, index) => (
                  <ProductItem 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    addToCart={addToCart}
                  />
                ))}
              </div>
            )}
            <img src={footerProduct} alt="Poster" className="footerPoster" />
            
            {/* Cart/Checkout Button */}
            <Cart 
              cartItems={cartItems}
              totalPrice={totalPrice}
              navigateToCheckout={navigateToCheckout}
            />
          </>
        ) : (
          <CheckoutPage 
            cartItems={cartItems}
            totalPrice={totalPrice}
            goBackToProducts={goBackToProducts}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </CartContext.Provider>
  );
};

export default ProductPage
