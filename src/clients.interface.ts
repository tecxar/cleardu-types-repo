//here client is "the company" from where we get  defaulters' data.

export interface Clients {
  id?: number;
  name: string;
  contactPerson?: string;
  contactPersonEmail?: string;
  contactPersonMobile?: string;
  address1?: string;
  address2?: string;
  landmark?: string;
  pin?: string;
  city?: string;
  state?: string;
  isISG?: number;
}

export interface ClientRow {
  count: number;
  rows: Clients[];
}
