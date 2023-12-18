interface IGetModulesForSideBarMenu {
  title: string;
  link: string;
  icon: string;
  page: IGetSlug[];
}

interface IGetSlug {
  slug: string;
}

export interface Login {
  id: number;
  username: string;
  roleId: number;
  firstName: string;
  lastName: string;
  role: string;
  agentId?: string;
  get isAdmin(): boolean;
  processId?: number;
  agentStatus?: string;
  processName?: string;
  doj?: string;
  dob?: string;
  officeLocation?: string;
  slug?: string;
  supervisor?: string;
  supervisorId?: number;
  modulesForMenu?: IGetModulesForSideBarMenu[];
  permissions?: string[];
  collection?: Boolean;
  legal?: Boolean;
  aoS3Key?: string;
}
