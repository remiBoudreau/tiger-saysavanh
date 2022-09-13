import {combineReducers} from "redux"
import { fetchAlbumsReducer } from "./albumsReducers"
import { fetchVideosReducer } from "./videosReducers"
import { fetchInformationReducer } from "./informationReducers"

export default combineReducers({
    fetchAlbumsReducer,
    fetchVideosReducer,
    fetchInformationReducer,
})