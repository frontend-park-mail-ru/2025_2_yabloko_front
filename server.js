"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use("/static", express.static(path.join(__dirname, "dist")));

const PORT = 3000;
app.listen(PORT);
console.log("server is running on port 3000");
