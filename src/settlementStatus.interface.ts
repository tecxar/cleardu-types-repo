export interface SettlementStatus {
    id?: number;
    settlementId: number;
    status: string;
    name: string;
    userId: number;
    amount: number;
    comment: string;
  }
  

  interface IsRejected {
    settlementCount: number;
    statusCount: number;
  }