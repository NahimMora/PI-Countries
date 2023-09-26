import React from 'react'
import { useDispatch } from 'react-redux';
import { sortAlfabetic } from '../../redux/actions/actions';

const Sorts = () => {

  const dispatch = useDispatch()
    const handleClick = (e) => {
    const {name} = e.target;
    dispatch(sortAlfabetic(name))
}

  return (
    <>
      <div>Sorts</div>
      <button name='Ascending' onClick={handleClick}>A-Z</button>
      <button name='Descending' onClick={handleClick}>Z-A</button>
    </>
    
  )
}

export default Sorts