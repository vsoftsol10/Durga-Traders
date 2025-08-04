import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Marquee.css";

const Marquee = () => {
  const navigate = useNavigate();

  return (
    <div className="marquee-container">
      <div className="contact-group">
        {/* Email - opens mail app */}
        <div
          className="contact-item"
          onClick={() => window.location.href = "mailto:durgatradersmdu@gmail.com"}
          style={{ cursor: "pointer" }}
        >
          <Mail className="mail-icon" />
          <span>durgatradersmdu@gmail.com</span>
        </div>

        {/* WhatsApp - opens WhatsApp chat */}
        <div
          className="contact-item"
          onClick={() => window.open("https://wa.me/917094310049", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <MessageCircle className="whatsapp-icon" />
          <span>+91 7094310049</span>
        </div>

        {/* Phone - opens dialer or navigates to contact page */}
        <div
          className="contact-item"
          onClick={() => window.location.href = "tel:0452371049"}
          style={{ cursor: "pointer" }}
        >
          <Phone className="phone-icon" />
          <span>Customer Support: 0452371049</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
