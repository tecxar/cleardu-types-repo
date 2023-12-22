export interface DialerUsers {
    dialerProcess?: string;
    id?: number;
    userId: number;
    dialerId: number;
    userName: string;
    password: string;
    showRecentCalls: boolean;
    enableOutbound: boolean;
    isActive: boolean;
    followUps: boolean;
    autoCallbacks: boolean;
    hotTransfer: boolean;
    callMode: string;
    serverIP: string;
    createdBy: number;
    updatedBy: number;
    dialerReferenceId?: string;
  }
  