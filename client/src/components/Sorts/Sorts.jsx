import React from 'react'
import Style from './Sorts.module.css'

import { useDispatch } from 'react-redux';
import { sortAlfabetic, sortPopulation } from '../../redux/actions/actions';

const Sorts = () => {

const dispatch = useDispatch()

const handleClick = (e) => {
const {name} = e.target;
dispatch(sortAlfabetic(name))
}

const handleSelectChange = (e) => {
  const { value } = e.target;
  dispatch(sortPopulation(value))
}

  return (
    <>
      <div className={Style.sorts}>
        <button name='Ascending' onClick={handleClick}>A-Z</button>
        <button name='Descending' onClick={handleClick}>Z-A</button>
        <select value='' onChange={handleSelectChange}>
          <option value='' disabled>Population size</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
    </>
    
  )
}

export default Sorts