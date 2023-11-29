export interface AgentProcess {
  id?: number;
  userId: number;
  processId: number;
}

export interface AgentProcessData {
  id: number;
  createdBy?: number | string;
  createdAt?: Date | string;
  updatedBy?: number | string;
  updatedAt?: Date | string;
  userId: number;
  processId: number;
}
