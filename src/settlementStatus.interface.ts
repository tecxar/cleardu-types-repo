export interface SettlementStatus {
  id?: number;
  settlementId: number;
  status: string;
  name: string;
  userId: number;
  amount: number;
  comment: string;
}

export interface SettlementRow {
  count: number;
  rows: SettlementStatus[];
}

export interface ApprovalData {
  id: number;
  customerId: number;
  userId: number;
  createdBy: number;
  amount: number;
}

export interface UpdateSettlement {
  amount: string | number;
  comment: string;
  id: number;
  status: string;
}
