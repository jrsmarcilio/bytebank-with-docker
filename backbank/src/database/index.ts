import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { Transfer } from "../entities/Transfer";
import { createTransfer1652275929482 as TransferMigration } from "../database/migrations/1652275929482-createTransfer";

createConnection({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_HOST),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Transfer],
  migrations: [TransferMigration],
  synchronize: true,
  logging: true,
})
  .then((): void => console.log("Connected to the database."))
  .catch((err): void => console.error('Error Connected', err));

