import { ApiEndpoints } from '@/api/endpoints'
import { get } from '@/api/httpService'
import type { AxiosResponse } from 'axios'

export interface Picture {
  id: string
  imgSrc: string
  title: string
  subTitle: string
  article: string
}

export interface IQueryPicVo {
  id: string
}

export class QueryPicVo implements IQueryPicVo {
  id = ''
}
