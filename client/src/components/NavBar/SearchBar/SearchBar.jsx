import React, { useState } from 'react'
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
        <input type="text" name='search' value={input} onChange={handleChange}/>
    </>
  )
}

export default SearchBar