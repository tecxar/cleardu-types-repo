export interface Notice {
  id: number;
  customerId: number;
  agentId: number;
  noticeCategoryId: number;
  noticeStepId: number;
  templateId: number;
  status?: string;
  sms?: boolean;
  whatsApp?: boolean;
  email?: boolean;
  RPAD?: boolean;
  pastingAtDoor?: boolean;
  newPaperEnglish?: boolean;
  newsPaperVernacular?: boolean;
  awbNumber?: string;
  approvedBy?: number;
  clickedCount?: number;
  elapsedDate?: Date;
  message?: string;
  awbFileName?: string | undefined;
}

export interface NoticeExport {
  id?: number;
  name?: string;
  mobile?: number;
  loanNumber?: string;
  agentName?: string;
  clientName?: string;
  processName?: string;
  userName?: string;
  customerId?: number;
  templateId?: number;
  awbNumber?: string;
  noticeCategoryName?: string;
  noticeStepName?: string;
  createdAt?: string;
}
export interface INoticeExportRowsCount {
  count: number;
  rows: NoticeExport[];
}
export interface NoticeRowsCount {
  count: number;
  rows: Notice[];
}

export interface UpdateNotice {
  status?: string;
  awbNumber?: string;
}

export interface Elapsed {
  elapsedDate: string;
}

export enum noticeStatusEnumType {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export interface FilterPayload {
  categoryName?: string;
  stepName?: string;
  awbNumber?: string;
  status?: string;
  createdAt?: string;
  agentName?: string;
  method?: string;
  page?: number;
  pageSize?: number;
}

export interface AllNoticeResponse {
  existingNotice: NoticeData | null;
  updatedNotices: boolean | null;
}

export interface NoticeData {
  id: number;
  customerId: number;
  status?: string | null;
  approvedBy?: number | null;
  sms?: boolean | null;
  email?: boolean | null;
  whatsApp?: boolean | null;
  RPAD?: boolean | null;
  pastingAtDoor?: boolean | null;
  handDelivery?: boolean | null;
  newsPaperEnglish?: boolean | null;
  newsPaperVernacular?: boolean | null;
}

export interface messageData {
  message: string;
  modifiedData: any;
}

export interface NoticeUpdateData {
  customerId?: number;
  agentId?: number;
}
