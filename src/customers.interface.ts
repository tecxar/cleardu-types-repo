export interface Customers {
  id?: number;
  clientId?: number;
  processId?: number;
  customerId?: number;
  listId?: number;
  mobile: string;
  alternateContact1: string;
  alternateContact2: string;
  name: string;
  fatherName: string;
  gender: string;
  email: string;
  pan: string;
  mailingAddress: string;
  mailingCity: string;
  mailingPin: string;
  mailingState: string;
  permanentAddress: string;
  permanentCity: string;
  permanentPin: string;
  permanentState: string;
  residenceOwnership: string;
  communityReligion: string;
  maritalStatus: string;
  customerOccupation: string;
  employerName: string;
  employerAddress: string;
  cibilScore: number;
  coApplicant1: string;
  coApplicant2: string;
  coApplicant3: string;
  guarantor1: string;
  guarantor1Contact: string;
  guarantor1Address: string;
  guarantor2: string;
  guarantor2Contact: string;
  guarantor2Address: string;
  reference1: string;
  reference1Contact: string;
  reference1Address: string;
  reference2: string;
  reference2Contact: string;
  reference2Address: string;
  isDeleted: number;
  encryptedId: string;
  dialerProcess?: string;
  agentName?: string;
  agentId?: number;
  processType?: string;
  dialerAgent?: string;
  CustomerLoanDetails?: any;
  totalCalls?: number;
  loanId?: number;
  loanNumber: string;
  agreementID: string;
  crNo?: string;
  loanType?: string;
  loanAmount?: number;
  disbursedDate?: string;
  productName?: string;
  supplierName?: string;
  EMIAmount?: number;
  totalEMIs?: number; //Number of EMIs
  EMICycleDt?: string;
  EMIEndDt?: string;
  EMIStartDt?: string;
  bucket?: number;
  CurrentDPDBucket?: string;
  otherLoanDetails?: string;
  totalBounces?: number; //Number of bounces
  bounceChargesOutstanding?: number;
  interestOutstanding?: number;
  penaltyOutstanding?: number;
  principalOutstanding?: number;
  totalOutstanding?: number;
  totalEMIOverDue?: number; //Number of EMI Overdue
  EMIOverdueAmount?: number;
  unpaidEMIAmount?: number;
  offerEMIAmount?: number;
  waiverProposed?: number;
  lastPaymentDate?: string;
  previousPaymentHistory?: string;
  futurePrincipal?: number;
  maxSettlementAmount: number;
  vintageBand: string;
  clientName?: string;
  processName?: string;
}

export interface allCustomersData {
  id?: number;
  mobile?: number;
  alternateContact1?: number;
  name?: string;
  fatherName?: string;
  gender?: string;
  email?: string;
  loanNumber?: string;
  loanType?: string;
  loanAmount?: number;
  principalOutstanding?: number;
  totalOutstanding?: number;
  clientName: string;
  settlementAmount?: number;
  ptpDate?: string;
  ptpAmount?: number;
}
export interface CustomerDataByProcess {
  dialerProcessId?: string;
}
export interface CustomerRowsCount {
  count: number;
  rows: Customers[];
}
export interface CustomerUpdate extends Partial<Customers> {
  agentId?: number;
  processId?: number;
}
export interface CustomerLoanNumber extends Customers {
  clientid?: {
    name?: string;
  };
}

type Partial<T> = {
  [A in keyof T]?: T[A];
};

export interface customerSearchData {
  page?: number;
  pageSize?: number;
  q?: string;
  filter?: {
    client?: number;
    process?: number;
    agent?: number;
    isAssign?: number;
    isDeleted?: number;
  };
}

export interface RassignAgentToCustomer {
  agentId: number;
  clientId: number;
  processId: number;
  listId: number;
  customerIds: [number];
  updatedBy: number;
}

export interface UserData {
  customerID: number;
  loanNumber: string;
  direction: string;
  phoneNumber: number;
  message: string;
  status: string;
  scheduled: boolean;
  scheduleDate: string;
  createdBy: number;
  updatedBy: number;
}
