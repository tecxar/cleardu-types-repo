//here client is "the company" from where we get  defaulters' data.
export interface Settlement {
  id?: number;
  customerId: number;
  userId: number;
  amount: number;
  // comment: string;
  // status: string;
}

export interface SettlementRow {
  count: number;
  rows: Settlement[];
}
