require("dotenv").config();

//<=============Modules================>
const express = require("express");
const morgan = require("morgan");

//<=============Routers================>
const authRouter = require("./routers/authentication");

//express app start up
const app = express();
const port = process.env.PORT || 3000;

//<============Middleware=============>
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

//<============Routes=================>
app.use("/auth", authRouter);

//listen on port environment variable
app.listen(port, () => {
  console.log(`The Aliens: We are listening on port ${port}`);
});
