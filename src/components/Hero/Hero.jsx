import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// Hero slides
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";

const images = [slide1, slide2, slide3, slide4, slide5];

const Hero = ({ title, subtitle, background, noOverlay }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (background) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [background]);

  return (
    <section className={styles.hero}>
      {/* Single background for pages like Contact */}
      {background ? (
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${background})` }}
        />
      ) : (
        <div
          className={`${styles.slide} ${fade ? styles.fadeIn : styles.fadeOut}`}
          style={{ backgroundImage: `url(${images[current]})` }}
        />
      )}

      <div
        className={`${styles.heroOverlay} ${noOverlay ? styles.noOverlay : ""}`}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;
