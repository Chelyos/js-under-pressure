import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Action = PayloadAction<string>;

interface InitialState {
  code: string;
}

const initialState = {
  code: '',
} as InitialState;

const editorCode = (state: InitialState, action: Action) => {
  state.code = action.payload;
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState: initialState,
  reducers: { editorCode },
});
