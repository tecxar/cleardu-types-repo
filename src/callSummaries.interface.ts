export interface CallSummaries {
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

export interface CallSummariesRowCount {
  count?: number;
  rows?: CallSummaries[];
}
