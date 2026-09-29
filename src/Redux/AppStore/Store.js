import { configureStore } from "@reduxjs/toolkit";
import MoviesDataReducer from '../Slicers/MoviesSlicer'
export const store = configureStore({
  reducer: {
    MoviesReducer: MoviesDataReducer
  },
});
