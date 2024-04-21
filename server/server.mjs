import dotenv from "dotenv";
dotenv.config();

//<=============Modules================>
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//<=============Routers================>
import { authRouter } from "./routers/authRouter.mjs";
import { userRouter } from "./routers/userRouter.mjs";

//express app start up
const app = express();
const port = process.env.PORT || 3000;

//<============Middleware=============>
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(cors());

//<============Routes=================>
app.use("/auth", authRouter);
app.use("/user", userRouter);

//listen on port environment variable
app.listen(port, () => {
  console.log(`The Aliens: We are listening on port ${port}`);
});
