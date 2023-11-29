export interface Dispositions {
  id?: number;
  category?: string;
  name: string;
  // type: string;
  isActive: boolean;
  portal?: string;
}
export interface DispositionsRowCount {
  count: number;
  rows: Dispositions[];
}

export interface SubDispositions {
  id?: number;
  dispositionId: number;
  name: string;
  isActive: boolean;
}
