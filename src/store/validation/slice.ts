import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Action = PayloadAction<number>;

interface InitialState {
  indice: number;
}

const initialState = {
  indice: 0,
} as InitialState;

const validationSuccess = (state: InitialState, action: Action) => {
  state.indice = action.payload;
};

export const validationSlice = createSlice({
  name: 'validation',
  initialState: initialState,
  reducers: { validationSuccess },
});
