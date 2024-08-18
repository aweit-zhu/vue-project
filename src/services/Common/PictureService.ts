import { ApiEndpoints } from '@/api/endpoints'
import type { Picture, QueryPicVo } from './models'
import { get } from '@/api/httpService'
import type IPictureService from './IPictureService'

export default class PictureService implements IPictureService {
  getPictureInfoById(queryPicVo: QueryPicVo) {
    return get<Picture>(`${ApiEndpoints.GETPICTURE}/${queryPicVo.id}`)
  }

  getPictures() {
    return get<Picture[]>(ApiEndpoints.GETPICTURES)
  }
}
