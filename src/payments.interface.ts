export interface IPayments {
    id?: number;
    customerId?: number;
    clientName?: string;
    paymentType?: string;
    transationId?: string;
    loanNumber?: string;
    paymentAmount?: number;
    paymentDate?: string;
    paymentSource?: string;
    paymentStatus?: string;
    status?: string | null;
    paymentFile?: string;
    note?: string;
    paymentResponse?: string;
    email?: string;
    phone?: string;
  }