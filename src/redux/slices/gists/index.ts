import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GistData } from 'src/types/GistData';


export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  error?: string;
  date?: string;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
  date: "",
};

const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    setGists(state, action: PayloadAction<GistData[]>) {
      state.isLoading = false;
      state.gists = action.payload;
    },

    setGistsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    }
  },
});

export const { setDate, setGists, setGistsError } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;
export const setNewDate = gistsSlice.actions.setDate("дата");
