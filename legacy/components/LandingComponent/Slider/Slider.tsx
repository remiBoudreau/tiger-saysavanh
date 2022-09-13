import { useEffect, FC, ReactElement } from "react";
import "./slider.scss";

const Slider: FC<{ photos: Array<string> }> = ({ photos }): ReactElement => {
  //translateX transition
  useEffect(() => {
    let width: number;
    let slide: number = 0;
    let mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      width = -100;
    } else {
      width = -75;
    }
    let slider = setInterval(() => {
      slide += width;
      if (slide === width * photos.length) {
        slide = 0;
      }
      document.getElementById(
        "slider"
      )!.style.transform = `translateX(${slide}%)`;
    }, 4000);
    return () => clearInterval(slider);
  }, [photos]);
  return (
    <div className="slider-wrapper" id="slider">
      <div className="slider-container">
        {photos.map((photo) => (
          <img className="slider-image" key={photo} src={photo} alt={photo} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
