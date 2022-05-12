import { getCustomRepository } from "typeorm";
import { TransferRepository } from "../repositories/Transfer";
import { ITransferRequest } from "../interfaces/transfer";

class TransferService {
  async execute({ value, transfer, destination }: ITransferRequest) {
    if (!transfer || !value || !destination)
      throw new Error("Incomplete transfer data.");
    const transferRepository = getCustomRepository(TransferRepository);
    const newTransfer = transferRepository.create({
      transfer,
      destination,
      value,
    });
    await transferRepository.save(newTransfer);
    return { value, transfer, destination };
  }

  async getAll() {
    const transferRepository = getCustomRepository(TransferRepository);
    const transfers = await transferRepository.find();
    if (!transfers) throw new Error("No transfer.");
    return transfers;
  }
}

export { TransferService };
