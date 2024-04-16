require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

require("express-debug")(app)

app.use(express.json())
app.use(bodyParser)
