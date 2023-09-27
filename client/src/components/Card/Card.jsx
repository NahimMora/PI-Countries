import React from 'react'
import { Link } from "react-router-dom"
import Style from "./Card.module.css"

const Card = ({id, image, name, continents}) => {

  return (
    <>
      <div className={Style.card}>
        <div className={Style['card-container']}>
          <div className={Style['img-container']}>
            <img src={image} alt={name} className={Style.img}/>
          </div>
        </div>
        <div className={Style.info}>
            <h1>{name}</h1>
            <h2>Continents: {continents}</h2>
        </div>
        <div className={Style.footer}>
            <a href={`/details/${id}`}>See more</a>
        </div>
      </div>
    </>
  )
}

export default Card
