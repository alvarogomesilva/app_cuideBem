import { NavigationContainer } from '@react-navigation/native'
import { useCallback } from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import AuthProvider from './src/contexts/AuthContext';
import { preventAutoHideAsync } from 'expo-splash-screen'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await console.log("fonte Carregada");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AlertNotificationRoot>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    <StatusBar barStyle='light-content'/>
    </AlertNotificationRoot>

  );
}

