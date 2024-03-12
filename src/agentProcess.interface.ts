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

interface AgentProcessMapping {
  id: number,
  lastName: string,
  managers: string,
  firstName: string,
  teamLeads: string
  userName: string
  teamLeadId: number,
  processName: string
  "role.name": string,
  "agents.dialerId": number;
  "agents.userName": string;
  "agents.dialers.id": number;
  "agents.dialers.name": string;
  "agents.extensionNumber": number;
  "agents.dialerReferenceId": string;
}

export { AgentProcess, AgentProcessData, AgentProcessMapping };
