import Hero from "../components/Hero/Hero";
import FooterSection from "../components/Footer/FooterSection";
import styles from "./Goals.module.css";

import planet from "../assets/our-planet.png";
import goalsImage from "../assets/goals-image1.jpg";
import visionImage from "../assets/our vision.jpg";
import sustainability1 from "../assets/sustainability 1.jpg";
import sustainability2 from "../assets/sustainability 2.png";

const Goals = () => {
  return (
    <>
      <Hero title="Our Goals & SDGs" />

      {/* SECTION 1 */}
      <section className={styles.sectionOne}>
        <div className={styles.container}>

          <div className={styles.imageGroup}>
            <img src={planet} alt="Sustainable goals" />
            <img src={goalsImage} alt="Our community and environment" />
          </div>

          <div className={styles.textContent}>
            <h2>
              OUR CONTINENT. <br />
              OUR COMMUNITY. <br />
              OUR ENVIRONMENT.
            </h2>

            <p>
              At Iconic Innovations Nigeria Limited, our mission goes beyond
              business we are committed to creating real impact across
              communities and industries.
            </p>

            <p>
              Our projects, products, and partnerships are built around the
              United Nations Sustainable Development Goals (SDGs), which serve
              as a global blueprint for a better, more inclusive, and
              sustainable future.
            </p>

            <p>
              It is part of our mission to deliver innovative, sustainable,
              and high-quality problem-solving products and services that
              embody excellence, creativity, and integrity.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.sectionTwo}>
        <div className={styles.container}>

          <div className={styles.textBlock}>
            <h3>Our aim is to</h3>

            <p>
              become a globally recognized company distinguished by excellence
              in innovation and creativity. We are committed to enriching and
              fostering local, national, and global development through
              visionary leadership and strategic growth.
            </p>

            <h3 className={styles.visionTitle}>
              Our Vision in Line with the SDGs
            </h3>

            <p>
              A major part of our vision is to transform lives and industries
              through innovation, sustainability, and empowerment. We believe
              that technology and creativity can solve real-world problems
              from housing shortages and unemployment to environmental
              degradation.
            </p>

            <p>
              Every initiative we undertake brings us one step closer to a
              sustainable and inclusive future.
            </p>
          </div>

          <div className={styles.visionImage}>
            <img src={visionImage} alt="Future vision" />
          </div>

        </div>
      </section>

      {/* SECTION 3 - SUSTAINABILITY */}

<section className={styles.sectionThree}>
  <div className={styles.container}>

    <div className={styles.sustainabilityImages}>
      <img src={sustainability1} alt="SDG sustainability" />
      <img src={sustainability2} alt="Our planet our community" />
    </div>

    <div className={styles.sustainabilityText}>

      <h2>Our Approach to Sustainability</h2>

      <p>
        In executing our mission to improve lives and transform Africa, our
        sustainability approach is anchored in our responsibility towards
        today and future generations.
      </p>

      <p>
        We are committed to providing forward-thinking solutions that empower
        individuals and businesses, create jobs, uplift communities, improve
        Africa, and drive socio-economic growth locally, nationally, and
        globally.
      </p>

      <p>
        Our goals are guided by our passion for innovation and a deep
        understanding of evolving needs. We aim to transform everyday
        experiences through technology, design, and customer-focused service
        delivery.
      </p>

      <p>
        We strive not only to meet expectations but to exceed them, building
        a lasting legacy of trust, progress, and iconic impact across
        industries.
      </p>

      <p>
        Our economic, environmental and social strategic priorities focus on:
      </p>

      <ul>
        <li>
          <strong>Products and Services</strong> – how our businesses
          incorporate sustainability into all that we do.
        </li>

        <li>
          <strong>People, Facilities and Infrastructure</strong> – ensuring
          our operations embed sustainability into day-to-day practices.
        </li>

        <li>
          <strong>Outreach and Education</strong> – demonstrating our
          responsibility by working with stakeholders to deliver a shared
          ambition.
        </li>
      </ul>

    </div>

  </div>
</section>

      <FooterSection />
    </>
  );
};

export default Goals;
