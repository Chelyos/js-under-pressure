import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Action = PayloadAction<string[]>;

interface InitialState {
  message: string[] | null;
  error: string[] | null;
}

const initialState = {
  message: null,
  error: null,
} as InitialState;

const consoleMessage = (state: InitialState, action: Action) => {
  state.message = action.payload;
  state.error = null;
};

const consoleError = (state: InitialState, action: Action) => {
  state.error = action.payload;
  state.message = null;
};

const clearConsole = (state: InitialState) => {
  state.error = null;
  state.message = null;
};

export const consoleSlice = createSlice({
  name: 'console',
  initialState: initialState,
  reducers: { consoleMessage, consoleError, clearConsole },
});
