import { OverrideProps } from './override.interface';

export interface DialerService {
  login(userID: string): void;
  logout(userID: string): void;
  startCall(mobileno: string, loanNumber: string): void;
  endCall(userName: string, convoxId: number, disposition: string): void;
  dataUpload(process: string): void;
}

export type ConvoxDialer = OverrideProps<
  DialerService,
  {
    //login(credentials: IUser, process: IProcess, station: number): void;

    //To call convox dialer login
    //login(dialer: number, username: string, process: string, station: number): void;
    login(userName: string, password: string, process: string, station: number): void;

    //To call convox dialer logout
    logout(userName: string): void;

    //To switch process // agent user can switch process when logged in
    switchProcess(userName: string, process: string): void;

    //To start call in convox dialer
    startCall(userName: string, mobileNo: string, loanNumber: string): void;

    //To end a call in convox dialer
    endCall(userName: string, convoxId: number, disposition: string): void;

    //To start and/or stop processes created in convox dialer
    processStartStop(process: string, processStatus: string): void;

    /* To upload data in convox dialer.This will only send the mobileno, loanid(uniqueid) in API given by convox */
    dataUpload(process: string, listId: number, callData: [{ mobile: string; info_1: string }]): void;

    //To clear uploaded data from list in convox. list id to be provided to clear leads
    clearLeads(listId: number): void;

    //To get the list of processes created in convox dialer
    getProcessList(): void;

    //To get the process wise list, details being used in convox for data upload pupose
    // it is required only in dataupload feature.
    getLists(process: string): void;

    //To get the process wise Break list created in convox dialer
    getBreakList(process: string): void;

    //To take break for a particular agent in convox dialer
    goToBreak(process: string, breakName: string, agent: string): void;

    //To make an agent ready in convox dialer
    readyAgent(userName: string): void;

    //To upload CSV data in database using multure. This will be a file shared by a financial institution
    uploadCSV(): void;

    //To create convox dialer users
    userAdd(): void;

    //To modify convox dialer users
    userModify(): void;

    //To active/inactive agent user
    userActiveInactive(): void;

    //Manual outbound to make dialer aware so that other calls does not land on that agent
    manaulOutbound(): void;
  }
>;
