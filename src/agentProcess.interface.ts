export interface AgentProcess {
  id?: number;
  userId: number;
  processId: number;
}

export interface AgentProcessData extends AgentProcess {
  createdBy?: number | string;
  createdAt?: Date | string;
  updatedBy?: number | string;
  updatedAt?: Date | string;
}
