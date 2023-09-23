const { allCountries, idCountry, nameCountries } = require("../controllers/countriesControllers")

// const getCountries = async (req, res) => {
//     try {
//     const result = await allCountries()
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };

const detecting = async (req, res) => {

  let {name} = req.query

  if(name){
    name = name.toLowerCase()

    try {
      const result = await nameCountries(name)
      res.status(200).json(result);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
  } else {
    try {
      const result = await allCountries()
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }
}
const getCountryId = async (req, res) => {

  const { id } = req.params

    try {
      const result = await idCountry(id)
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
  }

// const getCountriesName = async (req, res) => {

//   let { name } = req.query;
//   name = name.toLowerCase()

//   try {
//     const result = await nameCountries(name)
//     res.status(200).json(result);
//     } catch (error) {
//       res.status(404).json({ error: error.message });
//     }
// }

module.exports = {
    // getCountries,
    getCountryId,
    detecting
    // getCountriesName,
}