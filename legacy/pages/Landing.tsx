// React
import { FC, ReactElement } from "react";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import LandingComponent from "../components/LandingComponent/LandingComponent";

const Landing: FC = (): ReactElement => {
  const {
    loading,
    error,
    carousel,
  }: {
    loading: boolean;
    error: object;
    carousel: Array<string>;
  } = useAppSelector((state: RootState) => state.fetchCarouselReducer);
  if (!loading && !error && carousel) {
    return <LandingComponent photos={carousel} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};
export default Landing;
