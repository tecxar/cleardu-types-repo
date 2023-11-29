export interface P1Data {
  id: number;
  createdBy: number;
  clearDuId: number;
  PredictiveScore: number;
  updatedAt: Date;
  updatedBy: number;
  createdAt: Date;
  principleOutstanding?: number;
  clientName?: string;
  state?: string;
  loanType?: string;
  loanAmount?: number;
  tenure?: number;
  loanTime?: number;
  loanRemainPay?: number;
  vintageBand?: string;
  predictiveSlab?: string;
}

export interface P1DAtaRowsCount {
  rows: number;
  count?: number;
}
