import Hero from "../components/Hero/Hero";
import FooterSection from "../components/Footer/FooterSection";
import heroContact from "../assets/hero-contact.jpg";
import innovators from "../assets/innovators.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      {/* ONLY CONTACT PAGE NO OVERLAY */}
      <Hero
        title="Contact Us"
        background={heroContact}
        noOverlay={true}
      />

      {/* TOP CONTACT + MAP */}
      <section className={styles.contactSection}>
        <div className={styles.container}>

          <div className={styles.contactInfo}>
            <h3>GET IN TOUCH</h3>

            <p className={styles.infoItem}>
              <FaMapMarkerAlt />
              10, Adepoju Street, Alapere Ketu, Lagos
            </p>

            <p className={styles.infoItem}>
              <FaPhoneAlt />
              (+234) 81 0615 6968
            </p>

            <p className={styles.infoItem}>
              <FaEnvelope />
              contact@iconicinnovations.com.ng
            </p>

            <div className={styles.socials}>
              <a href="https://www.facebook.com/iconicinnovate" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/iconicinnovate" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/iconicinnovate" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://x.com/iconicinnovate" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://wa.me/2348106156968" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          <div className={styles.contactMap}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=10,Adepoju+Street,+Alapere+Ketu,+Lagos&z=17&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* MESSAGE SECTION */}
      <section className={styles.messageSection}>
        <div className={styles.messageContainer}>

          <div className={styles.formSide}>
            <h2>Send a Message</h2>
            <p>Please fill in the form below to get in touch with us.</p>

            <form className={styles.contactForm}>
              <div className={styles.row}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
              </div>

              <div className={styles.row}>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
              </div>

              <textarea placeholder="Message"></textarea>

              <p className={styles.note}>
                By clicking submit, you agree to our Terms and Data Collection Clause.
              </p>

              <button type="submit">SUBMIT</button>
            </form>
          </div>

          <div className={styles.imageSide}>
            <img src={innovators} alt="Innovators Team" />
          </div>

        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default Contact;
