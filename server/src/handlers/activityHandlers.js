const { newActivity, allActivity } = require("../controllers/activityControllers");

const postActivity = async (req, res) => {

  const {name, difficulty, duration, season} = req.body

    try {
    const result = await newActivity(name, difficulty, duration, season)
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

const getActivity = async (req, res) => {
  try {
    const result = await allActivity()
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

module.exports = {
  postActivity,
  getActivity
}