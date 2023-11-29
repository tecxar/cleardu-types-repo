export interface Process {
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

export interface ProcessData extends Process {
  processConfigId: number;
}

export interface ProcessRowsCount {
  count: number;
  rows: Process[];
}

export interface ProcessConfigPayload extends Process, ProcessConfig {
  processName: string;
  createdBy: number;
  agents: [];
  updatedBy: number;
}

export interface ProcessConfig {
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
}

export interface ProcessConfigRowsCount {
  count: number;
  rows: ProcessConfig[];
}

export interface ProcessConfigData {
  id: number;
  processConfigId?: number;
  userId: number;
  processId: number;
  clientId: number;
}
