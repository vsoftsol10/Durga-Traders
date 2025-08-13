import React, { useState, useRef } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Increased file size limit to 5MB
      if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
        setFormErrors({
          ...formErrors,
          file: "File size must be less than 5MB"
        });
        setUploadedFile(null);
        return;
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/gif',
        'text/plain'
      ];

      if (!allowedTypes.includes(file.type)) {
        setFormErrors({
          ...formErrors,
          file: "Please upload a valid file (PDF, DOC, DOCX, JPG, PNG, GIF, TXT)"
        });
        setUploadedFile(null);
        return;
      }

      setUploadedFile(file);
      // Clear any previous file errors
      const newErrors = { ...formErrors };
      delete newErrors.file;
      setFormErrors(newErrors);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.value = '';
    }
    const newErrors = { ...formErrors };
    delete newErrors.file;
    setFormErrors(newErrors);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation (2-100 characters)
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name must not exceed 100 characters";
      isValid = false;
    }

    // Phone validation (10-15 digits)
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = "Phone number must be 10-15 digits";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation (10-1000 characters)
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    } else if (formData.message.trim().length > 1000) {
      errors.message = "Message must not exceed 1000 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Create FormData object
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name.trim());
        formDataToSend.append("phone", formData.phone.replace(/\D/g, ""));
        formDataToSend.append("email", formData.email.trim());
        formDataToSend.append("message", formData.message.trim());

        // Add file if uploaded
        if (uploadedFile) {
          formDataToSend.append("attachment", uploadedFile);
        }
        // Send to backend using environment variable
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        const result = await response.json();

        if (response.ok && result.success) {
          // Show success message
          setShowSuccess(true);
          setShowError(false);
          setFormErrors({});

          // Reset form
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setUploadedFile(null);

          // Clear file input
          const fileInput = document.getElementById("file-upload");
          if (fileInput) {
            fileInput.value = "";
          }

          // Hide success message after 5 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        } else {
          // Handle different types of errors
          if (result.details && Array.isArray(result.details)) {
            // Handle validation errors from backend
            const backendErrors = {};
            result.details.forEach((detail) => {
              backendErrors[detail.field] = detail.message;
            });
            setFormErrors(backendErrors);
          } else {
            // Handle general errors
            throw new Error(result.error || "Failed to send message");
          }
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Character count helpers
  const getCharacterCount = (field) => {
    return formData[field].length;
  };

  const getCharacterCountClass = (field, max) => {
    const count = getCharacterCount(field);
    if (count > max * 0.9) return 'char-count warning';
    if (count > max) return 'char-count error';
    return 'char-count';
  };

  return (
    <div className="contact-container">
      {/* Left: Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              className={formErrors.name ? "error" : ""}
              maxLength={100}
            />
            <div className="validation-info">
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              {/* <span className={getCharacterCountClass('name', 100)}>
                {getCharacterCount('name')}/100
              </span> */}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number" 
              className={formErrors.phone ? "error" : ""}
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              className={formErrors.email ? "error" : ""}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          {/* File Upload Section */}
          <div className="form-group">
            <label htmlFor="file-upload">Upload File (Optional)</label>
            <div className="file-upload-container">
              <input 
                type="file" 
                id="file-upload"
                name="attachment"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt"
                className={`file-input ${formErrors.file ? "error" : ""}`}
              />
              <label htmlFor="file-upload" className="file-upload-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
                Choose File
              </label>
              <span className="file-info">
                Max size: 5MB | Formats: PDF, DOC, DOCX, JPG, PNG, GIF, TXT
              </span>
            </div>
            
            {uploadedFile && (
              <div className="file-preview">
                <div className="file-item">
                  <div className="file-details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                    </svg>
                    <div className="file-info-text">
                      <span className="file-name">{uploadedFile.name}</span>
                      <span className="file-size">{formatFileSize(uploadedFile.size)}</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={removeFile}
                    className="remove-file-btn"
                    aria-label="Remove file"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            )}
            
            {formErrors.file && <span className="error-message">{formErrors.file}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              placeholder="How can we help you with your water purification needs? (minimum 10 characters)" 
              className={formErrors.message ? "error" : ""}
              maxLength={1000}
            ></textarea>
            <div className="validation-info">
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              {/* <span className={getCharacterCountClass('message', 1000)}>
                {getCharacterCount('message')}/1000 (min: 10)
              </span> */}
            </div>
          </div>
          
          <button 
            type="submit" 
            className="water-drop-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <span className="btn-overlay"></span>
          </button>
        </form>
      </div>
      
      {/* Right: Contact Info */}
      <div className="contact-info">
        <h2>Our Location</h2>
        <div className="info-content">
          <div className="address-block">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="address-text">
              <h3>Address</h3>
              <p>
                60-D, Thangavel Complex,<br />
                Tiruparankundram Road,<br />
                Vasantha Nagar, Madurai - 625003
              </p>
            </div>
          </div>
          
          <div className="contact-block">
            <div className="contact-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <a href="mailto:durgatradersmdu@gmail.com" className='email-link'>durgatradersmdu@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Mobile</h3>
                <a href="tel:+917094310049" className="phone-link">+91 70943 10049</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.944 1.164-.177.199-.352.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              </div>
              <div className="contact-text">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/917094499037" className="whatsapp-link">+91 70944 99037</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="map-container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.326869837961!2d78.09694327501786!3d9.906710474633057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf84aa8d6149%3A0x314572a8b8d12289!2sDurga%20Traders!5e0!3m2!1sen!2sin!4v1744030724284!5m2!1sen!2sin" 
            width="600" 
            height="250" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        />
          
          <div className="map-overlay">
            <div className="water-drop"></div>
            <div className="water-drop"></div>
            <div className="water-drop"></div>
          </div>
        </div>
      </div>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Message sent successfully! We'll get back to you soon.</span>
        </div>
      )}
      
      {/* Error Message */}
      {showError && (
        <div className="error-notification">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>Failed to send message. Please try again later.</span>
        </div>
      )}
    </div>
  );
};

export default ContactUs;