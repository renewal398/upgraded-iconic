import React from "react";
import Hero from "../components/Hero/Hero";
import FooterSection from "../components/Footer/FooterSection";
import styles from "./Overview.module.css";
import aboutus from "../assets/aboutus.jpg";

const Overview = () => {
  return (
    <div>
      {/* HERO */}
      <Hero
        title="About Iconic Innovations"
        subtitle="Driven by innovation, excellence, and impact across industries."
      />

      {/* ABOUT SECTION */}
      <section className={styles.section}>
        
        <div className={styles.topText}>
          <p className={styles.textLeft}>
            Iconic Innovations Nigeria Limited is a multi-disciplinary company
            committed to redefining industries through innovation, excellence,
            and creative expression.
            <br /><br />
            Our operations span across various sectors, including real estate,
            technology, design, and fashion. We deliver premium, sustainable,
            and forward-thinking products and services that inspire and empower
            individuals, businesses, and communities across Nigeria, Africa,
            and beyond.
          </p>

          <p className={styles.textRight}>
            We are driven by a passion for innovation and a commitment to
            excellence. Our diverse team of experts works tirelessly to provide
            solutions that not only meet but exceed expectations.
            <br /><br />
            We believe in creating lasting value for our clients and stakeholders
            through transparent practices and a relentless pursuit of quality.
          </p>
        </div>

        <h4 className={styles.boardTitle}>BOARD MEMBERS</h4>
        <h2 className={styles.mainTitle}>Our Leadership & Values</h2>

        <div className={styles.leadershipGrid}>
          <img
            src={aboutus}
            alt="Board Members"
            className={styles.image}
          />

          <div>
            <h4 className={styles.smallTitle}>OUR LEADERSHIP & VALUES</h4>

            <p className={styles.description}>
              At Iconic Innovations, our leadership is guided by a strong set of
              core values that prioritize our clients and foster a culture of
              integrity, innovation, and excellence. We are committed to
              delivering exceptional results and building long-term relationships
              based on trust and mutual respect.
              <br /><br />
              Our leaders inspire our team to push boundaries, embrace
              challenges, and continuously strive for perfection in every
              project we undertake.
            </p>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <FooterSection />

    </div>
  );
};

export default Overview;
