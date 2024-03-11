 interface SystemLogs {
    id?: number;
    eventType: string;
    logType: string;
    note: string;
    payload: string;
    //    userId: number;
    customerId?: number;    
    // createdAt: Date;
  }
  export { SystemLogs }