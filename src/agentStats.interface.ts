export interface AgentStats {
  id?: number;
  agentId?: number;
  ptpAmount?: number;
  posAmount?: number;
  customerCount?: number;
  settlementAmount?: number;
  ptpPaymentAmount?: number;
  settlementApprovedAmount?: number;
  settlementReceivedAmount?: number;
  supervisorId?: number;
  processId?: number;
  clientId?: number;
  assignedCases?: number;
  connectedCases?: number;
  ptpCount?: number;
  target?: number;
  settlementRaisedCount?: number;
  settlementRecievedCount?: number;
  settlementApprovedCount?: number;
  ptpPaymentCount?: number;
  talkTime?: number;
  monthYear?: number;
  totalPaymentAmount?: number;
  totalPaymentCount?: number;
}
