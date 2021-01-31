import { consoleSlice } from './console/slice';
import { enonceSlice } from './enonce/slice';
import { validationSlice } from './validation/slice';
import { editorSlice } from './editor/slice';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';

// const rootReducer = combineReducers({
//     editor: editorSlice.reducer,
//     enonce: enonceSlice.reducer,
//     console: consoleSlice.reducer,
//     validation: validationSlice.reducer
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;

const appReducer = combineReducers({
  editor: editorSlice.reducer,
  enonce: enonceSlice.reducer,
  console: consoleSlice.reducer,
  validation: validationSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
    storage.removeItem('persist:root');
    state = undefined;
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
