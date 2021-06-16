import { FC, ReactElement } from "react";
import "./Error.scss";
const Error: FC = (): ReactElement => {
  return (
    <div className="fof-container">
      <div className="fof">
        <h1>Oops Something Went Wrong...</h1>
      </div>
    </div>
  );
};

export default Error;
