export interface LoginDetails {
  id?: number;
  createdBy?: number;
  status: string;
  duration: any;
  x?: Array<number>;
}

export interface LoginDetailsRowsCount {
  rows: number;
  count?: number;
}
