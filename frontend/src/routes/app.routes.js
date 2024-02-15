import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { neutral, primary } from '../constants/colors'

// Telas do médico
// ================
import HomeDoctor from '../screens/Doctor/HomeDoctor'
import PrescriptionPatientDoctor from '../screens/Doctor/PrescriptionPatientDoctor'
import ListPrescriptionsPatientsDoctor from '../screens/Doctor/ListPrescriptionsPatientsDoctor'
import ListRecordsPatientsDoctor from '../screens/Doctor/ListRecordsPatientsDoctor'
import RecordPatientDoctor from '../screens/Doctor/RecordPatientDoctor'

// Telas do guardião
// ==================
import HomeGuardian from '../screens/Guardian/HomeGuardian'
import ListMyPatientsGuardian from '../screens/Guardian/ListMyPatientsGuardian'
import NewPatientGuardian from '../screens/Guardian/NewPatientGuardian'
import ConditionalCardsGuardian from '../screens/Guardian/ConditionalCardsGuardian'
import ListMyPrescriptionsPatientGuardian from '../screens/Guardian/ListMyPrescriptionsPatientGuardian'
import ListMyRecordsPatientGuardian from '../screens/Guardian/ListMyRecordsPatientGuardian'
import UpdatePatientGuardian from '../screens/Guardian/UpdatePatientGuardian'
import ShowRecordPatientGuardian from '../screens/Guardian/ShowRecordPatientGuardian'
import ShowPrescriptionPatientGuardian from '../screens/Guardian/ShowPrescriptionPatientGuardian'
import DailyRoutinePatientGuardian from '../screens/Guardian/DailyRoutinePatientGuardian'
import EventsPatientGuardian from '../screens/Guardian/EventsPatientCaregiver'
import NewEventPatientGuardian from '../screens/Guardian/NewEventPatientGuardian'
import ListMyDailyRoutinePatientGuardian from '../screens/Guardian/ListMyDailyRoutinePatientGuardian'
import ListMyEventsPatientGuardian from '../screens/Guardian/ListMyEventsPatientGuardian'
import NewDailyRoutineGuardian from '../screens/Guardian/NewDailyRoutineGuardian'
import ListMyDoctorsPrescriptionGuardian from '../screens/Guardian/ListMyDoctorsPrescriptionGuardian'
import ListMyDoctorsRecordGuardian from '../screens/Guardian/ListMyDoctorsRecordGuardian'


// Telas do cuidador
// ==================
import HomeCaregiver from '../screens/Caregiver/HomeCaregiver'
import RecordCaregiver from '../screens/Caregiver/RecordCaregiver'
import ConditionalCardsCaregiver from '../screens/Caregiver/ConditionalCardsCaregiver'
import ListMyRecordsPatientCaregiver from '../screens/Caregiver/ListMyRecordsPatientCaregiver'
import ListMyPrescriptionsPatientCaregiver from '../screens/Caregiver/ListMyPrescriptionsPatientCaregiver'
import ShowRecordPatientCaregiver from '../screens/Caregiver/ShowRecordPatientCaregiver'
import ShowPrescriptionPatientCaregiver from '../screens/Caregiver/ShowPrescriptionPatientCaregiver'

import NewEventPatientCaregiver from '../screens/Caregiver/NewEventPatientCaregiver'
import EventsPatientCaregiver from '../screens/Caregiver/EventsPatientCaregiver'
import ListMyEventsPatientCaregiver from '../screens/Caregiver/ListMyEventsPatientCaregiver'
import ListMyDailyRoutinePatientCaregiver from '../screens/Caregiver/ListMyDailyRoutinePatientCaregiver'
import DailyRoutinePatientCaregiver from '../screens/Caregiver/DailyRoutinePatientCaregiver'
import ListMyDoctorsPrescriptionCaregiver from '../screens/Caregiver/ListMyDoctorsPrescriptionCaregiver'
import ListMyDoctorsRecordCaregiver from '../screens/Caregiver/ListMyDoctorsRecordCaregiver'

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
                    name='ListPrescriptionsPatientsDoctor'
                    component={ListPrescriptionsPatientsDoctor}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ListRecordsPatientsDoctor'
                    component={ListRecordsPatientsDoctor}

                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='PrescriptionPatientDoctor'
                    component={PrescriptionPatientDoctor}

                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='RecordPatientDoctor'
                    component={RecordPatientDoctor}
                    options={{
                        headerShown: false
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
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='NewPatientGuardian'
                    component={NewPatientGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='NewDailyRoutineGuardian'
                    component={NewDailyRoutineGuardian}
                    options={{ headerShown: false }}

                />

                <Stack.Screen
                    name='ConditionalCardsGuardian'
                    component={ConditionalCardsGuardian}
                    options={{ headerShown: false }}

                />

                <Stack.Screen
                    name='ListMyPrescriptionsPatientGuardian'
                    component={ListMyPrescriptionsPatientGuardian}
                    options={{
                        headerShown: false
                    }}

                />

                <Stack.Screen
                    name='ListMyDoctorsRecordGuardian'
                    component={ListMyDoctorsRecordGuardian}
                    options={{
                        headerShown: false
                    }}

                />

                <Stack.Screen
                    name='ListMyEventsPatientGuardian'
                    component={ListMyEventsPatientGuardian}
                    options={{ headerShown: false }}

                />

                <Stack.Screen
                    name='ListMyRecordsPatientGuardian'
                    component={ListMyRecordsPatientGuardian}
                    options={{
                        headerShown: false
                    }}

                />

                <Stack.Screen
                    name='ListMyDailyRoutinePatientGuardian'
                    component={ListMyDailyRoutinePatientGuardian}
                    options={{ headerShown: false }}

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

                <Stack.Screen
                    name='ListMyDoctorsPrescriptionGuardian'
                    component={ListMyDoctorsPrescriptionGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='ShowRecordPatientGuardian'
                    component={ShowRecordPatientGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='ShowPrescriptionPatientGuardian'
                    component={ShowPrescriptionPatientGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='DailyRoutinePatientGuardian'
                    component={DailyRoutinePatientGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='EventsPatientGuardian'
                    component={EventsPatientGuardian}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='NewEventPatientGuardian'
                    component={NewEventPatientGuardian}
                    options={{ headerShown: false }}

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
                    name='ConditionalCardsCaregiver'
                    component={ConditionalCardsCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='RecordCaregiver'
                    component={RecordCaregiver}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='ListMyRecordsPatientCaregiver'
                    component={ListMyRecordsPatientCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='ListMyPrescriptionsPatientCaregiver'
                    component={ListMyPrescriptionsPatientCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='ListMyDoctorsRecordCaregiver'
                    component={ListMyDoctorsRecordCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='ListMyEventsPatientCaregiver'
                    component={ListMyEventsPatientCaregiver}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ListMyDailyRoutinePatientCaregiver'
                    component={ListMyDailyRoutinePatientCaregiver}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ListMyDoctorsPrescriptionCaregiver'
                    component={ListMyDoctorsPrescriptionCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='DailyRoutinePatientCaregiver'
                    component={DailyRoutinePatientCaregiver}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='EventsPatientCaregiver'
                    component={EventsPatientCaregiver}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='NewEventPatientCaregiver'
                    component={NewEventPatientCaregiver}
                    options={{
                        title: 'Novo evento',
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='ShowRecordPatientCaregiver'
                    component={ShowRecordPatientCaregiver}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='ShowPrescriptionPatientCaregiver'
                    component={ShowPrescriptionPatientCaregiver}
                    options={{
                        headerShown: false
                    }}
                />


            </Stack.Navigator>
        )
    }
}