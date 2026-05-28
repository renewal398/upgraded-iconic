import styles from "./CoreValues.module.css";
import crown from "../../assets/crown.png";
import hands from "../../assets/hands.jpg";

const cards = [
  {
    frontTitle: "Trustworthiness",
    frontSubtitle: "Honest, Transparent",
    backText: "Building lasting confidence through honesty and transparency.",
  },
  {
    frontTitle: "Simplicity",
    frontSubtitle: "Optimized Workflow",
    backText: "Refining ideas into clear, user-friendly solutions.",
  },
  {
    frontTitle: "Luxury",
    frontSubtitle: "Premium Experience",
    backText: "Providing premium experiences with elegance and quality.",
  },
  {
    frontTitle: "Versatility",
    frontSubtitle: "Seamlessly Adaptable",
    backText: "Adapting seamlessly across industries and needs.",
  },
];

const CoreValues = () => {
  return (
    <section className={styles.section}>

      {/* ================= TOP ================= */}
      <div className={styles.top}>
        <h2 className={styles.heading}>OUR CORE VALUES</h2>
        <p className={styles.subheading}>
          The principles that guide every step we take.
        </p>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {/* Repeat the cards array twice for smooth scrolling */}
            {[...cards, ...cards].map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardInner}>

                  {/* FRONT CONTENT */}
                  <div className={`${styles.flipContent} ${styles.cardFront}`}>
                    <img src={crown} alt="Crown Icon" />
                    <h4>{card.frontTitle}</h4>
                    <p>{card.frontSubtitle}</p>
                  </div>

                  {/* BACK CONTENT */}
                  <div className={`${styles.flipContent} ${styles.cardBack}`}>
                    <p>{card.backText}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className={styles.bottom}>

        <div className={styles.textSide}>
          <h3>BUILDING A SUSTAINABLE FUTURE</h3>
          <p>
            We deliver solutions that uplift communities, create opportunities,
            and align with global sustainable development goals (SDGs).
            Through innovation and impact, we contribute to Africa’s growth story and beyond.
          </p>

          <button className={styles.btn}>
            Explore Our Goals & SDGs
          </button>
        </div>

        <div className={styles.imageSide}>
          <img src={hands} alt="Hands holding idea" />
        </div>

      </div>

    </section>
  );
};

export default CoreValues;