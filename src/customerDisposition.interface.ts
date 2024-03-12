 interface CustomerDispositionList {
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

   interface CrmData {
    convoxid?: string;
    agent_id?: string;
    callbackDate?: string;
    callbackHrs?: string;
    callbackMin?: string;
    followUp?: string;
    callRefNo?: number;
  }

  
 interface CustomerDispositionSearch {
    page?: number;
    pageSize?: number;
    searchStr?: string;
    isExport: boolean;
    filter?: {
      clientId?: number;
      userId?: number;
      processId?: number;
      fromDate?: string;
      toDate?: string;
    };
    portal?: string;
  }
  
  export { CustomerDispositionList, CrmData, CustomerDispositionSearch }