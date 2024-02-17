import { NavigationContainer } from '@react-navigation/native';
import MainNavagation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavagation />
      </NavigationContainer>
    </Provider>
  );
}


