import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieListApi } from 'src/service';

export const fetchMovieList = createAsyncThunk('data/fetchMovieList', async () => {
  const response = await getMovieListApi();
  const movieList = response.data.movies
  return movieList;
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
    item: null,
    favoritList: [],
    newDateFormat: null
  },
  reducers: {
    getDateFormat: (state, action) => {
      state.newDateFormat = action.payload
    },
    getDetailById: (state, action) => {
      state.item = action.payload
    },
    getFavoriteList: (state, action) => {
      const newItem = action.payload;

      const existingItemIndex = state.favoritList.findIndex(item => item.id === newItem.id);

      if (existingItemIndex === -1) {
        state.favoritList.push(newItem);
      } else {
        state.favoritList.splice(existingItemIndex, 1);
      }
    

    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovieList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload.map(item => {
          const dateObject = new Date(item.release_date);
          const formattedDate = dateObject.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });
        
          return { ...item, release_date: formattedDate };
        });
      })
      .addCase(fetchMovieList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { getDetailById, getFavoriteList, getDateFormat } = movieSlice.actions;
export default movieSlice.reducer;
