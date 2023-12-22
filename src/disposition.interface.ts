
export interface SubDispositions {
    id?: number;
    dispositionId: number;
    name: string;
    isActive: boolean;
  }

  export interface Dispositions {
    id?: number;
    category?: string;
    name: string;
    // type: string;
    isActive: boolean;
    portal?: string;
  }