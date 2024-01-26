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
import ListMyPatientsGuardian from '../screens/Guardian/ListMyPatientsGuardian'
import NewPatientGuardian from '../screens/Guardian/NewPatientGuardian'
import ConditionalCardsGuardian from '../screens/Guardian/ConditionalCardsGuardian'
import ListMyPrescriptionsPatientGuardian from '../screens/Guardian/ListMyPrescriptionsPatientGuardian'
import ListMyRecordsPatientGuardian from '../screens/Guardian/ListMyRecordsPatientGuardian'
import UpdatePatientGuardian from '../screens/Guardian/UpdatePatientGuardian'

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
                    name='ListMyPatientsGuardian'
                    component={ListMyPatientsGuardian}
                    options={{
                        title: 'Meus pacientes',
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
                    name='ConditionalCardsGuardian'
                    component={ConditionalCardsGuardian}
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
                    name='ListMyPrescriptionsPatientGuardian'
                    component={ListMyPrescriptionsPatientGuardian}
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
                    name='ListMyRecordsPatientGuardian'
                    component={ListMyRecordsPatientGuardian}
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
                    name='UpdatePatientGuardian'
                    component={UpdatePatientGuardian}
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