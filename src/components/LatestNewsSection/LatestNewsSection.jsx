import React from "react";
import styles from "./LatestNewsSection.module.css";

import pic1 from "../../assets/lastestnewspic1.jpg";
import pic2 from "../../assets/lastestnewspic2.jpg";
import pic3 from "../../assets/lastestnewspic3.jpg";
import pic4 from "../../assets/lastestnewspic4.jpg";
import pic5 from "../../assets/latestnewspic5.jpg";

const LatestNewsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE — NEWS */}
        <div className={styles.newsArea}>
          <h2 className={styles.title}>Latest News</h2>

          <div className={styles.mainNews}>
            <img
              src={pic5}
              alt="FREE DIGITAL SKILL ACQUISITION"
              className={styles.mainImage}
            />

            <div className={styles.mainText}>
              <h3>FREE DIGITAL SKILL ACQUISITION WITH FREE CERTIFICATION</h3>
              <p>
                Join other learners already taking advantage of the Free Digital
                Skills Acquisition & Certification Programme — brought to you by
                the Great Ife Students' Union in partnership with Iconic
                Innovations Nigeria Limited.
              </p>
              <div className={styles.newsHighlights}>
                <strong>HIGHLIGHTS:</strong>
                <ul>
                  <li>100% free — Skills & Certification</li>
                  <li>Online & Self-Paced (24/7 access)</li>
                  <li>Certificate awarded upon completion</li>
                </ul>
              </div>
              <div className={styles.newsEnquiries}>
                <strong>Enquiries:</strong>
                <p>
                  ICON:{" "}
                  <a
                    href="https://wa.me/2348061166277?text=Hello%20Opeyemi%2C%20I%20am%20interested%20in%20the%20Free%20Digital%20Skill%20Acquisition%20Programme.%20Can%20you%20tell%20me%20more%20about%20it?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +2348119757005
                  </a>
                </p>
                <p>
                  Opeyemi:{" "}
                  <a
                    href="https://wa.me/2348061166277?text=Hello%20Opeyemi%2C%20I%20am%20interested%20in%20the%20Free%20Digital%20Skill%20Acquisition%20Programme.%20Can%20you%20tell%20me%20more%20about%20it?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +2348061166277
                  </a>
                </p>
              </div>
              <a
                href="https://chat.whatsapp.com/LK51AsZrVPJG0ndZAwKDvr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinLink}
              >
                Join other learners here
              </a>
              <span className={styles.newsDate}>May 28, 2026</span>
            </div>
          </div>

          {/* SMALL NEWS */}
          <div className={styles.smallNews}>
            <div className={styles.item}>
              <img src={pic1} alt="news" />
              <div>
                <p>
                  From Charity to Enterprise: A Strategic Narrative for
                  Inclusive Prosperity
                </p>
                <span>January 30, 2026</span>
              </div>
            </div>

            <div className={styles.item}>
              <img src={pic2} alt="news" />
              <div>
                <p>
                  Heirs Holdings Announces Two New Non-Executive Board
                  Appointments
                </p>
                <span>January 25, 2026</span>
              </div>
            </div>

            <div className={styles.item}>
              <img src={pic3} alt="news" />
              <div>
                <p>Tony Elumelu Appointed to Seplat Energy Plc Board</p>
                <span>January 23, 2026</span>
              </div>
            </div>

            <div className={styles.item}>
              <img src={pic4} alt="news" />
              <div>
                <p>
                  Heirs Energies Limited Acquires Stake in Seplat Energy Plc
                </p>
                <span>December 31, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — EMAIL */}
        <div className={styles.subscribeBox}>
          <h3>Sign Up For Email Updates</h3>

          <p>
            Stay in touch to get exclusive news and insights from across our
            investment portfolio.
          </p>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Your Email" />

          <div className={styles.consentWrapper}>
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              By clicking Subscribe, I agree that Iconic Innovations may use my
              contact details to send me communications.
            </label>
          </div>

          <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
