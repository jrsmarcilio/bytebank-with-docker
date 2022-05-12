import { Request, Response } from "express";
import { TransferService } from "../services/transferService";

export const TransferController = {
  async handle(request: Request, response: Response) {
    const { transfer, value, destination } = request.body;
    const transferService = new TransferService();
    const newTransfer = await transferService.execute({ transfer, value, destination });
    return response.status(200).json(newTransfer);
  },

  async show(request: Request, response: Response) {
    const transferService = new TransferService();
    const transfers = await transferService.getAll();
    return response.status(200).json(transfers)
  },

  async index(request: Request, response: Response) {
    const id: number = Number(request.params.id);
    const transferService = new TransferService();
    const transfer = await transferService.getById(id);
    return response.status(200).json(transfer)
  },

  async update(request: Request, response: Response) {
    const { transfer, value, destination } = request.body;
    const id: number = Number(request.params.id);
    const transferService = new TransferService();
    const updateTransfer = await transferService.updateById(id, { transfer, value, destination });
    return response.status(200).json(updateTransfer);
  },

  async _delete(request: Request, response: Response) {
    const id: number = Number(request.params.id);
    const transferService = new TransferService();
    const deleteTransfer = await transferService.deleteById(id);
    return response.status(200).json(deleteTransfer)
  }
};
