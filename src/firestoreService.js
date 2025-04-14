// src/firestoreService.js
import { 
    collection, 
    doc, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where 
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  // Get all products
  export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  };
  
  // Get product by ID
  export const getProductById = async (productId) => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      return null;
    }
  };
  
  // Get products by category
  export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  };
  
  // Add new product
  export const addProduct = async (productData) => {
    const docRef = await addDoc(collection(db, "products"), productData);
    return docRef.id;
  };
  
  // Update product
  export const updateProduct = async (productId, productData) => {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, productData);
    return productId;
  };
  
  // Delete product
  export const deleteProduct = async (productId) => {
    await deleteDoc(doc(db, "products", productId));
    return productId;
  };