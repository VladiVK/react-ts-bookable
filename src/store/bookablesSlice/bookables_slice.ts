import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  isLoading: boolean;
  error: null | string;
};
const initialState: BookablesState = {
  isLoading: false,
  error: null,
  groups: [],
  selectedGroup: '',
  bookableIndex: 0,
  bookables: [] as BookableUI[],
  bookable: {} as BookableUI,
  bookablesInGroup: [] as BookableUI[],
  hasDetails: false,
};

export const fetchBookables = createAsyncThunk(
  'bookables/fetchBookables',
  async function(_, thunkAPI) {
    try {
      const response = await fetch('http://localhost:3001/bookables');
      if (!response.ok) {
        throw new Error('Server error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookablesSlice = createSlice({
  name: 'bookables',
  initialState,
  reducers: {
    changeGroup: (state, { payload }: PayloadAction<string>) => {
      state.selectedGroup = payload;
      state.bookablesInGroup = state.bookables.filter(
        (b) => b.group === state.selectedGroup
      );
      state.bookableIndex = 0;
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    updateBookablesInGroup: (state) => {
      state.bookablesInGroup = state.bookables.filter(
        (b) => b.group === state.selectedGroup
      );
    },
    setNextBookableIndex: (state) => {
      state.bookableIndex =
        (state.bookableIndex + 1) % state.bookablesInGroup.length;
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },

    setBookableIndex: (state, { payload }: PayloadAction<number>) => {
      state.bookableIndex = payload;
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    resetBookableIndex: (state) => {
      state.bookableIndex = 0;
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
  extraReducers: {
    [fetchBookables.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchBookables.fulfilled.type]: (
      state,
      action: PayloadAction<BookableUI[]>
    ) => {
      state.isLoading = false;
      state.bookables = action.payload;
      state.groups = [...new Set(state.bookables.map((b) => b.group))];
      state.selectedGroup = state.groups[0];
      state.bookablesInGroup = state.bookables.filter(
        (b) => b.group === state.selectedGroup
      );
      state.bookable = state.bookablesInGroup[state.bookableIndex];
    },
    [fetchBookables.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
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
