import { createAction } from '@reduxjs/toolkit';

export const resetAction = {
  RESET: 'RESET',
};

export const resetStart = createAction(resetAction.RESET);
