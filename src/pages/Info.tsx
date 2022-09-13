// React
import { FC, ReactElement } from "react";
// Redux
import { useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
// Components
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Information from "../components/Information/Information";

const Info: FC = (): ReactElement => {
  const {
    loading,
    error,
    information,
  }: {
    loading: boolean;
    error: object;
    information: information;
  } = useAppSelector((state: RootState) => state.fetchInformationReducer);
  if (!loading && !error && information) {
    return <Information information={information} />;
  } else if (!loading && error) {
    return <Error />;
  } else {
    return <Loader />;
  }
};
export default Info;
