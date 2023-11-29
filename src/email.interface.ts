export enum MessageDirection {
  in = 'IN',
  out = 'OUT',
}
export enum MessageStatus {
  QUEUED = 'QUEUED',
  SENT = 'SENT',
  PROCESSING = 'PROCESSING',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
  SEEN = 'SEEN',
}
export interface Email {
  id?: number;
  customerID: number;
  loanNumber?: string;
  direction: MessageDirection;
  message: string;
  email?: string;
  messageID?: string;
  status: MessageStatus;
  deliveryDate?: Date;
  scheduled?: boolean;
  scheduleDate?: Date;
  isActive?: boolean;
  noticeId?: number;
  from?: string;
  to?: string;
  text?: string;
}

export interface EmailRowsCount {
  count: number;
  rows: Email[];
}
