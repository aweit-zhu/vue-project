import type { AxiosResponse } from 'axios'
import type { Picture, QueryPicVo } from './models'

export default interface IPictureService {
  getPictureInfoById: (queryPicVo: QueryPicVo) => Promise<AxiosResponse<Picture>>
  getPictures: () => Promise<AxiosResponse<Picture[]>>
}
