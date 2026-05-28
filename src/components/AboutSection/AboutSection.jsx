import { useState } from "react";
import styles from "./AboutSection.module.css";

import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/service4.png";

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        <h2 className={styles.title}>LEARN MORE ABOUT US</h2>

        <p className={styles.description}>
          Iconic Innovations Nigeria Limited is a multi-disciplinary company
          committed to redefining industries through innovation, excellence,
          and creative expression.
        </p>

        <h2 className={styles.title}>
          DISCOVER OUR FULL RANGE OF SERVICES
        </h2>

        <p className={styles.subtext}>
          Explore our diverse branches shaping industries with innovation and excellence.
        </p>

        <div className={styles.imageGrid}>

          <div className={styles.card}>
            <img src={service1} alt="" />
            <div className={styles.overlay}>
              <h3>Iconic Technologies</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img src={service2} alt="" />
            <div className={styles.overlay}>
              <h3>Iconic Properties</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img src={service3} alt="" />
            <div className={styles.overlay}>
              <h3>Iconic Interior & Painting</h3>
            </div>
          </div>

          <div className={styles.card}>
            <img src={service4} alt="" />
            <div className={styles.overlay}>
              <h3>Iconic Graphics & Illustration</h3>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className={styles.buttonContainer}>
          <button
            className={styles.consultBtn}
            onClick={() => setShowModal(true)}
          >
            Book A Consultation With Us
          </button>
        </div>

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
  <div
    className={styles.modalOverlay}
    onClick={() => setShowModal(false)}   // 👈 close when overlay clicked
  >
    <div
      className={styles.modalBox}
      onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
    >

      <button
        className={styles.closeBtn}
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      <h2>Send Us Email For Projects, Contracts or Enquiries</h2>
      <p>
        We would love to hear from you for projects and business deals.
        Share your projects, questions, or feedback by filling out the form below.
      </p>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit" className={styles.sendBtn}>
          Send Message
        </button>
      </form>

    </div>
  </div>
)}
    </section>
  );
};

export default AboutSection;
