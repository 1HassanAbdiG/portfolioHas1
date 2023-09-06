// Header.js



import React, { useState } from 'react';
import styles from "../styles/header.module.css";
import myPhoto from "../imges/hassan.png"; // Importez votre photo
import { Link } from 'react-router-dom';
import Pdf from"../doc/FORMATION.pdf"

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    
    <header className={styles.header}>
      <div className={styles.logo}>Mon Portfolio</div>
      <img src={myPhoto} alt="MON LOGO" className={styles.myPhoto} /> 
        <button className={`${styles.navToggle} ${navActive ? styles.active : ''}`} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.nav} ${navActive ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>A<Link to="/"><span>ccueil</span></Link></li>
          <li className={styles.navItem}>À<Link to="/propos"><span> propos </span></Link></li>
      
          <li className={styles.navItem}>P<Link to="/Projet"><span>rojet</span></Link></li>
          <li className={styles.navItem}>C<Link to="/Contact"><span>ontact</span></Link></li>
          
         <li>  <a href={Pdf} target='_blank' rel="noopener noreferrer" className={styles.navItem1} >Resume</a></li>
        </ul>

        
      </nav>
    
    </header>
   
  );
};

export default Header;

