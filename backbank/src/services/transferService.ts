import { getCustomRepository } from "typeorm";
import { ITransferRequest } from "../interfaces/transfer";
import { TransferRepository } from "../repositories/Transfer";

class TransferService {
  async execute({ value, transfer, destination }: ITransferRequest) {
    if (!transfer || !value || !destination) throw new Error("Incomplete transfer data.");
    const transferRepository = getCustomRepository(TransferRepository);
    const newTransfer = transferRepository.create({ transfer, destination, value });
    await transferRepository.save(newTransfer);
    return { message: "Transfer successfully.", data: { value, transfer, destination } };

  }

  async getAll() {
    const transferRepository = getCustomRepository(TransferRepository);
    const transfers = await transferRepository.find();
    if (!transfers) throw new Error("No transfer.");
    return transfers;
  }

  async getById(id: number) {
    const transferRepository = getCustomRepository(TransferRepository);
    const transfer = await transferRepository.findOne(id);
    if (!transfer) throw new Error("No transfer.");
    return transfer;
  }

  async updateById(id: number, { value, transfer, destination }: ITransferRequest) {
    if (!id || !transfer) throw new Error("Incomplete transfer data.");
    const transferRepository = getCustomRepository(TransferRepository);
    const oldTransfer: ITransferRequest | undefined = await transferRepository.findOne(id);
    if (!oldTransfer) throw new Error("No transfer found.");
    await transferRepository.update(
      { id },
      {
        id: id,
        destination: destination || oldTransfer?.destination,
        value: value || oldTransfer?.value,
        transfer: transfer || oldTransfer?.transfer,
      }
    );
    return { message: "Changed transfer successfully.", data: { value, transfer, destination } };
  }

  async deleteById(id: number) {
    const transferRepository = getCustomRepository(TransferRepository);
    const transferExists = await transferRepository.findOne(id);
    if (!transferExists) throw new Error("No transfer found.");
    await transferRepository.delete(id);
    return { message: "Transfer deleted." };
  }
}

export { TransferService };
