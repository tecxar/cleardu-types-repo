interface IPermissionModule {
    module: string;
    id?: number | boolean;
    permissions: PermissionArr[];
  }

  interface PermissionArr {
  id: number;
  permissionModuleId: number;
  slug: string;
  status: string;
  title: string;
}