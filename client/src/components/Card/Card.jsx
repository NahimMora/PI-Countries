import React from 'react'
import { Link } from "react-router-dom"
import Style from "./Card.module.css"

const Card = ({id, image, name, continents}) => {


  return (
    <>
    <Link to={`/details/${id}`}>
        <div>
            <img src={image} alt={name} className={Style.img}/>
        </div>
        <div>
            <h1>{name}</h1>
            <p>Continents: {continents}</p>
        </div>
    </Link>
    </>
  )
}

export default Card