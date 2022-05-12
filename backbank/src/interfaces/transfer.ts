export interface ITransferRequest {
  id?: number;
  value: number;
  destination: string;
  transfer: string;
}

export enum typeTransfer {
  "DOC" = "doc",
  "TED" = "ted",
  "PIX" = "pix",
}
