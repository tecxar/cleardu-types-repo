export interface GeneratedNotices {
    id: number;
    customerId: number;
    agentId: number;
    workflowCategoryId: number;
    workflowSubCategoryId: number;
    templateId: number;
    status?: string;
    isSms?: boolean;
    isWhatsapp?: boolean;
    isEmail?: boolean;
    isPostAcknowledgementDue?: boolean;
    isPastingAtDoor?: boolean;
    isNewsPaperEnglish?: boolean;
    isNewsPaperVernacular?: boolean;
    isHandDelivery?: boolean;
    postTrackingNumber?: string;
    approvedBy?: number;
    clickedCount?: number;
    elapsedDate?: Date;
    message?: string;
    newCustomerNoticeFile?: string | undefined;
    s3DocumentKey?: string | null;
  }

  export type GeneratedUploadNotice = Omit<GeneratedNotices, 'templateId'>;

  export interface WorkflowGenerated extends GeneratedNotices {
    processConfigId: number;
    workflowConfigId?: number;
    documentKey: string;
    preview: boolean;
  }

  export interface MessageData {
    message: string;
    modifiedData: any;
  }
  export interface NoticeUpdateData {
    customerId?: number;
    agentId?: number;
  }

  export interface FilterPayload {
    categoryId?: number;
    categoryName?: string;
    subCategoryName?: string;
    postTrackingNumber?: string;
    status?: string;
    createdAt?: string;
    agentName?: string;
    method?: string;
    page?: number;
    pageSize?: number;
    searchStr?: string;
    filter?: {
      category?: number;
      subCategory?: number;
      status?: string;
      agent?: number;
    };
  }
  export interface ExportFilter extends FilterPayload {
    isExport: boolean;
  }

  export interface ElpasedDate {
    approvedDate?: string | Date;
    currentDate?: string | Date;
  }

  export interface AllNoticeResponse {
    existingNotice: GeneratedNotices | null;
    updatedNotices: boolean | null;
  }
  
  export interface UpdateNotice {
    status?: string;
    postTrackingNumber?: string;
  }
  
  export enum NoticeMessageStatus {
    Initiated = 'Initiated',
    Approved = 'Approved',
    Rejected = 'Rejected',
  }

  export enum NoticeResponseEnumType {
    SMS = 'SMS',
    EMAIL = 'EMAIL',
    WHATSAPP = 'WHATSAPP',
    RPAD = 'RPAD',
    PASTINGATDOOR = 'Pasting at door',
    HANDELIVERY = 'Hand delivery',
    NEWSPAPERENGLISH = 'News paper english',
    NEWSPAPERVERNACULAR = 'News paper vernacular',
  }