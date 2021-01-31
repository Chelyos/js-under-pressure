import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ActionMessage = PayloadAction<string>;
type ActionTimer = PayloadAction<number>;
type ActionIsActive = PayloadAction<boolean>;

interface InitialState {
    message: string | null,
    isActive: boolean,
    timer: number,
}

const initialState = {
    message: 'let s goooooooo',
    isActive: false,
    timer: 0,
} as InitialState;

const enonceMessage = (state: InitialState, action: ActionMessage) => {
    state.message = action.payload;
}

const enonceTimer = (state : InitialState, action: ActionTimer ) => {
    state.timer  = action.payload;
}

const enonceIsActive = (state: InitialState, action: ActionIsActive) => {
    state.isActive = action.payload;
}

export const enonceSlice = createSlice({
    name: 'enonce',
    initialState: initialState,
    reducers: {enonceMessage, enonceTimer, enonceIsActive}
});