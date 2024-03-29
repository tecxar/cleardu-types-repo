 enum MessageDirection {
    in = 'IN',
    out = 'OUT',
  }


   enum MessageStatus {
    QUEUED = 'QUEUED',
    SENT = 'SENT',
    PROCESSING = 'PROCESSING',
    DELIVERED = 'DELIVERED',
    FAILED = 'FAILED',
    SEEN = 'SEEN',
  } 

   enum SMSMessageStatus {
    QUEUED = 'QUEUED',
    SENT = 'SENT',
    DELIVRD = 'DELIVERED',
    DELIVERED = 'DELIVERED',
    FAILED = 'FAILED',
    REJECTD = 'REJECTED',
    REJECTED = 'REJECTED',
  }
  
   enum CallStatus {
    QUEUED = 'QUEUED',
    CALLED = 'CALLED',
    PROCESSING = 'PROCESSING',
    DELIVERED = 'DELIVERED',
    FAILED = 'FAILED',
    REJECTED = 'REJECTED',
  }

   interface SMS {
    id?: number;
    customerID?: number;
    loanNumber: string;
    direction: MessageDirection;
    phoneNumber: string;
    message: string;
    batchID?: string;
    messageID?: string;
    status: MessageStatus;
    deliveryDate?: Date;
    scheduled?: boolean;
    scheduleDate?: Date;
    isActive?: boolean;
    messageFileId?: number;
  }
  
  export { MessageDirection, SMS, CallStatus, SMSMessageStatus, MessageStatus,  }