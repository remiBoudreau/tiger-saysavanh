import {
  INFORMATION_FETCH_REQUEST,
  INFORMATION_FETCH_SUCCESS,
  INFORMATION_FETCH_FAIL,
} from "../constants/informationConstants";
import { AnyAction } from 'redux'
import { urlFor } from "../../sanity/imageUrlBuilder"

export const fetchInformationReducer = (state = {loading: null, information: null, error: null}, action: AnyAction) =>{
  switch(action.type){
      case INFORMATION_FETCH_REQUEST:
          return {
              loading: true,
              information: null,
              error: null
          }
      case INFORMATION_FETCH_SUCCESS:
        let information = action.payload
        information.cover = urlFor(information.cover!).url() || ""
          return {
              loading: false,
              information: information,
              error: null
          }
      case INFORMATION_FETCH_FAIL:
          return {
              loading: false,
              information: null,
              error: action.payload
          }
      default:
          return state
  }    
}