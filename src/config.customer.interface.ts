export interface MasterConfig {
  id: number;
}
export interface ConfigDto extends MasterConfig {
  customerId: number;
  stripeKey: string;
  token: string;
  backgroundColor: string;
  lightColor: string;
  linkColor: string;
  buttonColor: string;
  buttonTextColor: string;
  inputBackgroundColor: string;
  inputBorderColor: string;
  inputTextColor: string;
  inputPlaceholderColor: string;
  mainTextColor: string;
  secondaryTextColor: string;
  url: string;
  createdBy: number;
  updatedBy: number;
}
