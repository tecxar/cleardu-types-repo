export interface CreateAgentData {
  agentName: string;
  agentId?: string;
  agentPassword: string;
  agentContact?: number;
  agentStatus?: string;
  agentType?: string;
  agentMaxNoAnswer?: number;
  agentWrapUpTime?: number;
  agentRejectDelayTime?: number;
  agentBusyDelayTime?: number;
  agentNoAnswerDelayTime?: number;
  agentCallTimeout?: number;
}

export interface UpdateAgentData {
  id: string;
  agentName?: string;
  agentId?: string;
  agentPassword?: string;
  agentContact?: number;
  agentStatus?: string;
  agentType?: string;
  agentMaxNoAnswer?: number;
  agentWrapUpTime?: number;
  agentRejectDelayTime?: number;
  agentBusyDelayTime?: number;
  agentNoAnswerDelayTime?: number;
  agentCallTimeout?: number;
}

export interface AgentLogin {
  agentId?: string;
  campaignId?: string;
  extension?: number;
}

export interface CommmonAgent {
  agentId: string;
  campaignId?: string;
}

export interface CreateCampaignData {
  name: string;
  type: string;
  agents?: string[];
  callcenterUuid?: string;
  maxWaitTime?: number;
  maxRatio?: number;
  strategy?: string;
}

export interface UpdateCampaignData {
  id: string;
  name?: string;
  type?: string;
  agents?: string[];
  callcenterUuid?: string;
  maxWaitTime?: number;
  maxRatio?: number;
  strategy?: string;
  maxWaitTimeWithNoAgent?: number;
  discardAbandonedAfter?: number;
}

export interface startStopCampaign {
  status: boolean;
}

export interface ManualCall {
  agentId?: string;
  uId: number;
  campaignId?: string;
  phoneNumber?: number;
}

export interface HypertelManualCallDataForAPI {
  alternateNumber: string;
}

export interface DeleteLead {
  campaignId: string;
  uId: string[];
}

export interface clearLeads {
  campaignId: string;
}
export interface EndCallData {
  callId: string;
  shouldBreak?: boolean;
  shouldPause?: boolean;
}

export interface AgentPause {
  agentId?: string;
  campaignId?: string;
}
export interface IRecording {
  callReferenceId?: number;
}

export interface IHypertelDialerService {
  createAgent(createAgentData: CreateAgentData): void;
  // updateAgent(updateAgentData: UpdateAgentData): void;

  // deleteAgent(): void;

  loginAgent(agentLoginData: AgentLogin): void;

  agentReady(agentData: CommmonAgent): void;

  agentBreak(agentData: CommmonAgent): void;

  logOutAgent(agentData: CommmonAgent): void;

  createCampaign(createCampaignData: CreateCampaignData): void;

  updateCampaign(updateCampaignData: UpdateCampaignData): void;

  campaignStart(id: string, payload: startStopCampaign): void;

  listCampaign(): void;

  manualCall(manualCallData: ManualCall): void;

  deleteLeads(deleteLeadData: DeleteLead): void;

  endCall(endCallData: EndCallData): void;

  agentPause(agentPauseData: AgentPause): void;

  listIVR(fetchType: string): void;
}
