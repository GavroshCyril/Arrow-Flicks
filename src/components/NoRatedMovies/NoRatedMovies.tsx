import { Link } from "react-router-dom";
import NoRatedMoviesImage from "../../assets/no-rated-movies.svg";
import "./noRatedMovies.scss";

export const NoRatedMovies = () => {
  return (
    <div className="no-rated-movies-container">
      <img className="no-rated-movies-image" src={NoRatedMoviesImage} alt="" />
      <span className="info-span">You haven't rated any films yet</span>
      <Link className="button" to={"/"}>
        Find movies
      </Link>
    </div>
  );
};
