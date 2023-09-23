const { Activity } = require("../db");
const axios = require("axios");

const newActivity = async (name, difficulty, duration, season) => {

    const newActivity = await Activity.create({
        name, difficulty, duration, season
    })

    return newActivity
}

const allActivity = async () => {
    
    const db = await Activity.findAll()
    return db
}

module.exports = {
    newActivity,
    allActivity
}