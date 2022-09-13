import { useState, useEffect, useRef, FC, ReactElement } from "react";
import "./portraitGrid.scss";

const PortraitGrid: FC<{ photos: Array<any> }> = ({ photos }): ReactElement => {
  const [selected, setSelected] = useState<any>(false);
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const scrollY = useRef(0)

  //@ts-ignore
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsMobile(true)
    }
    return () => {
      document.body.style.overflowY = "visible"
      document.getElementById("header-padding")!.style.height = "100px"
      document.getElementById("header")!.classList.remove('gtfo')
    }
  }, [])

  
  function offset(el: any) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  function handleSelect(key: string) {
    scrollY.current = window.scrollY
    document.getElementById("header-padding")!.style.height = "0vh";
    document.getElementById("footer-padding")!.style.display = 'inline-block';

    if (key === photos[0].key) {
      document.getElementById(key)!.style.paddingTop = '2.5vw'
    } 
    document.body.style.overflowY = "hidden";

    setTimeout(() => {
      let likeAEl = document.getElementById(key + "-a")!
      likeAEl.style.height = `${likeAEl.offsetHeight}px`
      likeAEl.style.width = `${likeAEl.offsetWidth}px`
      setHeight(likeAEl.offsetHeight)
      setWidth(likeAEl.offsetWidth)
      window.scrollTo({
        top: offset(document.getElementById(key)!).top,
        left:0,
        behavior: 'smooth'
      })
      const heightIsBigger = likeAEl.offsetHeight > likeAEl.offsetWidth
      if (heightIsBigger) {
        setTimeout(() => {
          likeAEl.style.height = "calc(100vh - 3vw)";
        }, 750)
      }
      if (!heightIsBigger) {
        setTimeout(() => {
          likeAEl.style.height = "calc(100vh - 3vw)";
        }, 1250)
        setTimeout(() => {
          likeAEl.style.width = "calc(100vw - 3vw)";
        }, 1250)
      } 

      let portraitContainers: any = document.querySelectorAll(
        ".portrait-container"
      );
      for (let i = 0; i < portraitContainers.length; i++) {
        if (portraitContainers[i].id !== key) {
          portraitContainers[i].classList.add('gtfo')
        } else {
            portraitContainers[i].classList.add('photo-select')
            if (!heightIsBigger) {
              setTimeout(() => {
                portraitContainers[i].classList.add('photo-wide')
              }, 500)
            }
            if (i % 2 === 1 && likeAEl.offsetWidth > likeAEl.offsetHeight) {
              setTimeout(() => {
                portraitContainers[i].style.marginLeft = "-3.5vw";
              }, 500)
            }
        }
      }
      document.getElementById("header")!.classList.add("gtfo");
      let photoDetails = document.getElementById(key + "-details")
      if (photoDetails) {
        photoDetails.style.display = "none";
      }
      
      setSelected(key);
    }, 500)
  }
  
  function handleDeselect() {
    let likeAEl = document.getElementById(selected + "-a")!
    likeAEl.style.position = "relative";
    likeAEl.style.height = `${height}px`;
    likeAEl.style.width = `${width}px`;
    document.body.style.overflowY = "visible";
    document.getElementById(selected)!.classList.remove('photo-wide')
    
    setTimeout(() => {
      let portraitContainers: any = document.querySelectorAll(
        ".portrait-container"
      );
      for (let i = 0; i < portraitContainers.length; i++) {
        if (i % 2 === 1 && width > height) {
          portraitContainers[i].style.marginLeft = "47.5vw";
        }
      }
    }, 100)

    setTimeout(() => {
      document.getElementById(selected)!.classList.remove('photo-select')
      document.getElementById("header-padding")!.style.height = "100px"
      let photoDetails: any = document.querySelectorAll(
        ".photo-details"
      );

      for (let i = 0; i < photoDetails.length; i++) {
        photoDetails[i].style.display = "revert"
      }
    }, 750)

    setTimeout(() => {
      let portraitContainers: any = document.querySelectorAll(
        ".portrait-container"
      );

      for (let i = 0; i < portraitContainers.length; i++) {
        portraitContainers[i].classList.remove('gtfo')
      }
      document.getElementById("header")!.classList.remove('gtfo')
      window.scrollTo({
        top: scrollY.current,
        left:0,
        behavior: 'smooth'
      })
      if (selected === photos[0].key) {
        document.getElementById(selected)!.style.paddingTop = '0vw'
      } 
      setSelected(false);
    }, 1500)
  }

  return (
    <div
      className="portrait-wrapper"
      onClick={() => {
        if (selected && !isMobile) {
          handleDeselect()
        }
      }}
    >
      {photos &&
        photos.map((photo, i) => {
          return (
            <div id={photo.key} className="portrait-container" key={photo.key}>
              <div
                id={photo.key + "-a"}
                className="portrait-likeA"
                onClick={() => {
                  if (!selected && !isMobile) {
                    handleSelect(photo.key)
                  }
                }}
              >
                <img
                  className="portrait-image"
                  id={photo.key + "-photo"}
                  src={photo.photo}
                  alt={photo.title}
                />
                {photo.details && !isMobile ? (
                  <div id={photo.key + "-details"} className="photo-details">
                    <p className="photo-title">{photo.title}</p>
                    <p className="photo-text">{photo.details}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
        <div id="footer-padding" className="footer-padding"/>
    </div>
  );
};

export default PortraitGrid;
