import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';
import tarifSlice from './slices/tarifSlice';

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    tarif: tarifSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
