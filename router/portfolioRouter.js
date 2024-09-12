const router = require('express').Router();
const {Intro, About, Projects, Experience, Contacts} = require('../models/portfolioModel.js'); 

router.get('/data', async (req, res) => {
    try {
        const intro = await Intro.find();
        const about = await About.find();
        const projects = await Projects.find();
        const experience = await Experience.find();
        const contacts = await Contacts.find();

        if ( !about.length || !projects.length || !experience.length ) {
            return res.status(404).json({ message: "Some collections are empty or not found" });
        }

        res.status(200).json({
            intro,
            about,
            projects,
            experience,
            contacts
        });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ message: "Error retrieving data u got that", error: error.message });
    }
});


module.exports = router;