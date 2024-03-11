 interface IWorkflowConfiguration {
    id: number;
    processConfigId: number;
    dpd: number;
    templateId: number;
    requireAuthSign: boolean;
    isActive: boolean;
  }
  
   type IProcessConfigResponse = {
    workflowConfigData: IWorkflowConfiguration[];
  };
  
 interface IWorkflowConfigurationData {
    workflowSubcategoryId: number;
    processConfigId: number;
    dpd: number;
    templateId: number;
    requireAuthSign: boolean;
    isActive: boolean;
  }

export { IWorkflowConfiguration, IProcessConfigResponse, IWorkflowConfigurationData  }