import {createAction} from '@reduxjs/toolkit';

export const initializationActions = {
    INITIALIZATION_START : 'INITIALIZATION_START',
}

export const initializationStart = createAction(initializationActions.INITIALIZATION_START);