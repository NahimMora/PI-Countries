import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import Style from "./Create.module.css"
import { postActivity } from '../../redux/actions/actions'

const Create = () => {

  const dispatch = useDispatch()

  const countries = [
    {
      "id": "KEN",
      "name": "Kenya",
      "image": "https://flagcdn.com/ke.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Nairobi"
      ],
      "subregion": "Eastern Africa",
      "area": 580367,
      "population": 53771300
    },
    {
      "id": "SMR",
      "name": "San Marino",
      "image": "https://flagcdn.com/sm.svg",
      "continents": [
        "Europe"
      ],
      "capital": [
        "City of San Marino"
      ],
      "subregion": "Southern Europe",
      "area": 61,
      "population": 33938
    },
    {
      "id": "PYF",
      "name": "French Polynesia",
      "image": "https://flagcdn.com/pf.svg",
      "continents": [
        "Oceania"
      ],
      "capital": [
        "Papeetē"
      ],
      "subregion": "Polynesia",
      "area": 4167,
      "population": 280904
    },
    {
      "id": "SLE",
      "name": "Sierra Leone",
      "image": "https://flagcdn.com/sl.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Freetown"
      ],
      "subregion": "Western Africa",
      "area": 71740,
      "population": 7976985
    },
    {
      "id": "MDG",
      "name": "Madagascar",
      "image": "https://flagcdn.com/mg.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Antananarivo"
      ],
      "subregion": "Eastern Africa",
      "area": 587041,
      "population": 27691019
    },
    {
      "id": "NGA",
      "name": "Nigeria",
      "image": "https://flagcdn.com/ng.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Abuja"
      ],
      "subregion": "Western Africa",
      "area": 923768,
      "population": 206139587
    },
    {
      "id": "JOR",
      "name": "Jordan",
      "image": "https://flagcdn.com/jo.svg",
      "continents": [
        "Asia"
      ],
      "capital": [
        "Amman"
      ],
      "subregion": "Western Asia",
      "area": 89342,
      "population": 10203140
    },
    {
      "id": "LBY",
      "name": "Libya",
      "image": "https://flagcdn.com/ly.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Tripoli"
      ],
      "subregion": "Northern Africa",
      "area": 1759540,
      "population": 6871287
    },
    {
      "id": "GUY",
      "name": "Guyana",
      "image": "https://flagcdn.com/gy.svg",
      "continents": [
        "South America"
      ],
      "capital": [
        "Georgetown"
      ],
      "subregion": "South America",
      "area": 214969,
      "population": 786559
    },
    {
      "id": "MEX",
      "name": "Mexico",
      "image": "https://flagcdn.com/mx.svg",
      "continents": [
        "North America"
      ],
      "capital": [
        "Mexico City"
      ],
      "subregion": "North America",
      "area": 1964375,
      "population": 128932753
    },
    {
      "id": "TKM",
      "name": "Turkmenistan",
      "image": "https://flagcdn.com/tm.svg",
      "continents": [
        "Asia"
      ],
      "capital": [
        "Ashgabat"
      ],
      "subregion": "Central Asia",
      "area": 488100,
      "population": 6031187
    },
    {
      "id": "CXR",
      "name": "Christmas Island",
      "image": "https://flagcdn.com/cx.svg",
      "continents": [
        "Asia"
      ],
      "capital": [
        "Flying Fish Cove"
      ],
      "subregion": "Australia and New Zealand",
      "area": 135,
      "population": 2072
    },
    {
      "id": "PAN",
      "name": "Panama",
      "image": "https://flagcdn.com/pa.svg",
      "continents": [
        "North America"
      ],
      "capital": [
        "Panama City"
      ],
      "subregion": "Central America",
      "area": 75417,
      "population": 4314768
    },
    {
      "id": "VAT",
      "name": "Vatican City",
      "image": "https://flagcdn.com/va.svg",
      "continents": [
        "Europe"
      ],
      "capital": [
        "Vatican City"
      ],
      "subregion": "Southern Europe",
      "area": 0.44,
      "population": 451
    },
    {
      "id": "SYC",
      "name": "Seychelles",
      "image": "https://flagcdn.com/sc.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Victoria"
      ],
      "subregion": "Eastern Africa",
      "area": 452,
      "population": 98462
    },
    {
      "id": "DZA",
      "name": "Algeria",
      "image": "https://flagcdn.com/dz.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Algiers"
      ],
      "subregion": "Northern Africa",
      "area": 2381741,
      "population": 510713
    },
    {
      "id": "GUM",
      "name": "Guam",
      "image": "https://flagcdn.com/gu.svg",
      "continents": [
        "Oceania"
      ],
      "capital": [
        "Hagåtña"
      ],
      "subregion": "Micronesia",
      "area": 549,
      "population": 168783
    },
    {
      "id": "SWE",
      "name": "Sweden",
      "image": "https://flagcdn.com/se.svg",
      "continents": [
        "Europe"
      ],
      "capital": [
        "Stockholm"
      ],
      "subregion": "Northern Europe",
      "area": 450295,
      "population": 10353442
    },
    {
      "id": "ATA",
      "name": "Antarctica",
      "image": "https://flagcdn.com/aq.svg",
      "continents": [
        "Antarctica"
      ],
      "area": 14000000,
      "population": 1000
    },
    {
      "id": "CHE",
      "name": "Switzerland",
      "image": "https://flagcdn.com/ch.svg",
      "continents": [
        "Europe"
      ],
      "capital": [
        "Bern"
      ],
      "subregion": "Western Europe",
      "area": 41284,
      "population": 17500657
    },
    {
      "id": "ETH",
      "name": "Ethiopia",
      "image": "https://flagcdn.com/et.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Addis Ababa"
      ],
      "subregion": "Eastern Africa",
      "area": 1104300,
      "population": 114963583
    },
    {
      "id": "SOM",
      "name": "Somalia",
      "image": "https://flagcdn.com/so.svg",
      "continents": [
        "Africa"
      ],
      "capital": [
        "Mogadishu"
      ],
      "subregion": "Eastern Africa",
      "area": 637657,
      "population": 15893219
    }]

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration:"",
    season:"",
    countries:[]
  })

  const [errors, setErrors] = useState({
    name: "Name required",
    difficulty: "Difficulty required",
    duration:"Duration required",
    season:"season required",
    countries:"countries required"
  })

  const season = ["Spring", "Summer", "Autumn", "Winter"]

  const validate = (errors, name) => {
    if(name === "name"){
        if(errors.name === "") setErrors({...errors, name:"Name required"})
        else if(errors.name.length >= 20) setErrors({...errors, name:"Name is very long"})
        else setErrors({...errors, name:""})
    }
    if(name === "difficulty"){
        if(isNaN(Number(errors.difficulty))) setErrors({...errors, difficulty:"Must be a number"})
        else if(errors.difficulty > 5) setErrors({...errors, difficulty:"Choose one number 1 - 5"})
        else setErrors({...errors, difficulty:""})
    }
    if(name === "duration"){
      if(isNaN(Number(errors.duration))) setErrors({...errors, duration:"Must be a number"})
      else if(errors.duration > 24) setErrors({...errors, duration:"Choose a number up to 24"})
      else if(errors.duration < 0) setErrors({...errors, duration:"Negative numbers are not allowed"})
      else if(errors.duration == 0) setErrors({...errors, duration:"Choose a valid time"})
      else setErrors({...errors, duration: ""})
    }
    if(name === "season"){
      if(errors.season === "") setErrors({...errors, season:"Choose one season"})
      else setErrors({...errors, season:""})
    }
    if(name === "countries"){
      if(errors.countries === "") setErrors({...errors, countries: "Choose a minimum of one country"})
      else setErrors({...errors, countries: ""})
    }
}

  const handleChange = (event) => {
    
    let updatedValue = event.target.value;
  
    if (event.target.name === "countries") {
      if(state.countries.includes(event.target.value)) return
      updatedValue = [...state[event.target.name], updatedValue];
    }
  
    validate({
      ...errors,
      [event.target.name]: updatedValue,
    }, event.target.name)

    setState({
      ...state,
      [event.target.name]: updatedValue,
    });

  };

  const remove = (e) => {
    const { id } = e.target;
  
    setState({
      ...state,
      countries: state['countries'].filter(c => c !== id),
    });
  };
  
  const buttonDisabled = () => {
    let disabled = true
    for(let error in errors){
      if(errors[error] === "") disabled = false;
      else {
        disabled = true
        break;
      }
    }
    return disabled;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postActivity(state))
  }

  return (
    <>
        <h1>Create Form Page</h1>
        <a href={"/home"}>Home</a>
        <form className={Style.form} onSubmit={handleSubmit}>
          <label>Name: </label>
          <input onChange={handleChange} type="text" name="name"/>
          <label>{errors.name}</label>

          <label>difficulty: </label>
          <input onChange={handleChange} type="number" name="difficulty"/>
          <label>{errors.difficulty}</label>
          
          <label>duration: </label>
          <input onChange={handleChange} type="number" name="duration"/><span>Hrs</span>
          <label>{errors.duration}</label>

          <label>season: </label>
          <select onChange={handleChange} name='season'>
            {season.map(s => <option value={s}>{s}</option>)}
          </select>
          <label>{errors.season}</label>

          <label>countries: </label>
          <select onChange={handleChange} name='countries'>
            {countries.map(c => <option value={c.name}>{c.name}</option>)}
          </select>
          {state.countries.map(c => <div><span id={"countries"}>{c}</span><button onClick={remove} type='button' id={c}>X</button></div>)}
          <label>{errors.countries}</label>

          <button disabled={buttonDisabled()}>Create activity</button>
        </form>
    </>
  )
}

export default Create