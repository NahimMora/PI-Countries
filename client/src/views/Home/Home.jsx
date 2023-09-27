import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, resetFilters } from '../../redux/actions/actions'

import Style from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/Filters'
import Paguinator from '../../components/Paguinator/Paguinator'
import Sorts from '../../components/Sorts/Sorts'

const Home = () => {

  const dispatch = useDispatch()

  const countries = useSelector(state => state.allCountries);
  const numCountries = useSelector(state => state.filteredCountries)
  const activeFilters = useSelector(state => state.activeFilters);
  const page = useSelector(state => state.currentPage)

  const isSortAlphabeticActive = activeFilters.alphabeticalSort !== null
  const isSortPopulation = activeFilters.populationSort !== null
  const isFilterContinent = activeFilters.continent !== null

  const maxPage = Math.ceil(numCountries.length/10)

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  const handleReset = () => {
    dispatch(resetFilters())
  }

  return (
    <>
    <div className={Style.home}>
      <NavBar/>
      <div className={Style.filterSort}>
        <div className={Style.filters}>
        <Filters countries={countries}/>
        {isFilterContinent ? (<div className={Style.filterActive}>Filter Continent Active: {activeFilters.continent}</div>) : (<div className={Style.filterDesactive}>Filter Continent Desactive</div>)}
        </div>
        <div className={Style.sorts}>
        <Sorts/>
        {isSortAlphabeticActive ? (<div className={Style.filterActive}>Sort Alphabetic Active: {activeFilters.alphabeticalSort}</div>) : (<div className={Style.filterDesactive}>Sort Alphabetic Desactive</div>)}
        {isSortPopulation ? (<div className={Style.filterActive} >Sort Population Active: {activeFilters.populationSort}</div>) : (<div className={Style.filterDesactive}>Sort Population Desactive</div>)}
        </div>
      </div>
      <button className={Style.buttonReset} onClick={handleReset}>Reset filters</button>
      <Paguinator page={page + 1} maxPage={maxPage}/>
      <Cards countries={countries}/>
      <Paguinator page={page + 1} maxPage={maxPage}/>
    </div>
    <div>
      <h1>Footer</h1>
    </div>
    </>
  )
}

export default Home