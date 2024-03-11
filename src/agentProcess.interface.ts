 interface AgentProcess {
  id?: number;
  userId: number;
  processId: number;
}

 interface AgentProcessData extends AgentProcess {
  createdBy?: number | string;
  createdAt?: Date | string;
  updatedBy?: number | string;
  updatedAt?: Date | string;
}

export { AgentProcess, AgentProcessData }
