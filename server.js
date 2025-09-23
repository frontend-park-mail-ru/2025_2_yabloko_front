"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const PORT = 3000;
app.listen(PORT);
