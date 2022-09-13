import {
  ALBUMS_FETCH_REQUEST,
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAIL,
} from "../constants/albumsConstants";
import { AnyAction } from 'redux'
import { urlFor } from "../../sanity/imageUrlBuilder"

export const fetchAlbumsReducer = (state = {loading: null, categories: null, error: null}, action: AnyAction) =>{
  switch(action.type){
    case ALBUMS_FETCH_REQUEST:
          return {
              loading: true,
              categories: null,
              error: null
          }
      case ALBUMS_FETCH_SUCCESS:
        let categories = action.payload
        // sort category based on order specified in sanity
        categories.sort(function(a: any, b: any) {
          return a.order - b.order
        })
        // format data from sanity
        categories.forEach((category: any) => {
          category.cover = urlFor(category.cover!).url() || ""
          if (category.albums) {
            category.albums.forEach((album: any) => {
              album.photo = urlFor(album.cover!).url() || ""
              let photos: Array<any> = []
              album.photoshoots.forEach((photoshoot: any) => {
                photoshoot.photos.forEach((photo: any, i: number) => {
                  photo.photo = urlFor(photo.photo).url() || ""
                  photo.title = photoshoot.title
                  if (i === 0) {
                    photo.details = photoshoot.details
                  }
                })
                delete photoshoot.title
                delete photoshoot.details
                photos = photos.concat(photoshoot.photos)
              })
              delete album.cover
              delete album.photoshoots
              album.photos = photos
            })
          }
        })
        return {
            loading: false,
            categories: categories,
            error: null
        }
      case ALBUMS_FETCH_FAIL:
          return {
              loading: false,
              categories: null,
              error: action.payload
          }
      default:
          return state
  }    
}