import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { IHttpClient } from 'src/common/interfaces/http-client.interface';

@Injectable()
export class ClientHttpAdapter implements IHttpClient {
  private axios: AxiosInstance = axios;

  delete<T, D>(url: string, config?: D): Promise<T> {
    return this.axios.delete(url, config);
  }

  get<T, D>(url: string, config?: D): Promise<T> {
    return this.axios.get(url, config);
  }

  patch<T, D, R>(url: string, body: D, config?: R): Promise<T> {
    return this.axios.patch(url, body, config);
  }

  post<T, D, R>(url: string, body: D, config?: R): Promise<T> {
    return this.axios.post(url, body, config);
  }
}
