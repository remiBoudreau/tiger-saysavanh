import sanityAPI from "../../sanity/client";

import {
  INFORMATION_FETCH_REQUEST,
  INFORMATION_FETCH_SUCCESS,
  INFORMATION_FETCH_FAIL,
} from "../constants/informationConstants";
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'

export const fetchInformation = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: INFORMATION_FETCH_REQUEST
      });
      const [data] = await sanityAPI.fetch(
        `*[_type == 'information'] {
          information,
          cover,
          "clients": clients[] {
            "key": _key,
            title,
            url
          }
        }`
      );
      dispatch({
        type: INFORMATION_FETCH_SUCCESS,
        payload: data
      });
      
    } catch (error) {
      dispatch({
        type: INFORMATION_FETCH_FAIL,
        payload: error.message
      });
    }
  }
}
