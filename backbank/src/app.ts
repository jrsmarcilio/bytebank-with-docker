import "reflect-metadata";
import "express-async-errors";
import "./database";
import "dotenv/config";

import express, { Application } from "express";
import cors from "cors";
import { routes } from "./routes";
import { ExpressAssyncErrorsConfig } from "./config/expressAssyncErrorsConfig";

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(routes);
app.use(ExpressAssyncErrorsConfig);

const PORT = process.env.NODE_DOCKER_PORT || 8000;
app.listen(PORT, (): void => console.log(`server running here http://localhost:${PORT}`));
