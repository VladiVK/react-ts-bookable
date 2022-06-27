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
};
const initialState: BookablesState = {
  groups: [...new Set(bookables.map((b) => b.group))],
  selectedGroup: 'Kit',
  bookableIndex: 0,
  bookables: bookables,
  bookablesInGroup: [],
};

export const bookablesSlice = createSlice({
  name: 'bookables',
  initialState,
  reducers: {
    changeGroup: (state, { payload }: PayloadAction<string>) => {
      state.selectedGroup = payload;
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
    },
    resetBookableIndex: (state) => {
      state.bookableIndex = 0;
    },
  },
});

export const {
  changeGroup,
  updateBookablesInGroup,
  setNextBookableIndex,
  setBookableIndex,
  resetBookableIndex,
} = bookablesSlice.actions;
export default bookablesSlice.reducer;
