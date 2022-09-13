// React Types
import { FC, ReactElement, useContext } from "react";
//@ts-ignore
import DelayLink from "react-delay-link";
// Styles
import "./landscapeGrid.scss";
//@ts-ignore
import { Context } from "../../contexts/Context";

const LandscapeGrid: FC<{ media: Array<category> | Array<video> }> = ({
  media,
}): ReactElement => {
  //@ts-ignore
  const dispatch = useContext(Context)[1];
  return (
    <main className="landscape-grid">
      {media &&
        media.map((element: category | video) => {
          return (
            <DelayLink
              delay={750}
              to={element.slug}
              key={element.key}
              clickAction={() => dispatch({ type: "start_transition" })}
              replace={false}
            >
              <div className="landscape-container">
                <div className="landscape-overlay" style={{  backgroundColor: `rgb(${element.color})`}}>
                  <p>{element.artist ? element.artist + " - " + element.title : element.title}</p>
                </div>
                <img className="landscape-image" src={element.cover} alt="" />
              </div>
            </DelayLink>
          );
        })}
    </main>
  );
};

export default LandscapeGrid;
