export interface dbConfig {
  read: {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
    enableLogging: boolean;
    pool: {
      min: number;
      max: number;
    };
  };
  write: {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
    enableLogging: boolean;
    pool: {
      min: number;
      max: number;
    };
  };
}
