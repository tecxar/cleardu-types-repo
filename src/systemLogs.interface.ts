export interface SystemLogs {
  id?: number;
  eventType: string;
  logType: string;
  note: string;
  payload: string;
  //    userId: number;
  customerId?: number;
  // createdAt: Date;
}
export interface LogsRowsCount {
  count: number;
  rows: SystemLogs[];
}
