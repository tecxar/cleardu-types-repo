import { Customers } from "./customers.interface";

export interface GenerateNoticePreviewPayload {
    preview?: boolean;
  }
  
  export interface GenerateNoticeDocument {
    clientId: number;
    customerDetail?: Customers;
    // key?: string;
    preview: boolean;
  }