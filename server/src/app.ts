import express from "express";
const app = express();

let { ROUTE_PREFIX } = process.env;
ROUTE_PREFIX = ROUTE_PREFIX ? ROUTE_PREFIX : "";

import authRouter from "./routes/auth-routes";
app.use(ROUTE_PREFIX, authRouter);

export default app;
