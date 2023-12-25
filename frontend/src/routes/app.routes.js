import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeDoctor from '../screens/Doctor/HomeDoctor'
import HomeGuardian from '../screens/Guardian/HomeGuardian'
import HomeCaregiver from '../screens/Caregiver/HomeCaregiver'

export default function AppRoutes({ role_id }) {

    const Stack = createNativeStackNavigator()

    if (role_id === 1) {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeDoctor'
                    component={HomeDoctor}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        )
    } else if (role_id === 2) {
        return (
            <Stack.Navigator>

                <Stack.Screen
                    name='HomeGuardian'
                    component={HomeGuardian}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator>

                <Stack.Screen
                    name='HomeCaregiver'
                    component={HomeCaregiver}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        )
    }
}