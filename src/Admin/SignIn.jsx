import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import "./SignIn.css";
import water from "../assets/water.webp";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYc_-tBjLWV6Wp_XXRvIMF1d3PgZv_Fvs",
    authDomain: "durgatraders-6a986.firebaseapp.com",
    projectId: "durgatraders-6a986",
    storageBucket: "durgatraders-6a986.firebasestorage.app",
    messagingSenderId: "812940099744",
    appId: "1:812940099744:web:20330122a7c944813449c5",
    measurementId: "G-8YBYXSPNJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    try {
      const { email, password } = credentials;
  
      // Sign in using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check user role in Firestore
      const userDocRef = doc(db, "users", user.uid);
      console.log('User UID:', user.uid);

      const userDocSnap = await getDoc(userDocRef);
  
      if (!userDocSnap.exists()) {
        throw new Error("No user profile found in Firestore.");
      }
  
      const userData = userDocSnap.data();

      if (userData.role !== "admin") {
        throw new Error("Access denied: You are not an admin.");
      }
  
      console.log("Admin signed in successfully!");
      navigate('/admin/dashboard');
  
    } catch (error) {
      console.error('Error signing in:', error);
  
      if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (error.message === 'Access denied: You are not an admin.') {
        setError('You are not authorized to access the admin panel.');
      } else if (error.message === 'No user profile found in Firestore.') {
        setError('No user profile found. Contact support.');
      } else {
        setError('Failed to sign in. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="admin-signin-container">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${water})`
        }}
      >
        <div className="logo">Dugra Traders</div>
      </div>
      
      <div className="content-container">
        <div className="hello-text">
          <h1>Hello!</h1>
        </div>
        
        <div className="signin-form-container">
          <h2 className="signin-header">Sign in</h2>
          
          {error && (
            <div className="error-message" style={{ color: '#ff5555', marginBottom: '1rem', fontSize: '0.875rem' }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="input-label">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="input-field"
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="input-field"
                required
                disabled={loading}
              />
            </div>
            
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
