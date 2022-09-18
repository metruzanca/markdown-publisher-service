import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import type { DevtoApi } from './types';
import type { Article, Platform, PlatformResponse } from '../types';
import { PlatformResponseStatus } from '../types';

const DEVTO_URL = 'https://dev.to/api'

// v1 docs aren't updated but so both of these need to be referenced.
// https://developers.forem.com/api/v0 = Has all the routes
// https://developers.forem.com/api/v1 = Has all the routes that have changed

export default class DevTo implements Platform {
  axios: AxiosInstance;
  constructor(apiKey: string) {
    this.axios = axios.create({
      headers: {
        'api-key': apiKey,
        'accept': 'application/vnd.forem.api-v1+json'
      },
      baseURL: DEVTO_URL,
    })
  }
  async publish(article: Article): Promise<PlatformResponse<{ id: number }>> {
    const body: DevtoApi.Create.Body = {
      article: {
        published: false,
        body_markdown: article.body_markdown,
        title: article.title,
      }
    }
    try {
      const res = await this.axios.post<DevtoApi.Create.Response>(`/articles`, body);
  
      return {
        status: PlatformResponseStatus.Success, //TODO get rid of this from here
        publishedAt: res.data.created_at,
        id: res.data.id,
        url: {
          path: res.data.path,
          slug: res.data.slug,
        }
      }
      
    } catch (error) {
      console.error((error as AxiosError).response?.data);
      return {
        status: PlatformResponseStatus.Failure,
      }
    }
  }
  async update(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async unPublish(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
