import React from 'react'
import Style from './Filters.module.css'

import { useDispatch } from 'react-redux'
import { filterActivity, filterContinent, resetFilters } from '../../redux/actions/actions'

const filters = ({activitys}) => {

  const dispatch = useDispatch()

  const continents = ['Africa', 'Europe', 'Oceania', 'Asia', 'South America', 'North America', 'Antarctica']
  
  const handleSelectContinent = (e) => {
      const { value } = e.target
      dispatch(resetFilters())
      dispatch(filterContinent(value))
  }

  const handleSelectActivity = (e) => {
    const { value } = e.target
    dispatch(resetFilters())
    dispatch(filterActivity(value))
}

  return (
    <>
        <div className={Style.filter}>
        <select value="" onChange={handleSelectContinent}>
          <option value="" disabled={true}>Select a continent</option>
          {continents.map(c => <option value={c}>{c}</option>)}
        </select>

        <select value="" onChange={handleSelectActivity}>
          <option value="" disabled={true}>Select a activity</option>
          {activitys.map(a => <option value={a.countries}>{a.name}</option>)}
        </select>
        </div>
    </>
  )
}

export default filters
