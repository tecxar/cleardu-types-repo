 interface ClientResponse  {
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

  interface ClientDropDownResponse {
    id: number;
    name: string;
  }

  export { ClientResponse, ClientDropDownResponse }