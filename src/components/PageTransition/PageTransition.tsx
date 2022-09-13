// React
import { FC, ReactElement, useContext } from "react";
import "./PageTransition.scss";
import { Context } from "../../contexts/Context";

const PageTransition: FC = (): ReactElement => {
  //@ts-ignore
  const [state, dispatch] = useContext(Context);
  let { transition } = state;
  if (transition) {
    document.getElementById("transition")!.classList.add("transition");
    setTimeout(() => {
      document.getElementById("transition")!.classList.add("transition-end");
    }, 1500);
    setTimeout(() => {
      document.getElementById("transition")!.classList.add("transition-reset");
      document.getElementById("transition")!.classList.remove("transition");
      document.getElementById("transition")!.classList.remove("transition-end");
    }, 2250);
    setTimeout(() => {
      document
        .getElementById("transition")!
        .classList.remove("transition-reset");
      dispatch({ type: "end_transition" });
    }, 2255);
  }
  return <div id="transition" className="transition-overlay" />;
};
export default PageTransition;
