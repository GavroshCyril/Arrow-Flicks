import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGenres } from "../../api";

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  const genres = await getGenres();
  return genres;
});
