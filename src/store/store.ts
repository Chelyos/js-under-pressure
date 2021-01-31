import { persistStore, persistReducer } from 'redux-persist';
import { middlewares, sagaMiddleware } from './middleware';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';
import { rootSaga } from './sagas';

export const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['editor', 'enonce', 'console', 'validation'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
