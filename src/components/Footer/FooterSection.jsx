import styles from "./FooterSection.module.css";
import logo from "../../assets/logo.png";
import whatsappIcon from "../../assets/whatsappicon.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>

      {/* ================= EMAIL SIGNUP ================= */}
      <div className={styles.subscribe}>
        <div className={styles.container}>
          <h3 className={styles.titleUnderline}>
            SIGN UP FOR EMAIL UPDATES
          </h3>

          <div className={styles.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <div className={styles.footerContent}>
        <div className={styles.container}>

          {/* COMPANY INFO */}
          <div className={styles.companyInfo}>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Iconic Innovations Logo" className={styles.logo} />
              <h2>Iconic Innovations</h2>
            </div>

            <p>
              Iconic Innovations Nigeria Limited is a multi-disciplinary company 
              committed to redefining industries through innovation and creative 
              expression, shaping the future of Africa and beyond.
            </p>

            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/iconicinnovate" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/company/iconicinnovate" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/iconicinnovate" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://x.com/iconicinnovate" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></a>
              <a href="https://wa.me/2348106156968" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className={styles.contactInfo}>
            <h4 className={styles.centeredTitle}>Contact Info</h4>
            <div className={styles.contactItem}>
              <i className="bi bi-telephone"></i>
              <span>(+234)81-1975-7005 | (+234)81-0615-6968</span>
            </div>

            <div className={styles.contactItem}>
              <i className="bi bi-envelope"></i>
              <span>contact@iconicinnovations.com.ng</span>
            </div>

            <div className={styles.contactItem}>
              <i className="bi bi-geo-alt"></i>
              <span>10, Adepaju Street, Alapere Ketu, Lagos</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className={styles.contactQuick}>
            <h4 className={styles.centeredTitle}>Quick Links</h4>
            <ul className={styles.quickLinksList}>
              <li><a href="#"><span className={styles.listBullet} style={{color: "#df1f26"}}>></span> About Us</a></li>
              <li><a href="#"><span className={styles.listBullet} style={{color: "#df1f26"}}>></span> Our Branches</a></li>
              <li><a href="#"><span className={styles.listBullet} style={{color: "#df1f26"}}>></span> Our leadership</a></li>
              <li><a href="#"><span className={styles.listBullet} style={{color: "#df1f26"}}>></span> Our Goal & SDG</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className={styles.copyRight}>
        <p>©2025 Iconic Innovations Nigeria Limited. All rights reserved</p>

        <div className={styles.legal}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/2348106156968"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

    </footer>
  );
};

export default FooterSection;