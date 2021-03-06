import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GistData } from 'src/types/GistData';


export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  organisations: GistData[];
  error?: string;
  date?: string;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
  organisations: [],
  date: "",
  error: "",
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
    },
    // getOrganisations(state, action: PayloadAction<string>) {
    //   state.organisations = action.payload;
    // }
  },
});

export const { setDate, setGists, setGistsError } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;
