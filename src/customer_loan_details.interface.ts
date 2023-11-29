export interface CustomerLoanDetails {
  id?: number;
  customerId: number;
  loanId?: number;
  loanNumber: string;
  agreementID: string;
  crNo?: string;
  loanType?: string;
  loanAmount?: number;
  disbursedDate?: string;
  productName?: string;
  supplierName?: string;
  EMIAmount?: number;
  totalEMIs?: number; //Number of EMIs
  EMICycleDt?: string;
  EMIEndDt?: string;
  EMIStartDt?: string;
  bucket?: number;
  CurrentDPDBucket?: string;
  otherLoanDetails?: string;
  totalBounces?: number; //Number of bounces
  bounceChargesOutstanding?: number;
  interestOutstanding?: number;
  penaltyOutstanding?: number;
  principalOutstanding?: number;
  totalOutstanding?: number;
  totalEMIOverDue?: number; //Number of EMI Overdue
  EMIOverdueAmount?: number;
  unpaidEMIAmount?: number;
  offerEMIAmount?: number;
  waiverProposed?: number;
  lastPaymentDate?: string;
  previousPaymentHistory?: string;
  futurePrincipal?: number;
  maxSettlementAmount: number;
}
