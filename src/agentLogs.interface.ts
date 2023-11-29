export interface AgentLogs {
  id?: number;
  userId: number;
  action: string;
  notes: string;
  payload: string;
  createdAt: Date;
}
