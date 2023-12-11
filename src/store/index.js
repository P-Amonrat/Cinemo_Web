import { configureStore } from '@reduxjs/toolkit'; 
import movieReducer from '../reducers/movieSlice';
import loginReducer from '../reducers/loginSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
    user: loginReducer
  },
});
