import {
  CAROUSEL_FETCH_REQUEST,
  CAROUSEL_FETCH_SUCCESS,
  CAROUSEL_FETCH_FAIL,
} from "../constants/carouselConstants";
import { AnyAction } from 'redux'
import { urlFor } from "../../sanity/imageUrlBuilder"

export const fetchCarouselReducer = (state = {loading: null, carousel: null, error: null}, action: AnyAction) =>{

  switch(action.type){
      case CAROUSEL_FETCH_REQUEST:
          return {
              loading: true,
              carousel: null,
              error: null
          }
      case CAROUSEL_FETCH_SUCCESS:
        let { photos } = action.payload
        let photosUrlArr = photos.map((photo: object) => {
          return urlFor(photo).url()
        })
          return {
              loading: false,
              carousel: photosUrlArr,
              error: null
          }
      case CAROUSEL_FETCH_FAIL:
          return {
              loading: false,
              carousel: null,
              error: action.payload
          }
      default:
          return state
  }    
}