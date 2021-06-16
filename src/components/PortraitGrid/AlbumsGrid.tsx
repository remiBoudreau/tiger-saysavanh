import { FC, ReactElement, useContext } from "react";
import { useLocation } from "react-router-dom";
//@ts-ignore
import DelayLink from "react-delay-link";
import "./portraitGrid.scss";
import { Context } from "../../contexts/Context";

const PortraitGrid: FC<{ photos: Array<album> }> = ({ photos }): ReactElement => {
  let location = useLocation();
  //@ts-ignore
  const dispatch = useContext(Context)[1];

  return (
    <div className="portrait-wrapper">
      {photos &&
        photos.map((photo, i) => {
          return (
            <div id={photo.key} className="portrait-container" key={photo.key}>
              <DelayLink
                delay={750}
                to={location.pathname + "/" + photo.slug}
                clickAction={() => dispatch({ type: "start_transition" })}
                replace={false}
                onMouseEnter={() => {
                  let portraitContainers: any = document.querySelectorAll(
                    ".portrait-container"
                  );
                  for (let i = 0; i < portraitContainers.length; i++) {
                    if (portraitContainers[i].id !== photo.key) {
                      portraitContainers[i].style.zIndex = "0";
                    } else {
                      portraitContainers[i].style.zIndex = "1";
                    }
                  }
                }}
              >
                <div className="portrait-element">
                  <img
                    className="portrait-image"
                    src={photo.photo}
                    alt={photo.title}
                  />
                  <div
                    className="portrait-overlay"
                    style={
                      i % 2 === 0
                        ? {
                            background: `linear-gradient(to right, rgba(${photo.color}, 0.4), rgba(${photo.color}, 0.6)`,
                          }
                        : {
                            background: `linear-gradient(to left, rgba(${photo.color}, 0.4), rgba(${photo.color}, 0.6)`,
                          }
                    }
                  />
                  <div className="portrait-title" style={{color: `rgb(${photo.color})`}}>
                    <h1>{photo.title}</h1>
                  </div>
                </div>
              </DelayLink>
            </div>
          );
        })}
    </div>
  );
};

export default PortraitGrid;
