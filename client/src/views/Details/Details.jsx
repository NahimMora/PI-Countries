import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Style from './Details.module.css'

import { getCountry } from '../../redux/actions/actions';

const Details = () => {

  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  const getLanguagesString = () => {
    if (country.lenguaje) {
      // Convierte los valores de country.lenguaje en un array de lenguajes
      const languages = Object.values(country.lenguaje);
      // Si hay más de un lenguaje, une los lenguajes con "and", de lo contrario, usa solo el primer lenguaje
      return languages.length > 1 ? languages.join(' and ') : languages[0];
    }
    return ''; // Si no hay lenguajes, devuelve una cadena vacía
  };

  return (
    <>
    <div className={Style.details}>
      <div>
      <a href={"/home"}>Home</a>
      <a href={country.googleMaps} target="_blank" rel="noopener noreferrer">See in GoogleMaps</a>
      </div>
      
      <h2>{country.id}</h2>

      <div className={Style.names}> 
      <h1>{country.name ? country.name.toUpperCase() : ""}</h1>
      <h3>{country.nameEnter}</h3>
      <img src={country.image} alt={country.name} />
      </div>
      
      <div className={Style.info}>
      <h3>Continent: {country.continents}</h3>
      <h3>Capital: {country.capital}</h3>
      {country.subregion && <h3>Subregion: {country.subregion}</h3>}
      {country.area && <h3>Área: {country.area}</h3>}
      <h3>Population: {country.population}</h3>
      <h3>Lenguaje: {getLanguagesString()}</h3>
      </div>
      <div className={Style.info2}>
        
      </div>
    </div>
    </>
  )
}

export default Details