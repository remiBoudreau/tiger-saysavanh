import sanityAPI from "../../sanity/client";

import {
  CAROUSEL_FETCH_REQUEST,
  CAROUSEL_FETCH_SUCCESS,
  CAROUSEL_FETCH_FAIL,
} from "../constants/carouselConstants";
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'

export const fetchCarousel = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CAROUSEL_FETCH_REQUEST
      });
      const data = await sanityAPI.fetch(
        `*[_type == 'carousel']{photos}`
      );
      dispatch({
        type: CAROUSEL_FETCH_SUCCESS,
        payload: data[0]
      });
      
    } catch (error) {
      dispatch({
        type: CAROUSEL_FETCH_FAIL,
        payload: error.message
      });
    }
  }
}