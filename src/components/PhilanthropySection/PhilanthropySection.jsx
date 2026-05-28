import React from "react";
import styles from "./PhilanthropySection.module.css";
import groupPicture from "../../assets/grouppicture.jpg";

const PhilanthropySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.imageWrapper}>
          <img src={groupPicture} alt="Group" />
        </div>

        {/* RIGHT TEXT */}
        <div className={styles.content}>
          <h2>The Tony Elumelu Foundation</h2>

          <p>
            Empowering entrepreneurship as a catalyst for economic growth. 
            Our philosophy of “doing well and doing good” drives both our 
            business and philanthropic initiatives, reflecting our belief 
            that sustainable impact begins with opportunity.
          </p>

          <span className={styles.link}>MORE ON OUR PHILANTHROPY</span>
        </div>

      </div>
    </section>
  );
};

export default PhilanthropySection;
