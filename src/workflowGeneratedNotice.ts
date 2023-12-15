export interface WorkflowGeneratedNotices {
    request: {
        id: number;
        customerId: number;
        agentId: number;
        workflowCategoryId: number;
        workflowSubCategoryId: number;
        templateId: number;
        status?: string;
        isSms?: boolean;
        isWhatsapp?: boolean;
        isEmail?: boolean;
        isPostAcknowledgementDue?: boolean;
        isPassingAtDoor?: boolean;
        isNewsPaperEnglish?: boolean;
        isNewsPaperVernacular?: boolean;
        isHandDelivery?: boolean;
        postTrackingNumber?: string;
        approvedBy?: number;
        clickedCount?: number;
        elapsedDate?: Date;
        message?: string;
        newCustomerNoticeFile?: string | undefined;
        processConfigId?: number;
        workflowConfigId?: number;
    }

    response: {
        message: string;
        status: boolean;
    }
}