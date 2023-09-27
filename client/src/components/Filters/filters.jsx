import React from 'react'
import Style from './Filters.module.css'

import { useDispatch } from 'react-redux'
import { filterContinent, resetFilters } from '../../redux/actions/actions'

const filters = () => {

  const dispatch = useDispatch()

  const continents = ['Africa', 'Europe', 'Oceania', 'Asia', 'South America', 'North America', 'Antarctica']
  
  const handleSelect = (e) => {
      const { value } = e.target
      dispatch(resetFilters())
      dispatch(filterContinent(value))
  }

  return (
    <>
        <div className={Style.filter}>
        <select value="" onChange={handleSelect}>
          <option value="" disabled={true}>Select a continent</option>
          {continents.map(c => <option value={c}>{c}</option>)}
        </select>
        </div>
    </>
  )
}

export default filters

// const countries = useSelector(state => state.backupCountries);

  // const continents = []

  // countries.forEach(c => {
  //   continents.push(c.continents);
  // });

  // const allContinents = [...new Set(continents.flat())];