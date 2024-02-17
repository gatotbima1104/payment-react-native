import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const MainNavagation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}

export default MainNavagation;