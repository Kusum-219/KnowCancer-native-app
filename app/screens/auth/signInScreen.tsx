import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {loginStyles} from './signInStyles';
import assets from '../../assets';
import HeaderComponent from '../../components/headerComponent/header';
import {RoutesConstant} from '../../navigators';

interface SignInProps {
  navigation?: any;
}

const SignIn = ({navigation,route}: SignInProps) => {
  const styles = loginStyles;
  console.log(route?.params,'route');
  const signUpScreen = false;
  // const {signUpScreen}=route?.params
  return (
    <View style={styles.container}>
      <HeaderComponent />

      <View style={{justifyContent: 'space-around', flex: 1}}>
        <View style={styles.contentContainer}>
          <View style={styles.textView}>
            <Text style={styles.text}>
              k<Text style={styles.boldText}>NO</Text>wcancers
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              color: '#936CAB',
              fontWeight: '700',
            }}>
            PHONE NUMBER
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={{
                width: '90%',
                borderColor: '#D9D9D9',
                borderWidth: 1,
                paddingLeft: 50,
                fontSize: 16,
                backgroundColor: '#fff',
                borderRadius: 8,
              }}
              placeholderTextColor={'#999999'}
              placeholder="Enter Mobile No."
              keyboardType="number-pad"
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                position: 'absolute',
                bottom: 12,
                left: 30,
              }}>
              +91
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 18}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#CDCED1'}} />
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingHorizontal: 8,
                  color: '#747980',
                  fontSize: 15,
                }}>
                or continue with
              </Text>
            </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#CDCED1'}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
            }}>
            <TouchableOpacity
              style={{
                height: 68,
                width: 72,
                borderWidth: 1,
                borderColor: '#EBE9F1',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25,
                backgroundColor: '#fff',
              }}
              onPress={() => {
                navigation.navigate(RoutesConstant.OTP);
              }}>
              <Image
                source={assets.facebookIcon}
                height={32}
                width={32}
                style={{height: 35, width: 35, borderRadius: 18}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 68,
                width: 72,
                borderWidth: 1,
                borderColor: '#EBE9F1',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              <Image
                source={assets.googleIcon}
                height={30}
                width={30}
                style={{height: 35, width: 35, borderRadius: 18}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.policyView}>
            <Text style={{color: '#282828'}}>If you don't have account,</Text>
            <TouchableOpacity 
            onPress={()=>{
              // navigation.navigate(RoutesConstant.LOGIN,{
              //   signUpScreen:true
              // })
            }}
            >
              <Text style={styles.signup}>
                {signUpScreen ? 'Sign in' : 'Sign up'}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text>Helloo</Text> */}
        </View>
      </View>
    </View>
  );
};

export default SignIn;
