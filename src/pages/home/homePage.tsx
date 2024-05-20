import { SelectGenres, MovieList } from "../../components";
import "./homePage.scss";

export const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Movies</h1>
      <div className="selects-container">
        <SelectGenres />
      </div>

      <MovieList />
    </div>
  );
};
