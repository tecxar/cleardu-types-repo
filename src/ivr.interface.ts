import { CallStatus, MessageDirection } from './sms.interface';

export interface IVR {
  id?: number;
  loanNumber: string;
  customerID?: number;
  direction: MessageDirection;
  phoneNumber: string;
  ivrFile: string;
  batchID?: string;
  callID?: string;
  status: CallStatus;
  callDuration?: number;
  callDate?: Date;
  isActive?: boolean;
  messageFileId?: number;
}
export interface IVRRowsCount {
  count: number;
  rows: IVR[];
}
