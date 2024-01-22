import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { neutral, primary } from '../constants/colors'

// Telas do médico
// ================
import HomeDoctor from '../screens/Doctor/HomeDoctor'
import ConditionalCardsDoctor from '../screens/Doctor/ConditionalCardsDoctor'
import ConditionalPrescriptionsDoctor from '../screens/Doctor/ConditionalPrescriptionsDoctor'

// Telas do guardião
// ==================
import HomeGuardian from '../screens/Guardian/HomeGuardian'
import ReportsRecipesGuardian from '../screens/Guardian/ReportsRecipesGuardian'
import ListPatientsGuardian from '../screens/Guardian/ListPatientsGuardian'
import NewPatientGuardian from '../screens/Guardian/NewPatientGuardian'
import ShowPatientGuardian from '../screens/Guardian/ShowPatientGuardian'

// Telas do cuidador
// ==================
import HomeCaregiver from '../screens/Caregiver/HomeCaregiver'
import RecordCaregiver from '../screens/Caregiver/RecordCaregiver'
import ReportsRecipesCaregiver from '../screens/Caregiver/ReportsRecipesCaregiver'

export default function AppRoutes({ role_id }) {

    const Stack = createNativeStackNavigator()

    if (role_id === 1) {
        return (
            <Stack.Navigator initialRouteName='HomeDoctor'>
                <Stack.Screen
                    name='HomeDoctor'
                    component={HomeDoctor}
                    options={{
                        headerShown: false
                    }}
                />
             
                <Stack.Screen
                    name='ConditionalCardsDoctor'
                    component={ConditionalCardsDoctor}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />
                <Stack.Screen
                    name='ConditionalPrescriptionsDoctor'
                    component={ConditionalPrescriptionsDoctor}
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
    } else if (role_id === 2) {
        return (
            <Stack.Navigator initialRouteName='HomeGuardian'>

                <Stack.Screen
                    name='HomeGuardian'
                    component={HomeGuardian}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='ReportsRecipesGuardian'
                    component={ReportsRecipesGuardian}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />

                <Stack.Screen
                    name='ListPatientsGuardian'
                    component={ListPatientsGuardian}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />

                <Stack.Screen
                    name='NewPatientGuardian'
                    component={NewPatientGuardian}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />

                <Stack.Screen
                    name='ShowPatientGuardian'
                    component={ShowPatientGuardian}
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
            <Stack.Navigator initialRouteName='HomeCaregiver'>

                <Stack.Screen
                    name='HomeCaregiver'
                    component={HomeCaregiver}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='ReportsRecipesCaregiver'
                    component={ReportsRecipesCaregiver}
                    options={{
                        title: null,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='RecordCaregiver'
                    component={RecordCaregiver}
                    options={{
                        headerShown: false
                    }}
                />


            </Stack.Navigator>
        )
    }
}