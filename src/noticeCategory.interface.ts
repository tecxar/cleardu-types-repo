export interface NoticeCategory {
  id: number;
  name: string;
}

export interface NoticeCategoryRowsCount {
  count: number;
  rows: NoticeCategory[];
}
