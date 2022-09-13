// React
import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import AlbumsGrid from "../components/PortraitGrid/AlbumsGrid";
// Functions
import { filter } from "../lib/filter";

const Page: FC = (): ReactElement => {
  const {
    loading,
    error,
    categories,
  }: {
    loading: boolean;
    error: object;
    categories: Array<category>;
  } = useAppSelector((state: RootState) => state.fetchAlbumsReducer);

  let location: any = useLocation();
  const pathname = location.pathname.split("/");
  pathname.shift();

  if (!loading && !error && categories) {
    let photos = filter(categories, pathname);
    return <AlbumsGrid photos={photos} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};

export default Page;
