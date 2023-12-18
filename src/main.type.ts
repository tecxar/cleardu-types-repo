export interface ResponseCountRows<T> {
  count: number;
  rows: T;
}

export interface Response<T> {
  status: boolean;
  data: ResponseCountRows<T>;
  message: string;
}
