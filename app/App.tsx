import React, {useEffect, useState} from 'react';
import {AppNavigator} from '../app/navigators';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';


export default function App() {
  const [item, setItem] = useState('');

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 100);
  //   requestUserPermission();
  //   // notificationListner();
  //   crashlytics().log('app mounted');
  // }, []);

  // const theme = useTheme();
  return (
    // Context is wired into the local state of our main component, so that its values could be propagated throughout the entire application
    // <AppProvider>
    //   <PaperProvider theme={theme.NavigationTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator />
        </SafeAreaProvider>
    //   </PaperProvider>
    // </AppProvider>
  );
}
