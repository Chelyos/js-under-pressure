import React from 'react';
import { MainLayout } from '../scenes';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';
import { Provider } from 'react-redux';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
