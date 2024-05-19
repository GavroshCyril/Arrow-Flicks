import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "../features/genres/genresSlice";
import moviesReducer from "../features/movie/movieSlice";
// import movieReducer from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    movies: moviesReducer,
    // movie: movieReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
