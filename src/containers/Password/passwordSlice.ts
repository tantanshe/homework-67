import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const correctPassword = '1127';

interface PasswordState {
  value: string;
  passwordColor: string;
  passwordMessage: string;
}

const initialState: PasswordState = {
  value: '',
  passwordColor: 'grey',
  passwordMessage: '',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    removeNumber: (state) => {
      state.value = state.value.slice(0, -1);
    },
    checkPassword: (state) => {
      if (state.value === correctPassword) {
        state.value = '';
        state.passwordColor = 'green';
        state.passwordMessage = 'Access Granted';
      } else {
        state.value = '';
        state.passwordColor = 'red';
        state.passwordMessage = 'Access Denied';
      }
    },
    resetPassword: (state) => {
      state.value = '';
      state.passwordColor = 'grey';
      state.passwordMessage = '';
    }
  }
});

export const passwordReducer = passwordSlice.reducer;

export const {
  addNumber,
  removeNumber,
  checkPassword,
  resetPassword
} = passwordSlice.actions;