import React from 'react'

import Card from '../Card/Card'

import Style from './Cards.module.css'


const Cards = ({countries}) => {

  return (
    <>
    <div className={Style.conteiner}>
     {countries.map((c) => (
			<Card key={c.id} id={c.id} image={c.image} name={c.name} continents={c.continents}/>
		 ))
     }
    </div>
    </>
  )
}

export default Cards