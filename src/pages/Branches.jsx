import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import FooterSection from "../components/Footer/FooterSection";
import styles from "./Branches.module.css";

import stepdown from "../assets/stepdown.jpg";
import service4 from "../assets/service4.png";
import service3 from "../assets/service3.jpg";

import interior1 from "../assets/interior1.jpeg";
import interior2 from "../assets/interior2.jpeg";
import interior3 from "../assets/interior3.jpeg";
import interior4 from "../assets/interior4.jpeg";
import interior5 from "../assets/interior5.jpeg";
import interior6 from "../assets/interior6.jpeg";

const Branches = () => {

  const location = useLocation();

  /* Scroll to section when URL has hash */
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  /* Manual scroll buttons */

  const scrollToTech = () => {
    document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDesign = () => {
    document.getElementById("design")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInterior = () => {
    document.getElementById("interior")?.scrollIntoView({ behavior: "smooth" });
  };

  /* Gallery State */

  const [showGallery, setShowGallery] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(null);

  const galleryImages = [
    { src: interior1, title: "Residential Interior" },
    { src: interior2, title: "Commercial Space" },
    { src: interior3, title: "Exterior Painting" },
    { src: interior4, title: "Office Styling" },
    { src: interior5, title: "Home Decoration" },
    { src: interior6, title: "Wallpaper Installation" }
  ];

  /* Image Navigation */

  const nextImage = () => {
    setViewerIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setViewerIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Hero title="Our Branches" />

      {/* BRANCH BUTTONS */}
      <section className={styles.branchesSection}>
        <div className={styles.container}>

          <div className={styles.branchButtons}>
            <button onClick={scrollToTech}>ICONIC TECHNOLOGIES</button>

            <button onClick={scrollToDesign}>
              ICONIC DESIGNS & ILLUSTRATION
            </button>

            <button onClick={scrollToInterior}>
              ICONIC INTERIORS & PAINTING
            </button>
          </div>

          <hr className={styles.line} />

          <h2 className={styles.title}>BRANCHES HIGHLIGHT</h2>

          <p className={styles.description}>
            We operate across various sectors, from technology and real estate
            to design and fashion delivering premium, sustainable, and
            forward-thinking products and services that inspire and empower
            individuals, businesses, and communities.
          </p>

        </div>
      </section>


      {/* TECHNOLOGIES SECTION */}
      <section id="tech" className={styles.branchDetail}>
        <div className={styles.detailContainer}>

          <img src={stepdown} alt="Iconic Technologies" />

          <div className={styles.detailText}>
            <h2>Iconic Technologies</h2>

            <p>
              Iconic Technologies powers business and lifestyle transformation
              through custom software development, mobile and web applications,
              technical support, and tech consulting, delivering intuitive and
              scalable digital solutions and products.
            </p>

            <p>
              We offer cutting-edge software, applications, and IT support that
              help individuals and businesses thrive in the digital age.
            </p>

            <h4>Our Expertise:</h4>

            <div className={styles.expertiseItem}>
              <h5>Software Development:</h5>
              <p>
                Bespoke desktop and enterprise software solutions designed to
                meet industry-specific needs and optimize operations.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Web & Mobile Application Development:</h5>
              <p>
                Building scalable, responsive, and secure apps for iOS,
                Android, and web environments.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Digital Strategy & Tech Consulting:</h5>
              <p>
                Offering expert guidance in digital transformation,
                IT infrastructure planning, and product ideation.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Technical Support & Maintenance:</h5>
              <p>
                Ongoing technical support, updates, and performance
                optimization for sustained efficiency.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* DESIGNS SECTION */}
      <section id="design" className={styles.branchDetail}>
        <div className={styles.detailContainer}>

          <img src={service4} alt="Iconic Designs" />

          <div className={styles.detailText}>
            <h2>ICONIC DESIGNS AND ILLUSTRATION</h2>

            <p>
              Iconic Designs and Illustration is the visual storytelling hub
              of Iconic Innovations Nigeria Limited, empowering brands and
              individuals through impactful design, branding and motion art.
            </p>

            <h4>Our Expertise:</h4>

            <div className={styles.expertiseItem}>
              <h5>Brand Identity Design:</h5>
              <p>
                Strategic brand development including logo design, visual
                systems and corporate branding kits.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Custom Graphics:</h5>
              <p>
                Posters, flyers, banners, social media visuals and marketing
                collateral crafted with originality.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>UI/UX Design:</h5>
              <p>
                Designing intuitive user interfaces and immersive digital
                experiences for mobile and web platforms.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Motion Graphics & Animation:</h5>
              <p>
                Dynamic visual content such as animated intros, explainer
                videos and promotional reels.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* INTERIOR SECTION */}
      <section id="interior" className={styles.branchDetail}>
        <div className={styles.detailContainer}>

          <img src={service3} alt="Iconic Interior" />

          <div className={styles.detailText}>
            <h2>ICONIC INTERIORS AND PAINTING</h2>

            <p>
              We focus on interior and exterior decoration, providing styling,
              professional painting and décor consultation for residential and
              commercial spaces.
            </p>

            <p>
              Transforming spaces into visually captivating and functionally
              enhanced environments.
            </p>

            <h4>Our Expertise:</h4>

            <div className={styles.expertiseItem}>
              <h5>Interior Decoration:</h5>
              <p>
                Space planning, color coordination, décor styling and
                furniture layout tailored to individual tastes.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Exterior and Interior Painting:</h5>
              <p>
                Professional painting services using high-quality materials
                and modern finishing techniques.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Residential & Commercial Styling:</h5>
              <p>
                Décor services that reflect lifestyle, brand identity
                or business purpose.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h5>Additional Services:</h5>
              <p>
                Décor consultation, wallpaper installation, screeding,
                Tyrolean finishing and more.
              </p>
            </div>
<button
  className={styles.projectButton}
  onClick={() => setShowGallery(true)}
>
  Explore Our Past Project →
</button>
</div>
</div>
</section>

{/* ===================== */}
{/* GALLERY MODAL */}
{/* ===================== */}

{showGallery && (
  <div className={styles.galleryModal}>
    
    <div className={styles.galleryBox}>

      <div className={styles.galleryHeader}>
        <h3>Interior Projects Gallery</h3>

        <span
          className={styles.closeModal}
          onClick={() => setShowGallery(false)}
        >
          ✕
        </span>
      </div>

      <div className={styles.galleryGrid}>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => setViewerIndex(index)}
          >
            <img src={img.src} alt={img.title} />

            <div className={styles.overlay}>
              {img.title}
            </div>

          </div>
        ))}
      </div>

    </div>

  </div>
)}

{/* ===================== */}
{/* IMAGE VIEWER */}
{/* ===================== */}

{viewerIndex !== null && (
  <div className={styles.viewerModal}>

    <span
      className={styles.closeViewer}
      onClick={() => setViewerIndex(null)}
    >
      ✕
    </span>

    <button
      className={styles.prevBtn}
      onClick={prevImage}
    >
      ‹
    </button>

    <img
      src={galleryImages[viewerIndex].src}
      alt=""
      className={styles.viewerImage}
    />

    <button
      className={styles.nextBtn}
      onClick={nextImage}
    >
      ›
    </button>

  </div>
)}



      <FooterSection />
    </>
  );
};

export default Branches;