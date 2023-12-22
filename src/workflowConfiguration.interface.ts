export interface IWorkflowConfiguration {
    id: number;
    processConfigId: number;
    dpd: number;
    templateId: number;
    requireAuthSign: boolean;
    isActive: boolean;
  }
  
  export type IProcessConfigResponse = {
    workflowConfigData: IWorkflowConfiguration[];
  };
  
export interface IWorkflowConfigurationData {
    workflowSubcategoryId: number;
    processConfigId: number;
    dpd: number;
    templateId: number;
    requireAuthSign: boolean;
    isActive: boolean;
  }

