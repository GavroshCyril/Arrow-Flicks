import { NoRatedMovies } from "@components/NoRatedMovies";
import { Modal } from "@components/Modal";
import "./ratedMoviesPage.scss";

export const RatedMoviesPage = () => {
  const isRated = false;

  return (
    <>
      {isRated === false ? (
        <div className="wrapper">
          <Modal />
        </div>
      ) : (
        <div>
          <span>Movies</span>
        </div>
      )}
    </>
  );
};
