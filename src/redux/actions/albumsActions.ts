import sanityAPI from "../../sanity/client";

import {
  ALBUMS_FETCH_REQUEST,
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_FAIL,
} from "../constants/albumsConstants";
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'

export const fetchAlbums = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ALBUMS_FETCH_REQUEST
      });
      const data = await sanityAPI.fetch(
        `*[_type == 'category']{
          "key": _id,
          title,
          order,
          color,
          "cover": cover.asset._ref,
          "slug": slug.current,
          "albums": albums[].album[] -> {
            "key": _id,
            title,
            "cover": cover.asset._ref,
            "slug": slug.current,
            color,
            "photoshoots": photoshoots[].photoshoot[] -> {
              title,
              details,
              photos[] {
                "key": _key,
                "photo": asset._ref
              }
            }
          }
        }`
      );
      dispatch({
        type: ALBUMS_FETCH_SUCCESS,
        payload: data
      });
      
    } catch (error) {
      dispatch({
        type: ALBUMS_FETCH_FAIL,
        payload: error.message
      });
    }
  }
}
