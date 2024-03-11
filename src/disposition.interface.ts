
 interface SubDispositions {
    id?: number;
    dispositionId: number;
    name: string;
    isActive: boolean;
  }

   interface Dispositions {
    id?: number;
    category?: string;
    name: string;
    // type: string;
    isActive: boolean;
    portal?: string;
  }
  export { SubDispositions, Dispositions }