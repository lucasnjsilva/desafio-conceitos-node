const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use('/', require('./../routes'));
app.use(cors());

module.exports = app;
