import { useNavigate } from "react-router-dom";
import { Logo } from "@components/Logo";
import NotFoundImage from "../../assets/not-found-image.svg";
import "./notFound.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="not-found__container">
      <Logo />
      <div className="not-found__content">
        <img src={NotFoundImage} alt="404" />
        <span className="not-found__span">
          We can’t find the page you are looking for
        </span>
        <button className="button" onClick={handleClick}>
          Go Home
        </button>
      </div>
    </div>
  );
};
