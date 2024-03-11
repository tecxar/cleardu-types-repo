 interface User {
    id?: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    extensionNumber?: number;
    email?: string;
    roleId: number;
    dob?: Date;
    doj?: Date;
    managerId?: number;
    officeLocation?: string;
    supervisor?: string;
    supervisorId?: number;
    slug?: string;
    target?: number;
    // role: string;
    // agentId: string;
    isActive: boolean;
    aoS3Key?: string | null;
  }
  
   interface DialerUser {
    userId: number;
    dialerId: number;
    userName: string;
    password: string;
    dialerReferenceId: string;
    isActive: boolean;
    extensionNumber: number;
  }

   interface UserManager {
    id?: number;
    userId: number;
    managerId: number;
  }
  
   interface UserData {
    firstName: string;
    id: number;
    legal: number;
    collection: number;
    legalCount: number;
    collectionCount: number;
  }

   interface SupervisorPlatformData {
    id: number;
    supervisorId: number;
    legal: number;
    collection: number;
  }

   interface UserDetails {
    id: number;
    name?: string;
    lastName?: string;
    email?: string;
    extensionNumber?: number;
    managerId?: number | null;
    supervisor?: string | null;
    supervisorId?: number | null;
    dob?: string | null;
    doj?: string | null;
    officeLocation?: string | null;
    roleId?: number | null;
    target?: number | null;
    legal?: number | null;
    collection?: number | null;
  }
  
  export { User, UserDetails, SupervisorPlatformData, UserData, UserManager, DialerUser }
