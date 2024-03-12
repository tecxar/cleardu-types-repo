 interface BulkMessageList {
    id: number
    name: string
    calling: string
    whatsApp: number
    sms: number
    ivr: number
    smsMessage: string
    whatsAppMessage: string
    ivrFilename: string
    ivrScheduleTime: string
    whatsAppScheduleTime: string
    smsScheduleTime: string
    ivrTemplateID: string
    whatsAppTemplateID: string
    smsTemplateID: string
    createdBy: number
    updatedBy: number
    createdAt: string
    updatedAt: string
    messageFiles: {
        firstName: string
        lastName: string
    }
}

export { BulkMessageList }