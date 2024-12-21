const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
require('dotenv').config();

dbConfig();
const routes = require("./routes");
var cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);
// http://localhost:4000/api/v1/auth/course
app.listen(process.env.SERVERPORT, () => {
    console.log(`Server is running in port ${process.env.SERVERPORT}`)
})
