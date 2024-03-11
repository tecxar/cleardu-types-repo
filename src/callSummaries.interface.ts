 interface CallSummaries {
    id?: number;
    mobileNo: string;
    userId: string;
    station: number;
    callMode?: string;
    callStatus: string;
    callDate: string;
    callHour?: number;
    callMinute?: number;
    callDuration: string;
    queueDuration?: Date;
    ringDuration?: Date;
    wrapupTime?: Date;
    queueName?: string;
    listId?: number;
    did?: string;
    leadId: string;
    customerId?: number;
    loanNumber: string;
    callReferenceId: string;
    dialerDisposition?: string;
    completedBy?: string;
    processName: string;
    recordingFileName: string;
    comments?: string;
    customerDispositionId?: number | null;
  }
   interface CallSummariesPayload {
    page?: number;
    pageSize?: number;
    searchStr?: string;
    isExport: boolean;
    filter?: {
      clientId: string;
      userId?: string;
      processName?: string;
      callMode?: string;
      fromDate?: string;
      toDate?: string;
    };
    portal?: string;
  }

  export { CallSummaries, CallSummariesPayload  }