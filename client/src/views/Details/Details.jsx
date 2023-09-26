import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCountry } from '../../redux/actions/actions';

const Details = () => {

  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  return (
    <>
      <a href={"/home"}>Home</a>
      <h1>{country.id}</h1>
      <h1>Name: {country.name}</h1>
      <img src={country.image} alt={country.name} />
      <h2>Continent: {country.continents}</h2>
      <h2>Capital: {country.capital}</h2>
      {country.subregión && <h2>Subregión: {country.subregión}</h2>}
      {country.area && <h2>Área: {country.area}</h2>}
      <h2>Population: {country.population}</h2>
    </>
  )
}

export default Details