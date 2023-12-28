interface ResponseCountRows<T> {
  count: number;
  rows: T;
}


interface Response<T> {
  status: boolean;
  data: ResponseCountRows<T> | null;
  message: string;
}

export { ResponseCountRows, Response }