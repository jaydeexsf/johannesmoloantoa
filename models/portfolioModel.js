const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText:  {
        type: String,
        required: true
    },
    FirstName:  {
        type: String,
        required: true
    }, 
    LatName:  {
        type: String,
        required: true
    },
    caption:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    }

});

const aboutSchema = new mongoose.Schema({
    lettURL:  {
        type: String,
        required: true
    },
    abtDescription1:  {
        type: String,
        required: true
    },
    abtDescription2:  {
        type: String,
        required: true
    },
    welcomeText:  {
        type: Array,
        required: true
    }
});

const experienceSchema =  new mongoose.Schema({
    title:  {
        type: String,
        required: true
    },
    period:  {
        type: String,
        required: true
    },
    company:  {
        type: String,
        required: true
    },
    Description:  {
        type: String,
        required: true
    },
    responsiblity: {
        type: Array,
        required: false,
    }
});

const projectSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    demoLink:  {
        type: String,
        required: true
    },
    sourceCode:  {
        type: String,
        required: true
    },
    technologies:  {
        type: Array,
        required: true
    }
})

const contactSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        required: true
    },
    age:  {
        type: Number,
        required: true
    },
    country:  {
        type: String,
        required: true
    }
});

module.exports = {
    Intro : mongoose.model('intros', introSchema, 'intros'),
    About : mongoose.model('about', aboutSchema, 'About'),
    Experience : mongoose.model('experience', experienceSchema, 'Experience'),
    Projects : mongoose.model('projects', projectSchema, 'Projects'),
    Contacts : mongoose.model('contact', contactSchema, 'contact'),
}
