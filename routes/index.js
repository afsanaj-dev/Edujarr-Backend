const express = require("express");
const router = express.Router();
const api= require("./api")

const apiroutes = process.env.APIROUTES;
router.use(apiroutes, api);

module.exports = router;