const express = require('express');
require('dotenv').config();
const app = express();
const dbconfig = require("./config/dbConfig")
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
