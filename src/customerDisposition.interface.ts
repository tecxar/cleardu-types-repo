export interface CustomerDisposition {
  reminder?: boolean;
  reminderDate?: any;
  customerId: number;
  dialerDisposition: string;
  dispositionId: number;
  followUp: boolean;
  followupDate: Date;
  ptp: boolean;
  ptpDate: Date;
  ptpAmount: number;
  comments: string;
  break?: string;
  callRefNo?: string;
  portal?: string;
}
export interface CrmData {
  convoxid?: string;
  agent_id?: string;
  callbackDate?: string;
  callbackHrs?: string;
  callbackMin?: string;
  followUp?: string;
  callRefNo?: number;
}

export interface CustomerDispositionRowsCount {
  count?: number;
  rows: CustomerDisposition[];
}
export interface CustomerDispositionCount {
  count: number;
}
export interface CustomerDispositionSearch {
  page?: number;
  pageSize?: number;
  searchStr?: string;
  filter?: {
    clientId?: number;
    userId?: number;
    processId?: number;
    fromDate?: string;
    toDate?: string;
  };
  portal?: string;
}
