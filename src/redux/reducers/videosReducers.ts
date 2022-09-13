import {
  VIDEOS_FETCH_REQUEST,
  VIDEOS_FETCH_SUCCESS,
  VIDEOS_FETCH_FAIL,
} from "../constants/videosConstants";
import { AnyAction } from 'redux'
import { urlFor } from "../../sanity/imageUrlBuilder"

export const fetchVideosReducer = (state = {loading: null, videos: null, error: null}, action: AnyAction) =>{
  switch(action.type){
      case VIDEOS_FETCH_REQUEST:
          return {
              loading: true,
              videos: null,
              error: null
          }
      case VIDEOS_FETCH_SUCCESS:
        let videos = action.payload
        videos.forEach((video: any) => {
          video.cover = urlFor(video.cover).url()
          video.slug = '/videos/' + video.slug.current
          video.url = video.video
          delete video.video
        })
          return {
              loading: false,
              videos: videos,
              error: null
          }
      case VIDEOS_FETCH_FAIL:
          return {
              loading: false,
              videos: null,
              error: action.payload
          }
      default:
          return state
  }    
}