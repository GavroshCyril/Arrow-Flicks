import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await getMovies();
  return data.results;
});
