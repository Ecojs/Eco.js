import fetch from 'node-fetch'
import { join } from 'path'

export type HttpClientOptions = {
  base_url?: string
  api_key?: string
}

export class HttpClient {
  private BASE_URL: string
  public api_key?: string
  constructor(options: HttpClientOptions) {
    this.BASE_URL = options.base_url ?? 'http://127.0.0.1:3001/'
    this.api_key = options.api_key
  }
  public async GET<T extends ({ new(props: any): T } | undefined)>(endpoint: string, constructor?: T) {
    return this.fetch<T>('GET', endpoint, constructor)
  }
  public async POST<T extends ({ new(props: any): T } | undefined)>(endpoint: string, body: any, constructor?: T) {
    return this.fetch<T>('POST', endpoint, constructor, body)
  }
  public async fetch<T extends ({ new(props: any): T } | undefined)>(method: 'GET' | 'POST', endpoint: string, constructor?: T, body?: any): Promise<T> {
    const headers = this.api_key ? { 'X-API-Key': this.api_key } : undefined

    const request = await fetch(
      join(this.BASE_URL, 'api', endpoint),
      {
        method,
        headers,
        body
      })
    if (request.ok) {
      const data = await request.json()
      if (constructor != null)
        return new constructor(data);
      return data as T
    }
    return Promise.reject(request);
  }
}
