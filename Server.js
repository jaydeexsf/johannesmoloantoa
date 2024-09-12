const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const dbconfig = require('./config/dbConfig.js'); 
const port = process.env.PORT || 4000;

app.use(cors());
const portfolioRouter = require('./router/portfolioRouter'); 

app.use(express.json());

app.use('/api', portfolioRouter); // Use route path without './'

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
