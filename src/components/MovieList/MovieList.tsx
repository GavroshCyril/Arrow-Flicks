import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movie/moviesThunks";
import { MovieCard } from "../MovieCard";
import { Flex, Loader, Text } from "@mantine/core";
import "./movieList.scss";

export const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <Text color="red">{error}</Text>;
  }

  return (
    <Flex gap="16px" wrap="wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Flex>
  );
};
