import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchGenres } from "features/genres/genresThunks";
import "./selectGenres.scss";

export const SelectGenres = () => {
  const dispatch: AppDispatch = useDispatch();

  const { genres, loading, error } = useSelector((state: RootState) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="select-container">
      <label className="label">Genres</label>

      <select className="select" defaultValue="">
        <option disabled hidden value="">
          Choose a genre
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};
