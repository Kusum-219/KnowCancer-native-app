import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import OtpScreen from '../screens/auth/otpScreen';
import BasicDetail from '../screens/progressSteps/basicDetailsScreen';
import ProgressSteps from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firstScreen from '../screens/mainScreens/firstScreen';
import secondScreen from '../screens/mainScreens/secondScreen';
import ProfileScreen from '../screens/mainScreens/profileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import assets from '../assets';
import IntroSlider from '../screens/IntroSlider';
import SupportTicket from '../screens/mainScreens/SupportTicket';
import HomeScreen from '../screens/mainScreens/firstScreen';
import Doctors from '../screens/mainScreens/Doctors';
import DirectConsult from '../screens/mainScreens/DirectConsult';
import Chat from '../screens/mainScreens/Chat';
import VerifyDoctorCode from '../screens/mainScreens/VerifyDoctorCode';
import ProfileIndex from '../screens/mainScreens/profileIndex';
import SignUp from '../screens/auth/signUpScreen';

// import PickerComponent from '@/components/picker/PickerComponent';
// import {useAuthContext} from '@/screens/auth/AuthContext';
// import assets from '@/assets';
// import NotificationController from './NotificationControllerAndroid.js';
// import InitialScreen from '@/screens/initialway/InitialScreen';
const Stack = createNativeStackNavigator<NavigatorParamList>();

interface AppStackProps {
  theme: ThemeNavigationTheme;
}

const Tab = createBottomTabNavigator();
// const TabContent = [
//   {
//     id: 0,
//     name: RoutesConstant.HOME_PAGE,
//     component: firstScreen,
//     focusedImg: assets.bottomView,
//     unfocused: assets.smallBottomView,
//   },
// ];
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          // backgroundColor:'red',
          paddingHorizontal:10,
        },
      }}>
      <Tab.Screen
        name={RoutesConstant.HOME_PAGE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) =>{
            return (
              <>
              {
                focused?
                <ImageBackground
                source={assets.bottomView}
                style={{
                  height: 50,
                  width: 160,
                  // backgroundColor: 'red',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
             <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
             <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                  source={assets.homeTab}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#936CAB' : 'black',
                  }}
                />
              </ImageBackground>
              <Text style={{fontWeight:'500',color:'black'}}>Home</Text>
             </View>
              </ImageBackground>
              :
              <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                  source={assets.homeTab}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#936CAB' : 'black',
                  }}
                />
              </ImageBackground>
              }
              </>
            )
          }
          

        }}
      />
      <Tab.Screen
        name={RoutesConstant.CHAT_PAGE}
        component={Chat}
        options={{
          tabBarIcon: ({color, size, focused}) =>{
            return (
              <>
              {
                focused?
                <ImageBackground
                source={assets.bottomView}
                style={{
                  height: 50,
                  width: 160,
                  // backgroundColor: 'red',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
             <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
             <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <MaterialCommunityIcons
              name="message1"
              color={focused ? '#936CAB' : 'black'}
              size={size}
            />
             
              </ImageBackground>
              <Text style={{fontWeight:'500',color:'black'}}>Home</Text>
             </View>
              </ImageBackground>
              :
              <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
              name="message1"
              color={focused ? '#936CAB' : 'black'}
              size={size}
            />
              </ImageBackground>
              }
              </>
            )
          }
         
        }}
      />
      <Tab.Screen
        name={RoutesConstant.SETTING_PAGE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) =>{
            return (
              <>
              {
                focused?
                <ImageBackground
                source={assets.bottomView}
                style={{
                  height: 50,
                  width: 160,
                  // backgroundColor: 'red',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
             <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
             <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <OcticonsIcons
              name="person"
              color={focused ? '#936CAB' : 'black'}
              size={size}
            />
             
              </ImageBackground>
              <Text style={{fontWeight:'500',color:'black'}}>Profile</Text>
             </View>
              </ImageBackground>
              :
              <ImageBackground 
              source={assets.smallBottomView}
              style={{
                height: 45,
                width: 45,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <OcticonsIcons
              name="person"
              color={focused ? '#936CAB' : 'black'}
              size={size}
            />
              </ImageBackground>
              }
              </>
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}
const AppStack = ({theme}: AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
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
      {/* <Stack.Screen name={RoutesConstant.INTROSLIDER} component={IntroSlider} /> */}
        <Stack.Screen name={RoutesConstant.LOGIN} component={SignIn} />
        <Stack.Screen name={RoutesConstant.SIGNUP} component={SignUp} />

        <Stack.Screen name={RoutesConstant.OTP} component={OtpScreen} />
        <Stack.Screen
          name={RoutesConstant.PROGRESSTEPS}
          component={ProgressSteps}
        />
        <Stack.Screen
          name={RoutesConstant.HOME_PAGE}
          component={MyTabs}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name={RoutesConstant.DIRECT_CONSULT}
          component={DirectConsult}
        />
         <Stack.Screen
          name={RoutesConstant.DOCTORS}
          component={Doctors}
        />
       
         <Stack.Screen
          name={RoutesConstant.CHAT}
          component={Chat}
        />
          <Stack.Screen
          name={RoutesConstant.VERIFY_DOCTOR}
          component={VerifyDoctorCode}
        />
        <Stack.Screen
          name={RoutesConstant.PROFILE_PAGES}
          component={ProfileIndex}
        />
        {/* <Stack.Screen
          name={RoutesConstant.HEALTHRECORD}
          component={OtpScreen}
        />
         <Stack.Screen
          name={RoutesConstant.UPLOADHEALTHRECORD}
          component={OtpScreen}
        /> */}
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
      <AppStack />
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
