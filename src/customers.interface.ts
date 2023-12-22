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
  
  export interface CustomersById {
    id?: number | null;
    clientId?: number | null;
    processId?: number | null;
    customerId?: number | null;
    loanNumber: string;
    listId?: number | null;
    mobile: string;
    alternateContact1: string | null;
    alternateContact2: string | null;
    name: string | null;
    fatherName: string | null;
    gender: string | null;
    email: string;
    pan: string | null;
    mailingAddress: string | null;
    mailingCity: string | null;
    mailingPin: string | null;
    mailingState: string | null;
    permanentAddress: string | null;
    permanentCity: string | null;
    permanentPin: string | null;
    permanentState: string | null;
    residenceOwnership: string | null;
    communityReligion: string | null;
    maritalStatus: string | null;
    customerOccupation: string | null;
    employerName: string | null;
    employerAddress: string | null;
    cibilScore: number | null;
    coApplicant1: string | null;
    coApplicant2: string | null;
    coApplicant3: string | null;
    guarantor1: string | null;
    guarantor1Contact: string | null;
    guarantor1Address: string | null;
    guarantor2: string | null;
    guarantor2Contact: string | null;
    guarantor2Address: string | null;
    reference1: string | null;
    reference1Contact: string | null;
    reference1Address: string | null;
    reference2: string | null;
    reference2Contact: string | null;
    reference2Address: string | null;
    isDeleted: number | null;
    encryptedId: string | null;
    agentId?: number;
    CustomerLoanDetails?: {
      loanNumber: string;
    };
    clientid: {
      clientName: string | null;
      contactPersonMobile: string | null;
      authorizedOfficer: string | null;
    };
    processid: {
      id: number | null;
      processName: string | null;
      processType: string | null;
      processConfig: {
        id: number | null;
        prouctTypeId: number | null;
        productId: number | null;
        prouctTypeid: {
          id: number | null;
          loanType: string | null;
        };
      };
      agents: {
        id: number | null;
        processId: number | null;
        userId: number | null;
        userid: {
          id: number | null;
          assignAgent: string | null;
        };
      };
    };
  }


  export interface CustomerDataByProcess {
    dialerProcessId?: string;
  }

  export interface ICustomerUpdate extends Partial<Customers> {
    agentId?: number;
    processId?: number;
  }

  export interface ReassignAgentToCustomer {
    agentId: number;
    clientId: number;
    processId: number;
    listId: number;
    customerIds: [number];
    updatedBy: number;
  }

  export interface CustomerLoanNumber extends Customers {
    clientid?: {
      name?: string;
    };
  }

  export interface CustomerTemplateDetails {
    clientName?: string;
    currentDate?: string;
    loanAmount?: number;
    totalOutstanding?: number;
    aoName?: string;
    isItAutoGenerated?: string;
    customerName?: string;
    mailingAddress?: string;
    permanentAddress?: string;
    loanNumber?: number;
    totalEMIs?: number;
    EMIAmount?: number;
    EMIStartDate?: string;
    interestOutstanding?: number;
    principalOutstanding?: number;
    penaltyOutstanding?: number;
    bounceChargesOutstanding?: number;
    authSignature?: string;
    city?: string;
    agreementID?: string;
    interest?: string;
    coApplicant1?: string;
    coApplicant2?: string;
    guarantor2?: string;
    guarantor1Address?: string;
    disbursedDate?: string;
  }