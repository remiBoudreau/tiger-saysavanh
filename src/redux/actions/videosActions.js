import sanityAPI from "../../sanity/client";

import {
  VIDEOS_FETCH_REQUEST,
  VIDEOS_FETCH_SUCCESS,
  VIDEOS_FETCH_FAIL,
} from "../constants/videosConstants";
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: VIDEOS_FETCH_REQUEST
      });
      const data = await sanityAPI.fetch(
        `*[_type == 'video']{
          "key": _id,
          title,
          artist,
          slug,
          order,
          cover,
          color,
          video,
          details,
        }`
      );
      dispatch({
        type: VIDEOS_FETCH_SUCCESS,
        payload: data
      });
      
    } catch (error) {
      dispatch({
        type: VIDEOS_FETCH_FAIL,
        payload: error.message
      });
    }
  }
}
