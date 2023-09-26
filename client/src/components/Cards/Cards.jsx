import React from 'react'
import Card from '../Card/Card'


const Cards = ({countries}) => {

  console.log(countries);
  return (
    <>
    {countries.map((c) => (
			<Card key={c.id} id={c.id} image={c.image} name={c.name} continents={c.continents}/>
		))}
    </>
  )
}

export default Cards