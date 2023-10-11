import React, { useState, useEffect } from 'react';
import Style from './Landing.module.css';

import gitImage from '../../assets/github.png'
import LinkImage from '../../assets/linkedin.png'

const texts = [
  {
    title: "WELCOME",
    text: "Our website is designed to provide you with an enriching and educational experience about countries from around the world, highlighting their key features."
  },
  {
    title: "COUNTRY SEARCH",
    text: "One of the main features of our website is the ability to search, filter, and sort through a wide variety of countries."
  },
  {
    title: "CREATE ACTIVITIES",
    text: "Create your own activities and filter them by country. Customize your experiences and explore a wide range of options based on your preferences and interests."
  }
];

const gitHub = 'https://github.com/NahimMora'
const linkedin = 'https://www.linkedin.com/in/fernando-nahim-mora-456160205/'

const Landing = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000); // Cambia cada 3 segundos
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.h1a}>
        <h1>PI COUNTRIES</h1>
        <p>Discover countries and cultures from around the globe. Explore our planet's diversity </p>
        <p>through key facts, cultural activities, and more. Join our community of explorers today.</p>
        <a className={Style.ClickTo} href="/home">Click to home</a>

        <div className={Style.redSocial}>
        <a href={gitHub} target="_blank" rel="noopener noreferrer" className={Style.gitLink}>
          <img src={gitImage} alt="GitHub" className={Style.gitIcon} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={Style.gitLink}>
          <img src={LinkImage} alt="Linkedin" className={Style.gitIcon} />
        </a>
        </div>

      </div>
      <div className={Style.cards}>
        <div className={`${Style.card} ${Style.visible}`}>
          <h1 className={Style.cardTitle}>{texts[visibleIndex].title}</h1>
          <h2 className={Style.cardText}>{texts[visibleIndex].text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
