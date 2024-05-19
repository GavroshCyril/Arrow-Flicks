import { Link } from "react-router-dom";
import ArrowFlicksIcon from "../../assets/icons/arrowflicks.svg";
import "./logo.scss";

export const Logo = () => {
  return (
    <>
      <Link className="logo" to={"/"}>
        <div className="logo-image">
          <img src={ArrowFlicksIcon} alt="ArrowFlicks" />
        </div>
        <span className="logo-name">ArrowFlicks</span>
      </Link>
    </>
  );
};
