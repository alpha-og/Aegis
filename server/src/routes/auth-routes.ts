import {
  signup,
  signin,
  signout,
  forgotPassword,
} from "../controllers/auth-controller";

import express from "express";
const Router = express.Router();

Router.post("/auth/signup", signup);
Router.post("/auth/signin", signin);
Router.get("/auth/signout", signout);
Router.post("/auth/forgot-password", forgotPassword);

export default Router;
