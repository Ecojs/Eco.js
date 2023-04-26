import fetch from 'node-fetch'
import { join } from 'path'
import ECO from './ECO'
import { ClientObjectBase } from '../structures/ClientObjectBase'

export type HttpClientOptions = {
  base_url?: string
  api_key?: string
  debug?: boolean
}

export class HttpClient extends ClientObjectBase {
  private BASE_URL: string
  public api_key?: string
  public debug: boolean
  constructor(client: ECO, options: HttpClientOptions) {
    super(client)
    this.debug = options.debug ?? false
    this.BASE_URL = options.base_url ?? 'http://127.0.0.1:3001/'
    Object.defineProperty(this, 'api_key', { value: options.api_key, enumerable: false })
  }
  public async GET<T, V>(endpoint: string, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: any) => T)) {
    return this.fetch<T, V>('GET', endpoint, constructor)
  }
  public async POST<T, V, B>(endpoint: string, body: B, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: any) => T)) {
    return this.fetch<T, V>('POST', endpoint, constructor, JSON.stringify(body))
  }
  public async fetch<T, V>(method: 'GET' | 'POST', endpoint: string, constructor?: (new (client: ECO, data: V) => T) | ((client: ECO, data: V) => T), body?: any): Promise<T> {
    const headers = this.api_key ? { 'X-API-Key': this.api_key } : undefined

    const init = {
      method,
      headers: { 'content-type': 'application/json', 'Accept': 'application/json', ...headers },
      body
    }
    const url = join(this.BASE_URL, endpoint)
    const response = await fetch(
      url, init
    )
    if (this.debug){
      console.info(method, url, body)
      console.info(response.status)
    }
    if (response.ok) {
      if (response.headers.get('Content-Type')?.includes('text/')) {
        return response.text() as any
      }
      let data = await response.json()
      if (constructor != null)
        try {
          return new (constructor as any)(this.client, data);
        } catch (error) {
          return (constructor as any)(this.client, data);
        }
      return data as T
    }
    return Promise.reject(response);
  }
}
