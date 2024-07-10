import {ActionCreator, createSlice, PayloadAction} from '@reduxjs/toolkit';

const correctPassword = '1127';

interface PasswordState {
  value: string;
}

const initialState: PasswordState = {
  value: '',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.value <= 4) {
        state.value += action.payload;
      }
    },
    removeNumber: (state, action: PayloadAction<string>) => {
      if (state.value <= 4) {
        state.value += state.value.slice(0, -1);
      }
    }
  }
});

export const passwordReducer = passwordSlice.reducer;

export const {
  addNumber,
  removeNumber
} = passwordSlice.actions;