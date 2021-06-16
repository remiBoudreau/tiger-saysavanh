// React Types
import { FC, ReactElement } from "react";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import LandscapeGrid from "../components/LandscapeGrid/LandscapeGrid";

const Home: FC = (): ReactElement => {
  const {
    loading,
    error,
    categories,
  }: {
    loading: boolean;
    error: object;
    categories: Array<category>;
  } = useAppSelector((state: RootState) => state.fetchAlbumsReducer);
  if (!loading && !error && categories) {
    return <LandscapeGrid media={categories} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};
export default Home;
