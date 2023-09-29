const { Country } = require("../db");
const axios = require("axios");

const apiClean = async () => {
    const apiRaw = await axios.get('http://localhost:5000/countries')
    const api = apiRaw.data
    const data = api.map((d) => {
        return {
        id: d.cca3,
        name: d.name.common,
        image: d.flags.svg,
        continents: d.continents,
        capital: d.capital,
        subregion: d.subregion,
        area: d.area,
        population: d.population,
        lenguaje: d.languages,
        googleMaps: d.maps.googleMaps,
        nameEnter: d.name.official
    }
})
    return data
}

const allCountries = async () => {
    return await apiClean()
}

const idCountry = async (id) => {
    const api = await apiClean()
    return api.find(c => c.id === id)
}

const nameCountries = async (name) => {

    const api = await apiClean()
    const results = api.filter((c) =>
    c.name.toLowerCase().includes(name.toLowerCase())
    )
    
  return results;
}

module.exports = {
    allCountries,
    idCountry,
    nameCountries
}