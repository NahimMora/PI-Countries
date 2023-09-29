import React, { useEffect, useState } from 'react';
import styles from './FlagsBar.module.css';

const FlagsBar = ({ countries }) => {

    const flagUrls = []
    countries.map(c => flagUrls.push(c.image))
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flagUrls.length);
    }, 2000); // Cambia la bandera cada 2 segundos (ajusta según tus preferencias)

    return () => {
      clearInterval(interval);
    };
  }, [flagUrls]);

  return (
    <div className={styles['flags-container']}>
      <div className={styles['flags-bar']}>
        {flagUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Flag ${index}`}
            className={`${styles.flag} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlagsBar;
