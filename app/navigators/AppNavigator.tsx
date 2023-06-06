import React, {useState} from 'react';
import {Image, Platform, StatusBar, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, useBackButtonHandler} from './NavigationUtils';
// import useTheme from '@/hooks/useTheme';
import {RoutesConstant} from '../../app/navigators/index';
// import {ThemeNavigationTheme} from '@/themes/theme.type';
// import {translate} from '@/i18n';
// import ModalComponent from '@/components/modal/ModalComponent';
import {NavigatorParamList} from '../../app/navigators/AppNavigator.types';
import SignIn from '../screens/auth/signInScreen';
// import PickerComponent from '@/components/picker/PickerComponent';
// import {useAuthContext} from '@/screens/auth/AuthContext';
// import assets from '@/assets';
// import NotificationController from './NotificationControllerAndroid.js';
// import InitialScreen from '@/screens/initialway/InitialScreen';
const Stack = createNativeStackNavigator<NavigatorParamList>();


interface AppStackProps {
  theme: ThemeNavigationTheme;
}
const AppStack = ({theme}: AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown:false
        // headerBackTitle: '',
        // headerStyle: {
        //   backgroundColor: theme.colors.primary,
        // },
        // headerTintColor: theme.colors.background,
        // headerTitleAlign: 'center',
        // headerTitleStyle: {
        //   ...theme.fonts.light,
        //   fontSize: 24,
        //   lineHeight: 35,
        // },
       
      })}
      initialRouteName={RoutesConstant.LOGIN}>
      <Stack.Group>
     
        <Stack.Screen
          name={RoutesConstant.LOGIN}
          component={SignIn}
        />
    
      </Stack.Group>
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const [refresh, setRefresh] = useState(false);
  useBackButtonHandler(canExit);
  // console.log(AuthContextValue?.isTOSAccepted, 'accepteddd');

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        setRefresh(prev => !prev);
      }}
      // theme={NavigationTheme}
      {...props}>
      {/* {Platform.OS === 'android' ? (
        <NotificationController navigationRef={navigationRef} />
      ) : null} */}
      {/* <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#ec6224'}
      /> */}
              <AppStack  />
      {/* {AuthContextValue?.isTOSAccepted ? (
        <AppStack theme={NavigationTheme} />
      ) : (
        <TOSStack theme={NavigationTheme} />
      )} */}
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
const exitRoutes = ['login'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
