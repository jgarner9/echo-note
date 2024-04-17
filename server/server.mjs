import dotenv from "dotenv";
dotenv.config();

//<=============Modules================>
import express from "express";
import morgan from "morgan";

//<=============Routers================>
import { authRouter } from "./routers/authRouter.mjs";

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
