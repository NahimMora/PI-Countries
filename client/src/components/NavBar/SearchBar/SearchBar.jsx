import React, { useState } from 'react'
import Style from './SearchBar.module.css'

import {useDispatch} from 'react-redux'
import { getCountryName } from '../../../redux/actions/actions';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');
  
    const handleChange = (event) => {
      setInput(event.target.value);
      dispatch(getCountryName(event.target.value));
    };

  return (
    <>
    <div className={Style.searchBar}>
        <div className={Style.searchIcon}>🔍</div>
        <input type="text" name='search' value={input} onChange={handleChange} placeholder='Search...' className={Style.searchInput}/>
    </div>
    </>
  )
}

export default SearchBar