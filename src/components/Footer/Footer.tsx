import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import "./footer.scss";

const Footer: FC = (): ReactElement => {
  return (
    <footer id="footer" className="footer-container">
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()} &nbsp;
      </div>
      <a href="https://tigersaysavanh/info" className="link-container">
        Tiger Saysavanh
      </a>
      <div className="cross">
      &nbsp;x&nbsp;
      </div>
      <a href="https://github.com/remiBoudreau" className="link-container">
        Jean-Michel Boudreau
      </a>
    </footer>
  );
};

export default Footer;
