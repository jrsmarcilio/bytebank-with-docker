import { EntityRepository, Repository } from "typeorm";
import { Transfer } from "../entities/Transfer";

@EntityRepository(Transfer)
class TransferRepository extends Repository<Transfer> {}

export { TransferRepository };
