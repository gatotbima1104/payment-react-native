import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Payment from '../screens/Payment';
import SingleDonation from '../screens/SingleDonation';
import Register from '../screens/Auth/Register';
import { Routes } from './Route';
import Login from '../screens/Auth/Login';

const Stack = createStackNavigator();

const MainNavagation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Routes.Login}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Payment} component={Payment} />
            <Stack.Screen name={Routes.SingleDonation} component={SingleDonation} />
            <Stack.Screen name={Routes.Register} component={Register} />
            <Stack.Screen name={Routes.Login} component={Login} />
        </Stack.Navigator>
    )
}

export default MainNavagation;