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
import EventsPatientGuardian from '../screens/Guardian/EventsPatientGuardian'
import NewEventPatientGuardian from '../screens/Guardian/NewEventPatientGuardian'
import ListMyDailyRoutinePatientGuardian from '../screens/Guardian/ListMyDailyRoutinePatientGuardian'
import ListMyEventsPatientGuardian from '../screens/Guardian/ListMyEventsPatientGuardian'
import NewDailyRoutineGuardian from '../screens/Guardian/NewDailyRoutineGuardian'


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
                    options={{
                        title: 'Receitas',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />
                <Stack.Screen
                    name='ListRecordsPatientsDoctor'
                    component={ListRecordsPatientsDoctor}
                    options={{
                        title: 'Prontuários',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />
                    <Stack.Screen
                        name='PrescriptionPatientDoctor'
                        component={PrescriptionPatientDoctor}
                        options={{
                            title: 'Receita do paciente',
                            headerShadowVisible: false,
                            headerTintColor: neutral,
                            headerStyle: {
                                backgroundColor: primary
                            },
                        }}
                    />
                    <Stack.Screen
                        name='RecordPatientDoctor'
                        component={RecordPatientDoctor}
                        options={{
                            title: 'Prontuário do paciente',
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
                    name='NewDailyRoutineGuardian'
                    component={NewDailyRoutineGuardian}
                    options={{
                        title: 'Nova Rotina',
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
                    name='ListMyEventsPatientGuardian'
                    component={ListMyEventsPatientGuardian}
                    options={{
                        title: 'Agendas e Consultas',
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
                    name='ListMyDailyRoutinePatientGuardian'
                    component={ListMyDailyRoutinePatientGuardian}
                    options={{
                        title: 'Rotina diária',
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
                <Stack.Screen
                    name='ShowRecordPatientGuardian'
                    component={ShowRecordPatientGuardian}
                    options={{
                        title: 'Prontuário',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />
                <Stack.Screen
                    name='ShowPrescriptionPatientGuardian'
                    component={ShowPrescriptionPatientGuardian}
                    options={{
                        title: 'Receita',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />
                <Stack.Screen
                    name='DailyRoutinePatientGuardian'
                    component={DailyRoutinePatientGuardian}
                    options={{
                        title: 'Rotina de Hoje',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />
                <Stack.Screen
                    name='EventsPatientGuardian'
                    component={EventsPatientGuardian}
                    options={{
                        title: 'Agenda',
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}

                />
                <Stack.Screen
                    name='NewEventPatientGuardian'
                    component={NewEventPatientGuardian}
                    options={{
                        title: 'Novo evento',
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
                    name='ConditionalCardsCaregiver'
                    component={ConditionalCardsCaregiver}
                    options={{
                        title: 'Prontuários e Receitas',
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

                <Stack.Screen
                    name='ListMyRecordsPatientCaregiver'
                    component={ListMyRecordsPatientCaregiver}
                    options={{
                        title: 'Prontuários',
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='ListMyPrescriptionsPatientCaregiver'
                    component={ListMyPrescriptionsPatientCaregiver}
                    options={{
                        title: 'Receitas',
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='ListMyEventsPatientCaregiver'
                    component={ListMyEventsPatientCaregiver}
                    options={{
                        title: 'Agendas e Consultas',
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />
                <Stack.Screen
                    name='ListMyDailyRoutinePatientCaregiver'
                    component={ListMyDailyRoutinePatientCaregiver}
                    options={{
                        title: 'Meus pacientes',
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='DailyRoutinePatientCaregiver'
                    component={DailyRoutinePatientCaregiver}
                    options={{
                        title: null,
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
                />

                <Stack.Screen
                    name='EventsPatientCaregiver'
                    component={EventsPatientCaregiver}
                    options={{
                        title: null,
                        headerBackTitleVisible: false,
                        headerShadowVisible: false,
                        headerTintColor: neutral,
                        headerStyle: {
                            backgroundColor: primary
                        },
                    }}
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