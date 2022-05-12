export interface IDataTransfer {
  id?: number;
  updated_at?: Date;
  destination: string;
  transfer: string;
  value: number;
}

export interface ITypeTransfer {
  value: string;
  label: string;
}
