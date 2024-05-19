import { NoRatedMovies } from "@components/NoRatedMovies";
import "./ratedMoviesPage.scss";

export const RatedMoviesPage = () => {
  const isRated = false;

  return (
    <>
      {isRated === false ? (
        <div className="wrapper">
          <NoRatedMovies />
        </div>
      ) : (
        <div>
          <span>Movies</span>
        </div>
      )}
    </>
  );
};
