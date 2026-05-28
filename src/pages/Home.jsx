import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import CoreValues from "../components/CoreValues/CoreValues";
import PhilanthropySection from "../components/PhilanthropySection/PhilanthropySection";
import LatestNewsSection from "../components/LatestNewsSection/LatestNewsSection";
import FooterSection from "../components/Footer/FooterSection"; // ✅ IMPORTANT

const Home = () => {
  return (
    <>
      <Hero
        title={
          <>
            Building a Legacy of <br /> Innovation, Style & Impact
          </>
        }
        subtitle="Software & App Development | Real Estate | Interior & Exterior Design | Graphics Design"
      />

      <AboutSection />
      <CoreValues />
      <PhilanthropySection />
      <LatestNewsSection />

      {/* ✅ FOOTER */}
      <FooterSection />
    </>
  );
};

export default Home;