import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "./genresThunks";

interface IGenre {
  id: number;
  name: string;
}

interface IGenresState {
  genres: IGenre[];
  loading: boolean;
  error: string | null;
}

const initialState: IGenresState = {
  genres: [],
  loading: false,
  error: null,
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch genres";
      });
  },
});

export default genresSlice.reducer;
