 interface Process {
    id?: number;
    processName: string;
    dialerProcessId?: string;
    dialerProcess: string;
    clientId: number;
    dialerId: number;
    isActive: boolean;
    name?: string;
    userId?: number;
    apId?: number;
    processType?: string;
    length?: number;
  }

   interface ProcessData extends Process {
    processConfigId: number;
  }
   interface ConfigPayload {
    isExport: boolean;
    page?: number;
    size?: number;
    searchStr?: string;
  }

   interface ProcessConfig {
    id?: number;
    clientId: number;
    processName?: string;
    posMin?: number;
    posMinUnit?: string;
    posMax?: number;
    posMaxUnit?: string;
    loanAmountMin?: number;
    loanAmountMinUnit?: string;
    loanAmountMax?: number;
    loanAmountMaxUnit?: string;
    isCompleted?: boolean;
    maxRatio?: number;
    threshold?: number;
    durationStartDate?: Date;
    durationEndDate?: Date;
    isProcessRollover?: boolean;
    isSettlementRollover?: boolean;
    allowSettlement?: boolean;
    variance?: number;
    isCollectionsPlatform?: boolean;
    isClientPortal?: boolean;
    isLegalPlatform?: boolean;
    isNumberMasking?: boolean;
    isCustomerSearchable?: boolean;
    targetDaily?: number;
    targetWeekly?: number;
    targetMonthly?: number;
    productId?: number;
    prouctTypeId?: number;
    authOfficerId?: number;
    workflowCategoryId?: number;
  }

  export { Process, ProcessData, ConfigPayload, ProcessConfig }