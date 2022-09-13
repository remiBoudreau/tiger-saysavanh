import { FC, ReactElement } from "react";
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
    </footer>
  );
};

export default Footer;
