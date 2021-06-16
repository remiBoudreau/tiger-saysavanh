// React Types
import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import VideoComponent from "../components/VideoComponent/VideoComponent";

const Video: FC = (): ReactElement => {
  const {
    loading,
    error,
    videos,
  }: { loading: boolean; error: object; videos: Array<video> } = useAppSelector(
    (state: RootState) => state.fetchVideosReducer
  );
  let location: any = useLocation();

  if (!loading && !error && videos) {
    let video: video;
    [video] = videos.filter((video) => video.slug === location.pathname);
    return <VideoComponent video={video} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};
export default Video;
