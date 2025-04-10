import React, { useState, useEffect } from 'react';
import './ProductPage.css'

import personProduct from "../../assets/Personal-Products.gif"

import purifier from '../../assets/water_purifier.jpg'

// Mock products data
const products = [
  {
    id: 1,
    name: 'DT-CLEANWATER',
    description: 'Advanced RO technology with 7-stage purification.',
    image: purifier,
    price: 299,
    rating: 4.8,
    feature: 'Removes 99.9% impurities'
  },
  {
    id: 2,
    name: 'DT-AQUATOUCH',
    description: 'UV purification that eliminates harmful bacteria and viruses.',
    image: purifier,
    price: 249,
    rating: 4.7,
    feature: 'Zero maintenance'
  },
  {
    id: 3,
    name: 'DT-WATERLILY',
    description: 'Premium water softener with smart regeneration technology.',
    image: purifier,
    price: 379,
    rating: 4.9,
    feature: 'App controlled'
  },
  {
    id: 4,
    name: 'DT-ROMA',
    description: 'Compact RO with mineralization technology.',
    image: purifier,
    price: 319,
    rating: 4.6,
    feature: 'Adds essential minerals'
  },
  {
    id: 5,
    name: 'WHALE 25',
    description: 'Advanced UV purification with TDS controller.',
    image: purifier,
    price: 289,
    rating: 4.7,
    feature: 'Digital display'
  },
  {
    id: 6,
    name: 'SKID 25 LPH',
    description: 'Intelligent water softener with salt optimization.',
    image: purifier,
    price: 349,
    rating: 4.8,
    feature: 'Self-cleaning'
  },
  {
    id: 7,
    name: '50 LPH OPEN',
    description: 'Compact RO with mineralization technology.',
    image: purifier,
    price: 319,
    rating: 4.6,
    feature: 'Adds essential minerals'
  },
  {
    id: 8,
    name: '50 LPH CLOSED',
    description: 'Advanced UV purification with TDS controller.',
    image: purifier,
    price: 289,
    rating: 4.7,
    feature: 'Digital display'
  },
  {
    id: 9,
    name: 'DT-UNDERSINK',
    description: 'Intelligent water softener with salt optimization.',
    image: purifier,
    price: 349,
    rating: 4.8,
    feature: 'Self-cleaning'
  }
];

// Cart Context
const CartContext = React.createContext();

// Modern Product Item Component
const ProductItem = ({ product, index, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  
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

  const handleAddToCart = () => {
    addToCart(product);
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
          <div className="product-price">${product.price}</div>
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
          <button className="cta-button" onClick={handleAddToCart}>
            <span className="button-text">Add to Cart</span>
            <span className="button-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </span>
          </button>
          
          <button className="details-button">
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
          ${totalPrice}
        </span>
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </button>
    </div>
  );
};

// Checkout Page Component
const CheckoutPage = ({ cartItems, totalPrice, goBackToProducts, removeFromCart }) => {
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
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <div className="cart-item-feature">{item.feature}</div>
                </div>
                <div className="cart-item-price">${item.price}</div>
                <button 
                  className="remove-item-button" 
                  onClick={() => removeFromCart(index)}
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
              <span>${totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${(totalPrice * 1.08).toFixed(2)}</span>
            </div>
            
            <button className="place-order-button">
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
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(prev => prev + product.price);
  };
  
  const removeFromCart = (index) => {
    // Create a copy of the current cart items
    const updatedCart = [...cartItems];
    // Get the price of the item to be removed
    const removedItemPrice = updatedCart[index].price;
    // Remove the item at the specified index
    updatedCart.splice(index, 1);
    // Update cart items and total price
    setCartItems(updatedCart);
    setTotalPrice(prev => prev - removedItemPrice);
  };
  
  const navigateToCheckout = () => {
    setShowCheckout(true);
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  const goBackToProducts = () => {
    setShowCheckout(false);
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalPrice }}>
      <div className="product-page">
        {/* Background elements */}
        <div className="water-background"></div>
        <div className="light-rays"></div>
        
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
              <p className="page-subtitle">
                Experience crystal clear water with our cutting-edge purification technology.
                Our products combine innovation with elegance for your healthier lifestyle.
              </p>
            </div>
            <img src={personProduct} alt="Poster" className='ProductPoster' />
            {/* Product grid */}
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
        
        {/* Bottom wave decoration */}
        <div className="bottom-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#0062cc" opacity="0.2"></path>
          </svg>
        </div>
      </div>
    </CartContext.Provider>
  );
};


export default ProductPage;