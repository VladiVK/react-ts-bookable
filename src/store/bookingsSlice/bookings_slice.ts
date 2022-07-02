import { createSlice } from '@reduxjs/toolkit';
import { getWeek } from '../../utils/date-handler';

type WeekPeakerState = {
  week: {
    date: Date;
    start: Date;
    end: Date;
  };
};
const initialState: WeekPeakerState = {
  week: {
    date: {} as Date,
    start: {} as Date,
    end: {} as Date,
  },
};
export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    today: (state) => {
      const { date, start, end } = getWeek(new Date());
      state.week.date = date;
      state.week.start = start;
      state.week.end = end;
    },
    nextWeek: (state) => {
      const { date, start, end } = getWeek(state.week.date, 7);
      state.week.date = date;
      state.week.start = start;
      state.week.end = end;
    },
    prevWeek: (state) => {
      const { date, start, end } = getWeek(state.week.date, -7);
      state.week.date = date;
      state.week.start = start;
      state.week.end = end;
    },
    setDate: (state, { payload }) => {
      const { date, start, end } = getWeek(new Date(payload));
      state.week.date = date;
      state.week.start = start;
      state.week.end = end;
    },
  },
});

export const { nextWeek, prevWeek, setDate, today } = bookingsSlice.actions;
export default bookingsSlice.reducer;
