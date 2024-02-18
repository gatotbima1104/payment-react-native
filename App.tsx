import { NavigationContainer } from '@react-navigation/native';
import MainNavagation from './src/navigation';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainNavagation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


