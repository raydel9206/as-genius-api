export interface IHttpClient {
  get<T, D>(url: string, config?: D): Promise<T>;
  post<T, D, R>(url: string, body: D, config?: R): Promise<T>;
  patch<T, D, R>(url: string, body: D, config?: R): Promise<T>;
  delete<T, D>(url: string, config?: D): Promise<T>;
}
