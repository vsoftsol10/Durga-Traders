import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import "./Marquee.css"; // Import the CSS file

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="contact-group">
        <div className="contact-item">
          <Mail className="mail-icon" />
          <span>durgatradersmdu@gmail.com</span>
        </div>
        
        <div className="contact-item">
          <MessageCircle className="whatsapp-icon" />
          <span>+91 7094310049</span>
        </div>
        
        <div className="contact-item">
          <Phone className="phone-icon" />
          <span>Customer Support: 0452371049</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;