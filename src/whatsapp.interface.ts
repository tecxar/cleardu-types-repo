import { MessageDirection, MessageStatus } from "./sms.interface";

export interface Whatsapp {
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


  