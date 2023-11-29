export interface NoticeStep {
  id: number;
  name: string;
  noticeCategoryId: number;
}

export interface NoticeStepRowsCount {
  count: number;
  rows: NoticeStep[];
}
