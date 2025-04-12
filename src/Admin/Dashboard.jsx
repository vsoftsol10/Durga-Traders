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
import { db } from '../firebase'; // Adjust this path if needed

const Dashboard = () => {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getDocs(productsRef);
    setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const handleAdd = async () => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.image
    ) {
      alert('Please fill in required fields');
      return;
    }

    await addDoc(productsRef, {
      ...newProduct,
      price: Number(newProduct.price),
      rating: parseFloat(newProduct.rating),
    });
    setNewProduct({ name: '', description: '', feature: '', image: '', price: '', rating: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async () => {
    const docRef = doc(db, 'products', editingProduct.id);
    await updateDoc(docRef, {
      ...editingProduct,
      price: Number(editingProduct.price),
      rating: parseFloat(editingProduct.rating),
    });
    setEditingProduct(null);
    fetchProducts();
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      <div className="add-product-form">
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Name"
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
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Rating"
          value={newProduct.rating}
          onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <div className="product-list">
        <h3>Products</h3>
        {products.map(product => (
          <div key={product.id} className="product-card">
            {editingProduct?.id === product.id ? (
              <>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProduct.feature}
                  onChange={(e) => setEditingProduct({ ...editingProduct, feature: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProduct.image}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                />
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                />
                <input
                  type="number"
                  value={editingProduct.rating}
                  onChange={(e) => setEditingProduct({ ...editingProduct, rating: e.target.value })}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setEditingProduct(null)}>Cancel</button>
              </>
            ) : (
              <>
                <img src={product.image} alt={product.name} width="100" />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p><b>Feature:</b> {product.feature}</p>
                <p><b>Price:</b> ₹{product.price}</p>
                <p><b>Rating:</b> ⭐ {product.rating}</p>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
