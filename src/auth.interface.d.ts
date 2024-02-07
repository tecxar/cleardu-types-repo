interface GetModulesForSideBarMenu {
  title: string;
  link: string;
  icon: string;
  page: GetSlug[];
}

interface GetSlug {
  slug: string;
}

interface Login {
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
  modulesForMenu?: GetModulesForSideBarMenu[];
  permissions?: string[];
  collection?: Boolean;
  legal?: Boolean;
  aoS3Key?: string;
}

export  default { GetModulesForSideBarMenu, GetSlug, Login  }