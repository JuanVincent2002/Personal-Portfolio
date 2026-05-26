import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactPage.css";

import whatsappIcon from "../../assets/logo_whatsapp.png";
import linkedinIcon from "../../assets/logo_linkedin.png";
import instagramIcon from "../../assets/logo_instagram.png";
import githubIcon from "../../assets/logo_github.png";
import gmailIcon from "../../assets/logo_gmail.png";

const contacts = [
  { 
    icon: whatsappIcon, 
    label: "WhatsApp", 
    handle: "+62895395126811", 
    href: "https://wa.me/62895395126811", 
    color: "#25d366" 
  },
  { 
    icon: linkedinIcon, 
    label: "LinkedIn", 
    handle: "www.linkedin.com/in/juan-vincent-elfonda", 
    href: "https://www.linkedin.com/in/juan-vincent-elfonda/", 
    color: "#0a66c2" 
  },
  { 
    icon: instagramIcon, 
    label: "Instagram", 
    handle: "@vincentelfonda_", 
    href: "https://www.instagram.com/vincentelfonda_", 
    color: "#e1306c" 
  },
  { 
    icon: githubIcon, 
    label: "GitHub", 
    handle: "github.com/juanvincent-elfonda", 
    href: "https://github.com/JuanVincent2002", 
    color: "#f0f6fc" 
  },
  { 
    icon: gmailIcon, 
    label: "Gmail", 
    handle: "vincentelfonda123@gmail.com", 
    href: "mailto:vincentelfonda123@gmail.com", 
    color: "#ea4335" 
  },
];

export default function ContactPage({ onBack }) {
  const [hovered, setHovered] = useState(null);
  return (
    <PageWrapper onBack={onBack}>
      <SectionTitle label="CONTACT" sub="SYSTEM — COMMUNICATION RELAY" />
      <div className="contact-container">
        <div className="contact-subtitle">ESTABLISHING SECURE CONNECTION — CHOOSE CHANNEL</div>
        <div className="contact-list">
          {contacts.map((c, i) => (
            <a 
              key={i} 
              href={c.href} 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)} 
              onMouseLeave={() => setHovered(null)}
              className={`contact-item ${hovered === i ? 'hovered' : ''}`}
            >
              <div className="contact-icon">
                <img src={c.icon} alt={c.label} />
              </div>
              <div className="contact-info">
                <div className="contact-label">{c.label}</div>
                <div className="contact-handle">{c.handle}</div>
              </div>
              <div className="contact-connect">CONNECT ▶</div>
            </a>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}