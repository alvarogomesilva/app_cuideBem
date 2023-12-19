import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginDoctor from '../screens/Doctor/LoginDoctor'
// import Splash from '../screens/Splash'
import Identification from '../screens/Identification'

export default function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (

        <Stack.Navigator>
            <Stack.Screen name='LoginDoctor' component={LoginDoctor} />
            {/* <Stack.Screen name='Splash' component={Splash}  /> */}
            <Stack.Screen name='Identification' component={Identification} />
        </Stack.Navigator>
    )
}