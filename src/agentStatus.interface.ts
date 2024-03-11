 interface AgentStatus {
  id?: number;
  callerId?: string;
  agentId: string;
  stationId?: string;
  agentStatus: string;
  oncallQueue?: string;
  process?: string;
}
 interface AgentActivities {
  agentId: string;
  userName: string;
  loginHrs: string;
  logoutHrs: string;
  activeHrs: string;
  avgLogin: string;
  avgLogout: string;
}
 interface AgentActivitiesSearchData {
  page?: number;
  pageSize?: number;
  searchStr?: string;
  export?: boolean;
  filter?: {
    agentId?: string;
    fromDate?: string;
    toDate?: string;
  };
}

export { AgentStatus, AgentActivities, AgentActivitiesSearchData }