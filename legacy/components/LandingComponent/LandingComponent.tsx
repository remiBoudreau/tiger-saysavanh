// React Types
import { Fragment, FC, ReactElement, useContext } from "react";
//@ts-ignore
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Slider from "./Slider/Slider";
import logo from "../../assets/logoBlack.png";
import "./landingComponent.scss";

//@ts-ignore
import { Context } from "../../contexts/Context";

const LandingComponent: FC<{ photos: Array<string> }> = ({
  photos,
}): ReactElement => {
  //@ts-ignore
  const dispatch = useContext(Context)[1];
  return (
    <Fragment>
      <div className="solid-padding-left" />
      <div className="landing-container">
        <section className="landing-sidebar">
          <div className="sidebar-container">
            <img className="landing-logo" src={logo} alt="logo" />
            <div className="landing-text">
              <p className="landing-subheader">TIGER SAYSAVANH</p>
              <h1 className="landing-header">THE WORLD THROUGH A LENS</h1>
              <p className="landing-hook">
                The world, my journey, in the midst of chaos, through my eyes
                only. The life of a Toronto based photographer, creative
                influencer, student of art.
              </p>
            </div>
            <NavLink to="/home" className="button-container">
              EXPLORE
            </NavLink>
          </div>
        </section>
        <Slider photos={photos} />
      </div>
      <div className="solid-padding-right" />
      <div className="solid-padding-top" />
      <div className="solid-padding-bottom" />
    </Fragment>
  );
};

export default LandingComponent;
