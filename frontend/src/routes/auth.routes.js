import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginDoctor from '../screens/Doctor/LoginDoctor'
import Identification from '../screens/Identification'
import LoginCaregiver from '../screens/Caregiver/LoginCaregiver'
import LoginGuardian from '../screens/Guardian/LoginGuardian'
import { neutral, primary, white } from '../constants/colors'
// import Splash from '../screens/Splash'

export default function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (

        <Stack.Navigator>

            {/* <Stack.Screen
                name='Splash'
                component={Splash}
                options={{
                    headerShown: false
                }}
            /> */}

            <Stack.Screen
                name='Identification'
                component={Identification}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='LoginDoctor'
                component={LoginDoctor}
                options={{
                    title: null,
                    headerShadowVisible: false,
                    headerTintColor: neutral,
                    headerStyle: {
                        backgroundColor: white
                    },
                }}
            />

            <Stack.Screen
                name='LoginCaregiver'
                component={LoginCaregiver}
                options={{
                    title: null,
                    headerShadowVisible: false,
                    headerTintColor: neutral,
                    headerStyle: {
                        backgroundColor: white
                    },
                }}
            />

            <Stack.Screen
                name='LoginGuardian'
                component={LoginGuardian}
                options={{
                    title: null,
                    headerShadowVisible: false,
                    headerTintColor: neutral,
                    headerStyle: {
                        backgroundColor: white
                    },
                }}
            />

            {/* <Stack.Screen name='Splash' component={Splash}  /> */}
        </Stack.Navigator>
    )
}