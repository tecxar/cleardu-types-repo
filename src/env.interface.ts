import { dbConfig } from './db.interface';

export interface envConfig {
  isProduction: boolean;
  isDev: boolean;
  isTest: boolean;
  app: {
    name: string;
    version: string;
    description: string;
    port: number;
    secret: string;
  };
  cors: {
    credentials: boolean;
  };
  swagger: {
    enabled: boolean;
    path: string;
  };
  db: dbConfig;
  apiPrefix: string;
  google: {
    id: string;
    secret: string;
  };
  logs: {
    format: string;
    dir: string;
  };
  sentry: {
    enabled: boolean;
    dsn: string;
  };
  redis: {
    url: string;
  };
  sms: {
    base_url: string;
    user_name: string;
    api_key: string;
    client_id: string;
  };
  ivr: {
    base_url: string;
    user_name: string;
    token: string;
    plan_id: string;
    caller_id: string;
  };
  whatsapp: {
    base_url: string;
    api_key: string;
    namespace: string;
  };
  p1_model: {
    p1_api_key: string;
  };
  apiKey: string;
  airtelPayment: {
    client_id: string;
    client_secret: string;
    grant_type: string;
    token_expire_seconds: number;
  };
  isgPayment: {
    EncKey: string;
    SECURE_SECRET: string;
    VERSION: string;
    PASSCODE: string;
    ReturnURL: string;
    MERCHANTID: string;
    BANKID: string;
    TERMINALID: string;
    MCC: string;
    TxnType: string;
    authURL: string;
    StatusURL: string;
  };
  email: {
    from: string;
    apiKey: string;
    smtpPort: number;
    smtpHost: string;
    password: string;
  };
  cronEmails: string;
  cronStatus: boolean;
  environment: string;
  hypertel_baseUrl: string;
  smsCronStatus: boolean;
  paymentUrl: string;
  headers_x_api_key: string;
  agentRoleId: string;
}
