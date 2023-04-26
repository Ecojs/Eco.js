import fetch from 'node-fetch'
import { join } from 'path'
import ECO from './ECO'
import { ClientObjectBase } from '../structures/ClientObjectBase'

export type HttpClientOptions = {
  base_url?: string
  api_key?: string
}

export class HttpClient extends ClientObjectBase {
  private BASE_URL: string
  public api_key?: string
  constructor(client: ECO, options: HttpClientOptions) {
    super(client)
    this.BASE_URL = options.base_url ?? 'http://127.0.0.1:3001/'
    Object.defineProperty(this, 'api_key', { value: options.api_key, enumerable: false })
  }
  public async GET<T, V>(endpoint: string, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: any) => T)) {
    return this.fetch<T, V>('GET', endpoint, constructor)
  }
  public async POST<T, V>(endpoint: string, body: any, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: any) => T)) {
    return this.fetch<T, V>('POST', endpoint, constructor, body)
  }
  public async fetch<T, V>(method: 'GET' | 'POST', endpoint: string, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: V) => T), body?: any): Promise<T> {
    const headers = this.api_key ? { 'X-API-Key': this.api_key } : undefined

    const request = await fetch(
      join(this.BASE_URL, endpoint),
      {
        method,
        headers: { 'content-type': 'application/json', 'Accept': 'application/json', ...headers },
        body
      })
    if (request.ok) {
      if (request.headers.get('Content-Type')?.includes('text/')) {
        return request.text() as any
      }
      let data = await request.json()
      if (constructor != null)
        try {
          return new (constructor as any)(this.client, data);
        } catch (error) {
          return (constructor as any)(this.client, data);
        }
      return data as T
    }
    return Promise.reject(request);
  }
}
