import { Fragment, FC, ReactElement, useEffect, useContext } from "react";
import Navigation from "./Navigation/Navigation";
import "./header.scss";
import logo from "../../assets/logoBlack.png";
//@ts-ignore
import DelayLink from "react-delay-link";
import { Context } from "../../contexts/Context";

const Header: FC = (): ReactElement => {
  //@ts-ignore
  const dispatch = useContext(Context)[1];
  // Header hide/show on wheel down/up
  useEffect(() => {
    var lastOffsetY = 0;
    function toggleHeader(event: any) {
      const offsetY = window.scrollY;
      if (offsetY - lastOffsetY > 0 && offsetY > 100) {
        document.getElementById("header")?.classList.add("hide");
        lastOffsetY = offsetY;
      } else if (offsetY - lastOffsetY < 0) {
        document.getElementById("header")?.classList.remove("hide");
        lastOffsetY = offsetY;
      }
    }
    document.addEventListener("scroll", toggleHeader);
    return () => document.removeEventListener("scroll", toggleHeader);
  }, []);
  return (
    <Fragment>
      <header id="header" className="header-container">
        <div className="elements-container">
          <DelayLink
            delay={750}
            to="/"
            clickAction={() => dispatch({ type: "start_transition" })}
            replace={false}
          >
            <div className="logo-container">
              <img src={logo} className="header-logo" alt="logo" />
            </div>
          </DelayLink>
          <div className="navigation-wrapper">
            <Navigation />
          </div>
        </div>
      </header>
      <div id="header-padding" className="header-padding" />
    </Fragment>
  );
};

export default Header;
