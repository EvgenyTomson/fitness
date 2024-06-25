import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TimerState {
  countDown: number;
  warningLimit: number;
  isFinished: boolean;
  showWarning: boolean;
}

const initialState: TimerState = {
  countDown: 120,
  warningLimit: 30,
  isFinished: false,
  showWarning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    tick: (state) => {
      state.countDown -= 1;
      if (state.countDown <= 0) {
        state.countDown = 0;
        state.isFinished = true;
      }
      state.showWarning = state.countDown <= state.warningLimit;
    },
    reset: (state, action: PayloadAction<{ duration: number; limit: number }>) => {
      state.countDown = action.payload.duration;
      state.warningLimit = action.payload.limit;
      state.isFinished = false;
      state.showWarning = false;
    },
  },
  selectors: {
    selectTimer: (state) => state,
    selectCountDown: (state) => state.countDown,
    selectIsFinished: (state) => state.isFinished,
    selectShowWarning: (state) => state.showWarning,
  },
});

export const { selectTimer, selectCountDown, selectIsFinished, selectShowWarning } =
  timerSlice.selectors;

export const { tick, reset } = timerSlice.actions;

export default timerSlice;
