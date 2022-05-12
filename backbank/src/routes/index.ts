import express from "express";
import { TransferController } from "../controllers/transfer";

const routes = express.Router();

routes.post("/transfer", TransferController.handle);
routes.put("/transfer/:id", TransferController.update);
routes.get("/transfer", TransferController.show);
routes.get("/transfer/:id", TransferController.index);
routes.delete("/transfer/:id", TransferController._delete);

export { routes };
