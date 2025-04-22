import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust path as needed
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specifications');
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        // Always fetch from Firestore for complete data
        const productDoc = await getDoc(doc(db, 'products', productId));
        
        if (productDoc.exists()) {
          const productData = productDoc.data();
          
          // Debug data
          console.log("Raw product data from Firestore:", productData);
          console.log("Specifications type:", typeof productData.specifications);
          console.log("Benefits type:", typeof productData.benefits);
          
          // Format data to ensure specifications is an object and benefits is an array
          const formattedProduct = { 
            id: productDoc.id, 
            ...productData,
            specifications: productData.specifications ? 
              (typeof productData.specifications === 'object' ? productData.specifications : {}) : {},
            benefits: productData.benefits ? 
              (Array.isArray(productData.benefits) ? productData.benefits : 
              typeof productData.benefits === 'object' ? Object.values(productData.benefits) : []) : []
          };
          
          console.log("Formatted product from Firestore:", formattedProduct);
          setProduct(formattedProduct);
        } else {
          setError('Product not found');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to load product details. Please try again.');
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);
  
  // Set default selected option when product loads
  useEffect(() => {
    if (product && product.priceOptions && product.priceOptions.length > 0) {
      setSelectedOption(product.priceOptions[0]);
    }
  }, [product]);
  
  // Handle adding product to cart
  const handleAddToCart = () => {
    try {
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      
      // Create product object with selected option if applicable
      const cartProduct = {
        ...product,
        selectedOption: selectedOption ? selectedOption.name : null,
        price: selectedOption ? selectedOption.price : product.price,
        quantity: quantity
      };
      
      // Add to cart
      const updatedCart = [...existingCart, cartProduct];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      
      // Dispatch cart updated event
      const event = new CustomEvent('cartUpdated', { 
        detail: { count: updatedCart.length } 
      });
      window.dispatchEvent(event);
      
      // Show success message or feedback
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };
  
  // Function to render stars for rating
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
  
  if (loading) {
    return (
      <div className="product-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="product-details-error">
        <h2>Oops! Something went wrong</h2>
        <p>{error || 'Product not found'}</p>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back to Products
        </button>
      </div>
    );
  }
  
  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <button className="back-button" onClick={handleGoBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Products
        </button>
        
        <div className="product-details-content">
          <div className="product-image-section">
            <div className="product-image-container">
              <div className="water-overlay"></div>
              <img src={product.image} alt={product.name} className="product-detail-image" />
            </div>
          </div>
          
          <div className="product-info-section">
            <h1 className="product-detail-name">{product.name}</h1>
            
            <div className="product-detail-rating">
              {renderStars(product.rating)}
              <span className="rating-text">{product.rating}</span>
              {product.reviews && (
                <span className="review-count">({product.reviews} Reviews)</span>
              )}
            </div>
            
            <div className="product-detail-price">
              ₹{selectedOption ? selectedOption.price : product.price}
            </div>

            {/* Product feature if available */}
            {product.feature && (
              <div className="product-feature">
                <p className="feature-highlight">{product.feature}</p>
              </div>
            )}
            
            {/* Brief product description */}
            {product.description && (
              <div className="product-brief-description">
                <p>{product.description}</p>
              </div>
            )}
            
            {/* Product code and model number */}
            <div className="product-identifiers">
              {product.productCode && (
                <p className="product-code">Product Code: {product.productCode}</p>
              )}
              {product.model && (
                <p className="product-model">Model: {product.model}</p>
              )}
            </div>
            
            {/* Product options if available */}
            {product.priceOptions && product.priceOptions.length > 0 && (
              <div className="product-options">
                <h3>Available Options</h3>
                <div className="options-container">
                  {product.priceOptions.map((option, idx) => (
                    <div 
                      key={idx} 
                      className={`option-card ${selectedOption && selectedOption.name === option.name ? 'selected' : ''}`}
                      onClick={() => handleOptionChange(option)}
                    >
                      <span className="option-name">{option.name}</span>
                      <span className="option-price">₹{option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Purchase controls */}
            <div className="purchase-controls">
              <div className="quantity-control">
                <label htmlFor="quantity">Quantity:</label>
                <input 
                  type="number" 
                  id="quantity" 
                  name="quantity" 
                  min="1" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                />
              </div>
              
              <div className="action-buttons">
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add to Cart
                </button>
                <button className="buy-now-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product details tabs section */}
      <div className="product-details-tabs">
        <div className="tabs-container">
          <div 
            className={`tab ${activeTab === 'specifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </div>
          <div 
            className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            Benefits
          </div>
        </div>
        
        <div className="tab-content">
          {activeTab === 'specifications' && (
            <div className="tab-pane active">
              <h3>Product Specifications</h3>
              {product.specifications && typeof product.specifications === 'object' && 
               Object.keys(product.specifications).length > 0 ? (
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-name">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="no-data-message">No specifications available for this product.</p>
              )}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="tab-pane active">
              <h3>Product Benefits</h3>
              {product.benefits && Array.isArray(product.benefits) && product.benefits.length > 0 ? (
                <div className="benefits-section">
                  <ul className="benefits-list">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <div className="benefit-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div className="benefit-text">{benefit}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="no-data-message">No benefits listed for this product.</p>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Bubbles animation for water theme */}
      <div className="bubbles-container">
        {Array.from({ length: 15 }).map((_, i) => (
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

export default ProductDetailsPage;