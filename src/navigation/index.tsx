import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Payment from '../screens/Payment';
import SingleDonation from '../screens/SingleDonation';

const Stack = createStackNavigator();

const MainNavagation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="SingleDonation" component={SingleDonation} />
        </Stack.Navigator>
    )
}

export default MainNavagation;