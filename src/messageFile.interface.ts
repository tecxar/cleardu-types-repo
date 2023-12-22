export interface MessageFile {
    id?: number;
    name: string;
    whatsApp: boolean;
    sms: boolean;
    ivr: boolean;
    smsMessage?: string;
    smsScheduleTime?: Date;
    whatsAppMessage?: string;
    whatsAppScheduleTime?: Date;
    ivrFilename?: string;
    ivrScheduleTime?: Date;
    ivrTemplateID?: number;
    smsTemplateID?: number;
    whatsAppTemplateID?: number;
  }
  