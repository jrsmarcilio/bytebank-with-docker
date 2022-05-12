import { Request, Response } from "express";
import { TransferService } from "../services/createTransferService";

export const TransferController = {
  async handle(request: Request, response: Response) {
    const { transfer, value, destination } = request.body;
    const transferService = new TransferService();
    const newTransfer = await transferService.execute({ transfer, value, destination });
    return response.status(200).json({ message: "Successful transfer.", transfer: newTransfer });
  },

  async show(request: Request, response: Response) {
    const transferService = new TransferService();
    const transfers = await transferService.getAll();
    return response.status(200).json(transfers)
  }
};
