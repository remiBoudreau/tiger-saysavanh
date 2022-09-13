// React Types
import { FC, ReactElement } from "react";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import LandscapeGrid from "../components/LandscapeGrid/LandscapeGrid";

const Videos: FC = (): ReactElement => {
  const {
    loading,
    error,
    videos,
  }: {
    loading: boolean;
    error: object;
    videos: Array<category>;
  } = useAppSelector((state: RootState) => state.fetchVideosReducer);

  if (!loading && !error && videos) {
    return <LandscapeGrid media={videos} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};
export default Videos;
