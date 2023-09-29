import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Style from "./Create.module.css"
import { getCountries, postActivity } from '../../redux/actions/actions'

const Create = () => {

  const dispatch = useDispatch()

  const countries = useSelector(state => state.backupCountries)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  })

  const [errors, setErrors] = useState({
    name: "Name required",
    difficulty: "Difficulty required",
    duration: "Duration required",
    season: "Season required",
    countries: "Countries required"
  })

  const season = ["Spring", "Summer", "Autumn", "Winter"]

  const validate = (errors, name) => {
    if (name === "name") {
      if (errors.name === "") setErrors({ ...errors, name: "Name required" })
      else if (errors.name.length >= 20) setErrors({ ...errors, name: "Name is very long" })
      else if (errors.name.length <= 2) setErrors({ ...errors, name: "Name is very short" })
      else setErrors({ ...errors, name: "" })
    }
    if (name === "difficulty") {
      if (isNaN(Number(errors.difficulty))) setErrors({ ...errors, difficulty: "Must be a number" })
      else if (errors.difficulty > 5) setErrors({ ...errors, difficulty: "Choose a number 1 - 5" })
      else if (errors.difficulty < 0) setErrors({ ...errors, difficulty: "Negative numbers are not allowed" })
      else if (errors.difficulty === "0") setErrors({ ...errors, difficulty: "Choose a valid difficulty" })
      else setErrors({ ...errors, difficulty: "" })
    }
    if (name === "duration") {
      if (isNaN(Number(errors.duration))) setErrors({ ...errors, duration: "Must be a number" })
      else if (errors.duration > 24) setErrors({ ...errors, duration: "Choose a number up to 24" })
      else if (errors.duration < 0) setErrors({ ...errors, duration: "Negative numbers are not allowed" })
      else if (errors.duration === "0") setErrors({ ...errors, duration: "Choose a valid time" })
      else setErrors({ ...errors, duration: "" })
    }
    if (name === "season") {
      if (errors.season === "") setErrors({ ...errors, season: "Choose one season" })
      else setErrors({ ...errors, season: "" })
    }
    if (name === "countries") {
      if (errors.countries.length === 0) setErrors({ ...errors, countries: "Choose at least one country" })
      else setErrors({ ...errors, countries: "" })
    }
  }

  const handleChange = (event) => {

    let updatedValue = event.target.value;

    if (event.target.name === "countries") {
      if (state.countries.includes(event.target.value)) return
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
    let disabled = false
    for (let error in errors) {
      if (errors[error] !== "") {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postActivity(state));
    resetState()
  }

  const resetState = () => {
    setState({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: []
    });

    setErrors({
      name: "Name required",
      difficulty: "Difficulty required",
      duration: "Duration required",
      season: "Season required",
      countries: "Countries required"
    });
  };

  return (
    <>
      <div className={Style.create}>
        <a href={"/home"}>Home</a>
        <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style.inputs}>

              <div className={Style.input}>
                <label>Name: </label>
                <input placeholder='Choose a name...' value={state.name} onChange={handleChange} type="text" name="name" />
                <span>{errors.name}</span>
              </div>

              <div className={Style.input}>
                <label>Difficulty: </label>
                <input placeholder='Choose a difficulty...' value={state.difficulty} onChange={handleChange} type="number" name="difficulty" />
                <span>{errors.difficulty}</span>
              </div>

              <div className={Style.input}>
                <label>Duration (in hours): </label>
                <input placeholder='Choose a duration...' value={state.duration} onChange={handleChange} type="number" name="duration" />
                <span>{errors.duration}</span>
              </div>

              <div className={Style.input}>
                <label>Season: </label>
                <select value={state.season} onChange={handleChange} name='season'>
                  <option value="" disabled>Choose a season...</option>
                  {season.map(s => <option value={s} key={s}>{s}</option>)}
                </select>
                <span>{errors.season}</span>
              </div>

              <div className={Style.input}>
                <label>Countries: </label>
              <select value="" onChange={handleChange} name='countries'>
                <option value="" disabled>Choose countries...</option>
                {countries.map(c => <option value={c.name} key={c.id}>{c.name}</option>)}
              </select>
                <div className={Style.selectedCountries}>
                  {state.countries.map((c, index) => (
                <div className={Style.selectedCountry} key={index}>
                  <img src={countries.find(country => country.name === c)?.image} alt={c} />
                    <div>{c}</div>
                    <button className={Style.buttonClose} onClick={remove} type='button' id={c}>X</button>
                </div>
                  ))}
                </div>
              <span>{errors.countries}</span>
            </div>

              <button className={Style.createActivity} disabled={buttonDisabled()}>Create activity</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Create;
