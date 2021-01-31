import { createAction } from '@reduxjs/toolkit';

type Action = {
  code: string;
  indice: number;
};

export const validationActions = {
  VALIDATION_START: 'VALIDATION_START',
};

export const validationStart = createAction<Action>(
  validationActions.VALIDATION_START
);
