  // import readux toolkit functions
import { configureStore } from '@reduxjs/toolkit';

  // import slices
import AppReduceSlice from './AppReduceSlice';

  // configure our store
const store = configureStore({
    // declare out reducers
  reducer:{
      // pass our only slice
    AppUser: AppReduceSlice,
  }
});
  // export store to allow the app use this store every where
export default store;
