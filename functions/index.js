// This file should be placed in your Firebase functions directory (typically /functions/index.js)
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

// Configure nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',  // e.g., 'gmail', 'outlook', etc.
  auth: {
    user: 'durgatradersro@gmail.com',  // Your email address
    pass: 'madurai03'  // Your email password or app-specific password
  }
});

// Store orders in Firestore and send emails
exports.processOrder = functions.https.onCall(async (data, context) => {
  try {
    // Extract order data
    const { orderNumber, customerDetails, items, totalAmount } = data;
    
    // Calculate tax and total
    const tax = totalAmount * 0.18;
    const finalTotal = totalAmount * 1.18;
    
    // Format date
    const orderDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });
    
    // Format items for email
    const itemsHtml = items.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name} ${item.selectedOption ? `(${item.selectedOption})` : ''}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${item.price}</td>
      </tr>
    `).join('');
    
    // Store order in Firestore
    await admin.firestore().collection('orders').doc(orderNumber).set({
      orderNumber,
      customerDetails,
      items,
      subtotal: totalAmount,
      tax,
      total: finalTotal,
      orderDate: new Date(),
      status: 'pending'
    });
    
    // Email to admin
    const adminMailOptions = {
      from: '"Pure Water Solutions" <your-email@gmail.com>',
      to: 'admin@yourcompany.com',  // Admin email address
      subject: `New Order #${orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #0062cc; margin: 0;">New Order Received</h1>
            <p style="color: #666; font-size: 16px;">Order #${orderNumber} | ${orderDate}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Customer Details</h2>
            <p><strong>Name:</strong> ${customerDetails.fullName}</p>
            <p><strong>Email:</strong> ${customerDetails.email}</p>
            <p><strong>Phone:</strong> ${customerDetails.mobileNumber}</p>
            <p><strong>Address:</strong> ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.zipCode}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Order Items</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 10px; text-align: left;">Product</th>
                  <th style="padding: 10px; text-align: right;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td style="padding: 10px; text-align: right;"><strong>Subtotal:</strong></td>
                  <td style="padding: 10px; text-align: right;">₹${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; text-align: right;"><strong>Tax (18%):</strong></td>
                  <td style="padding: 10px; text-align: right;">₹${tax.toFixed(2)}</td>
                </tr>
                <tr style="font-size: 18px; font-weight: bold;">
                  <td style="padding: 10px; text-align: right; border-top: 2px solid #ddd;">Total:</td>
                  <td style="padding: 10px; text-align: right; border-top: 2px solid #ddd;">₹${finalTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #0062cc; font-weight: bold;">Please process this order at your earliest convenience.</p>
          </div>
        </div>
      `
    };
    
    // Customer confirmation email
    const customerMailOptions = {
      from: '"Pure Water Solutions" <your-email@gmail.com>',
      to: customerDetails.email,
      subject: `Your Order #${orderNumber} is Confirmed`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #0062cc; margin: 0;">Order Confirmed</h1>
            <p style="color: #666; font-size: 16px;">Thank you for your purchase!</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Order Details</h2>
            <p><strong>Order Number:</strong> ${orderNumber}</p>
            <p><strong>Order Date:</strong> ${orderDate}</p>
            <p><strong>Delivery Address:</strong> ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.zipCode}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0;">Items Purchased</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 10px; text-align: left;">Product</th>
                  <th style="padding: 10px; text-align: right;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td style="padding: 10px; text-align: right;"><strong>Subtotal:</strong></td>
                  <td style="padding: 10px; text-align: right;">₹${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; text-align: right;"><strong>Tax (18%):</strong></td>
                  <td style="padding: 10px; text-align: right;">₹${tax.toFixed(2)}</td>
                </tr>
                <tr style="font-size: 18px; font-weight: bold;">
                  <td style="padding: 10px; text-align: right; border-top: 2px solid #ddd;">Total:</td>
                  <td style="padding: 10px; text-align: right; border-top: 2px solid #ddd;">₹${finalTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div style="background-color: #f0f7ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #0062cc; margin-top: 0;">What's Next?</h3>
            <p>We're processing your order and will send you a notification once it's ready for delivery.</p>
            <p>If you have any questions about your order, please contact our customer support at <a href="mailto:support@purewaters.com">support@purewaters.com</a> or call us at <a href="tel:+911234567890">+91 123 456 7890</a>.</p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
            <p>Thank you for choosing Pure Water Solutions!</p>
            <p>&copy; ${new Date().getFullYear()} Pure Water Solutions. All rights reserved.</p>
          </div>
        </div>
      `
    };
    
    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    
    // Return success response
    return {
      success: true,
      message: 'Order processed successfully',
      orderNumber
    };
    
  } catch (error) {
    console.error('Error processing order:', error);
    
    // Return error response
    return {
      success: false,
      message: 'Failed to process order',
      error: error.message
    };
  }
});

// Cloud function to get order status
exports.getOrderStatus = functions.https.onCall(async (data, context) => {
  try {
    const { orderNumber, email } = data;
    
    // Validate input
    if (!orderNumber || !email) {
      throw new Error('Order number and email are required');
    }
    
    // Get order from Firestore
    const orderDoc = await admin.firestore().collection('orders').doc(orderNumber).get();
    
    if (!orderDoc.exists) {
      throw new Error('Order not found');
    }
    
    const orderData = orderDoc.data();
    
    // Verify email matches for security
    if (orderData.customerDetails.email.toLowerCase() !== email.toLowerCase()) {
      throw new Error('Email does not match order records');
    }
    
    // Return order details
    return {
      success: true,
      orderNumber: orderData.orderNumber,
      status: orderData.status,
      orderDate: orderData.orderDate.toDate(),
      items: orderData.items,
      total: orderData.total
    };
    
  } catch (error) {
    console.error('Error getting order status:', error);
    
    return {
      success: false,
      message: error.message
    };
  }
});

// Admin function to update order status
exports.updateOrderStatus = functions.https.onCall(async (data, context) => {
  try {
    // Check if user is admin (you'll need proper authentication setup)
    if (!context.auth || !context.auth.token.admin) {
      throw new Error('Unauthorized access');
    }
    
    const { orderNumber, newStatus, trackingInfo } = data;
    
    // Update order in Firestore
    await admin.firestore().collection('orders').doc(orderNumber).update({
      status: newStatus,
      trackingInfo: trackingInfo || null,
      lastUpdated: new Date()
    });
    
    // Get the updated order
    const orderDoc = await admin.firestore().collection('orders').doc(orderNumber).get();
    const orderData = orderDoc.data();
    
    // If status changed to "shipped", send notification email to customer
    if (newStatus === 'shipped' && trackingInfo) {
      const customerMailOptions = {
        from: '"Pure Water Solutions" <your-email@gmail.com>',
        to: orderData.customerDetails.email,
        subject: `Your Order #${orderNumber} has been Shipped`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #0062cc; margin: 0;">Your Order is on the Way!</h1>
              <p style="color: #666; font-size: 16px;">Order #${orderNumber}</p>
            </div>
            
            <div style="background-color: #f0f7ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0;">Shipping Information</h2>
              <p><strong>Tracking Number:</strong> ${trackingInfo.trackingNumber || 'N/A'}</p>
              <p><strong>Carrier:</strong> ${trackingInfo.carrier || 'Our Delivery Partner'}</p>
              <p><strong>Estimated Delivery:</strong> ${trackingInfo.estimatedDelivery || 'Within 3-5 business days'}</p>
              ${trackingInfo.trackingUrl ? `<p><a href="${trackingInfo.trackingUrl}" style="color: #0062cc; font-weight: bold;">Track Your Package</a></p>` : ''}
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
              <p>Thank you for choosing Pure Water Solutions!</p>
              <p>If you have any questions, please contact our customer support at <a href="mailto:support@purewaters.com">support@purewaters.com</a>.</p>
            </div>
          </div>
        `
      };
      
      await transporter.sendMail(customerMailOptions);
    }
    
    // Return success
    return {
      success: true,
      message: `Order status updated to ${newStatus}`
    };
    
  } catch (error) {
    console.error('Error updating order status:', error);
    
    return {
      success: false,
      message: error.message
    };
  }
});