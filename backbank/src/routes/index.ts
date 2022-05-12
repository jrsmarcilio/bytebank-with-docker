import express from "express";
const routes = express.Router();

import { TransferController } from "../controllers/transfer";

routes.post("/transfer", TransferController.handle);
routes.get("/transfer", TransferController.show);
routes.get("/transfer/:id", TransferController.index);

export { routes };
