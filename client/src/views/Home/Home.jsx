import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/filters'

import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions/actions'
import Paguinator from '../../components/Paguinator/Paguinator'
import Sorts from '../../components/Sorts/Sorts'

const Home = () => {

  const dispatch = useDispatch()

  const countries = useSelector(state => state.allCountries)

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])


  return (
    <>
      <NavBar/>
      <h1>Home Page</h1>
      <Filters/>
      <Sorts/>
      <Paguinator/>
      <Cards countries={countries}/>
      <Paguinator/>
    </>
  )
}

export default Home