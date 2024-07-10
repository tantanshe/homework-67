import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const correctPassword = '1127';

interface PasswordState {
  value: string;
  passwordColor: string;
  passwordMessage: string;
  frozen: boolean;
}

const initialState: PasswordState = {
  value: '',
  passwordColor: 'grey',
  passwordMessage: '',
  frozen: false,
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4 && !state.frozen) {
        state.value += action.payload;
      }
    },
    removeNumber: (state) => {
      if (!state.frozen) {
        state.value = state.value.slice(0, -1);
      }
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
      state.frozen = true;
    },
    resetPassword: (state) => {
      state.value = '';
      state.passwordColor = 'grey';
      state.passwordMessage = '';
      state.frozen = false;
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