//here client is "the company" from where we get  defaulters' data.

export interface Merchants {
  id?: number;
  name: string;
  contactPerson?: string;
  email?: string;
  mobile?: string;
  address1?: string;
  address2?: string;
  landmark?: string;
  pincode?: string;
  city?: string;
  state?: string;
  latitude?: string;
  longitude?: string;
  IsActive?: number;
}

export interface MerchantRow {
  count: number;
  rows: Merchants[];
}
