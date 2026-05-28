import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (e, name) => {
    // Only toggle for mobile view (if menu is open)
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logoContainer} onClick={closeMenu}>
        <img src={logo} alt="Logo" className={styles.logoMain} />
        <span>Iconic Innovations</span>
      </NavLink>

      <div 
        className={`${styles.menuToggle} ${open ? styles.active : ""}`} 
        onClick={toggleMenu}
      >
        <span className={styles.hamburgerIcon}>&#9776;</span>
        <span className={styles.closeIcon}>&times;</span>
      </div>

      <ul className={`${styles.navLinks} ${open ? styles.showNav : ""}`}>
        <li className={`${styles.dropdown} ${activeDropdown === "about" ? styles.mobileActive : ""}`}>
          <NavLink to="#" onClick={(e) => handleDropdownToggle(e, "about")}>
            ABOUT US
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><NavLink to="/about" onClick={closeMenu}>Overview</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>Our Leadership</NavLink></li>
            <li><NavLink to="/branches" onClick={closeMenu}>Our Branches</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
          </ul>
        </li>
        
        <li className={`${styles.dropdown} ${activeDropdown === "branches" ? styles.mobileActive : ""}`}>
          <NavLink to="#" onClick={(e) => handleDropdownToggle(e, "branches")}>
            OUR BRANCHES
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><NavLink to="/branches" onClick={closeMenu}>Overview</NavLink></li>
            <li><NavLink to="/branches" onClick={closeMenu}>Iconic Technologies</NavLink></li>
            <li><NavLink to="/branches" onClick={closeMenu}>Iconic Graphics</NavLink></li>
            <li><NavLink to="/branches" onClick={closeMenu}>Iconic Properties</NavLink></li>
            <li><NavLink to="/branches" onClick={closeMenu}>Iconic Interiors</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/goals" onClick={closeMenu}>OUR GOALS & SDG</NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={closeMenu}>CONTACT US</NavLink>
        </li>

        <li className={styles.searchIcon}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
