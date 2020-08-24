"use strict";

var express = require('express');

var cors = require('cors');

require('dotenv').config();

var app = express();
var port = process.env.port || 8888;
app.use(cors());
app.use(express.json());
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});