import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
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
  });

  const [editingProduct, setEditingProduct] = useState(null);

  const productsRef = collection(db, 'products');

  // Debugging state changes
  useEffect(() => {
    console.log('Current products state:', products);
    console.log('Loading state:', loading);
    console.log('Error state:', error);
  }, [products, loading, error]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      setLoading(true); // Ensure loading is true when fetching
      
      const data = await getDocs(productsRef);
      
      if (data.empty) {
        console.log("No products found in the collection");
        setProducts([]);
        setLoading(false);
        return;
      }
      
      // Log raw data for debugging
      console.log("Raw data docs:", data.docs.length);
      
      // Map and clean up data
      const productsArray = data.docs.map(doc => {
        const rawData = doc.data();
        console.log("Raw doc data:", rawData); // Log raw data
        
        // Clean data by trimming keys
        const cleanData = {};
        Object.keys(rawData).forEach(key => {
          const trimmedKey = key.trim();
          cleanData[trimmedKey] = rawData[key];
        });
        
        return { ...cleanData, id: doc.id };
      });
      
      console.log("Processed products:", productsArray);
      setProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products: " + error.message);
      setLoading(false);
    }
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
      });
      setNewProduct({ name: '', description: '', feature: '', image: '', price: '', rating: '' });
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
    setEditingProduct(product);
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, 'products', editingProduct.id);
      await updateDoc(docRef, {
        ...editingProduct,
        price: Number(editingProduct.price),
        rating: parseFloat(editingProduct.rating) || 0,
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
      {/* <div className="debug-info">
        <p>Debug Info:</p>
        <p>Products Count: {products.length}</p>
        <p>Loading State: {loading ? 'Loading' : 'Not Loading'}</p>
        <p>Error State: {error ? error : 'No Errors'}</p>
      </div> */}

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
          placeholder="Price (required)"
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
              <p className="debug-message">Product {index + 1}: {product.name || 'Unnamed'}</p>
              
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
                  <button onClick={() => handleEdit(product)} className='editButton'>Edit</button>
                  <button onClick={() => handleDelete(product.id)} className='deleteButton'>Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;