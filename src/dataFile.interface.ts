export interface DataFile {
    id?: number;
    name: string;
    clientId: number;
    processId: number;
    listId: string;
    calling: boolean;
    whatsApp: boolean;
    sms: boolean;
    ivr: boolean;
    smsMessage?: string;
    whatsAppMessage?: string;
    ivrFilename?: string;
  }
  