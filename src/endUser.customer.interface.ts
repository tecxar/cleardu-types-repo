export interface EndUserDto {
  [x: string]: any;
  id: number;
  customerId: number;
  subscriptionId: string;
  email: string;
  key: String;
  planId: number;
  paymentId: string;
  paymentType: string;
  token: string;
  planName: string;
  inDiscord: boolean;
  unbindingAllowed: boolean;
  admin: boolean;
  banned: boolean;
  discordId: string;
  userName: string;
  userType: string;
}
