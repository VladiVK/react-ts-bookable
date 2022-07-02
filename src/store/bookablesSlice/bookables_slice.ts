import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bookables } from '../../utils/static.json';

type BookableUI = {
  id: number;
  group: string;
  title: string;
  notes: string;
  sessions: number[];
  days: number[];
};

type BookablesState = {
  groups: string[];
  selectedGroup: string;
  bookableIndex: number;
  bookables: BookableUI[];
  bookablesInGroup: BookableUI[];
  bookable: BookableUI;
  hasDetails: boolean;
};
const initialState: BookablesState = {
  groups: [...new Set(bookables.map((b) => b.group))],
  selectedGroup: 'Kit',
  bookableIndex: 0,
  bookables: bookables,
  bookable: bookables[0],
  bookablesInGroup: bookables.filter((b) => b.group === 'Kit'),
  // bookablesInGroup: [],
  // bookable: {} as BookableUI,
  hasDetails: false,
};

export const bookablesSlice = createSlice({
  name: 'bookables',
  initialState,
  reducers: {
    changeGroup: (state, { payload }: PayloadAction<string>) => {
      state.selectedGroup = payload;
      // new
      state.bookablesInGroup = state.bookables.filter(
        (b) => b.group === state.selectedGroup
      );
      state.bookableIndex = 0;
      // new
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    updateBookablesInGroup: (state) => {
      state.bookablesInGroup = bookables.filter(
        (b) => b.group === state.selectedGroup
      );
    },
    setNextBookableIndex: (state) => {
      state.bookableIndex =
        (state.bookableIndex + 1) % state.bookablesInGroup.length;
    },

    setBookableIndex: (state, { payload }: PayloadAction<number>) => {
      state.bookableIndex = payload;
      // new
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    resetBookableIndex: (state) => {
      state.bookableIndex = 0;
      // new
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    setBookable: (state) => {
      state.bookable = state.bookablesInGroup[state.bookableIndex];

      state.bookable.days = state.bookable.days.sort((a, b) => a - b);
    },
    changeDetailsStatus: (state) => {
      state.hasDetails = !state.hasDetails;
    },
  },
});

export const {
  changeGroup,
  updateBookablesInGroup,
  setNextBookableIndex,
  setBookableIndex,
  resetBookableIndex,
  setBookable,
  changeDetailsStatus,
} = bookablesSlice.actions;
export default bookablesSlice.reducer;
