import { Fragment, useState, FC, ReactElement, useContext } from "react";
import { useAppSelector } from "../../../redux/hooks";
import type { RootState } from "../../../redux/store";
import "./navigation.scss";
// Page Transition
//@ts-ignore
import DelayLink from "react-delay-link";
//@ts-ignore
import { Context } from "../../../contexts/Context";

const Navigation: FC = (): ReactElement => {
  //@ts-ignore
  const dispatch = useContext(Context)[1];

  const [showOverlay, setShowOverlay] = useState<Boolean>(false);
  const {
    loading,
    error,
    categories,
  }: {
    loading: boolean;
    error: object;
    categories: Array<any>;
  } = useAppSelector((state: RootState) => state.fetchAlbumsReducer);
  return (
    <Fragment>
      {/* Mobile */}
      <nav className="mobile-navigation">
        <div
          className={`hamburger-container ${showOverlay ? "open" : null}`}
          onClick={() => setShowOverlay(!showOverlay)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {showOverlay ? (
          <div className="navigation-overlay">
            {!loading && !error && categories
              ? categories.map((category) => {
                  return (
                    <div className="navigation-link" key={category.key}>
                      <DelayLink
                        delay={750}
                        to={`/${category.slug}`}
                        clickAction={() =>
                          dispatch({ type: "start_transition" })
                        }
                        replace={false}
                      >
                        {category.title}
                      </DelayLink>
                    </div>
                  );
                })
              : null}
            <div className="navigation-link" key="video">
              <DelayLink
                delay={750}
                to={`/videos`}
                clickAction={() => dispatch({ type: "start_transition" })}
                replace={false}
              >
                Videos
              </DelayLink>
            </div>
            <div className="navigation-link" key="live">
              <DelayLink
                delay={750}
                to={`/info`}
                clickAction={() => dispatch({ type: "start_transition" })}
                replace={false}
              >
                Info
              </DelayLink>
            </div>
          </div>
        ) : null}
      </nav>
      {/* Desktop */}
      <nav className="desktop-navigation">
        {!loading && !error && categories
          ? categories.map((category) => {
              return (
                <div className="navigation-link" key={category.key}>
                  <DelayLink
                    delay={750}
                    to={`/${category.slug}`}
                    clickAction={() => dispatch({ type: "start_transition" })}
                    replace={false}
                  >
                    {category.title}
                  </DelayLink>
                </div>
              );
            })
          : null}
        <div className="navigation-link" key="video">
          <DelayLink
            delay={750}
            to={`/videos`}
            clickAction={() => dispatch({ type: "start_transition" })}
            replace={false}
          >
            Videos
          </DelayLink>
        </div>
        <div className="navigation-link" key="live">
          <DelayLink
            delay={750}
            to={`/info`}
            clickAction={() => dispatch({ type: "start_transition" })}
            replace={false}
          >
            Info
          </DelayLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
