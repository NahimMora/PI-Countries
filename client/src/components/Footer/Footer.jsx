import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="/">LandingPage</a>
        <a href="/create">Create Activity</a>
      </div>
      <div className={styles.footerInfo}>
        <p>&copy; 2023 NM Programing</p>
        <p>Contacto: nahimsalta@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
