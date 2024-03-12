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


  interface WorkflowSubcategory {
    name: string;
    dpd: number | undefined;
    templateId: number | undefined;
    requireSign: string | boolean;
    isActive: string | boolean;
    workflowSubcategoryId?: number;
    workflowCategoryId?: number;
    label: string;
    userSignRole?: string;
  }

  interface ProcessList {
    id?: number;
    name: string | undefined;
    processName: string;
    dialerProcessId?: number;
    dialerProcess?: string;
    clientId?: number;
    dialerId?: number;
    isActive?: boolean | number;
    processType: string;
    isCronActive?: boolean | number;
    maxRatio?: number;
    agents?: any;
    dial_method?: any;
  }

  interface ProcessConfigList {
    id?: number;
    clientId?: number;
    processName?: string | any;
    posMin?: number;
    posMinUnit?: string;
    posMax?: number;
    posMaxUnit?: string;
    loanAmountMin?: number;
    loanAmountMinUnit?: string;
    loanAmountMax?: number;
    loanAmountMaxUnit?: string;
    isCompleted?: boolean | undefined | number;
    maxRatio?: number;
    dialerId?: number;
    dialerProcess?: string;
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
    dialerProcessId?: number;
    prouctTypeId?: number;
    workflowCategoryId?: number;
    workflowSubcategoryData?: WorkflowSubcategory[] | undefined;
    workflowName?: string;
    agents?: string[];
    platformType?: string;
    isActive?: boolean | number;
    tab?: string;
    authOfficerId?: number | null;
    arbitratorId?: number | null;
    isLoading?: boolean;
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

  export { Process, ProcessData, ConfigPayload, ProcessConfig, ProcessList, WorkflowSubcategory, ProcessConfigList }