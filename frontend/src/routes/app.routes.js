import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeDoctor from '../screens/Doctor/HomeDoctor'
import HomeGuardian from '../screens/Guardian/HomeGuardian'
import HomeCaregiver from '../screens/Caregiver/HomeCaregiver'
import ReportsRecipes from '../screens/Guardian/ReportsRecipes'
import ReportsRecipesC from '../screens/Caregiver/ReportsRecipesC'
import { neutral, primary, white } from '../constants/colors'

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
            <Stack.Navigator >

                <Stack.Screen
                    name='HomeGuardian'
                    component={HomeGuardian}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='ReportsRecipes'
                    component={ReportsRecipes}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
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

                <Stack.Screen
                    name='ReportsRecipesC'
                    component={ReportsRecipesC}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

            </Stack.Navigator>
        )
    }
}