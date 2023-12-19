import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeDoctor from '../screens/Doctor/HomeDoctor'
import HomeGuardian from '../screens/Guardian/HomeGuardian'
import HomeCaregiver from '../screens/Caregiver/HomeCaregiver'

export default function AppRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>

            <Stack.Screen 
                name='HomeDoctor' 
                component={HomeDoctor}
                options={{
                    headerShown: false
                }}
                />

                
                
            <Stack.Screen name='HomeGuardian' component={HomeGuardian} />
        </Stack.Navigator>
    )
}