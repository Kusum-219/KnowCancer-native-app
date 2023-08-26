import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {loginStyles} from './signInStyles';
import assets from '../../assets';
import HeaderComponent from '../../components/headerComponent/header';
import {RoutesConstant} from '../../navigators';
import { Button } from 'react-native-paper';
import {  sendOtpApi } from '../../services/Auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toaster from '../../components/toast/Toaster';

interface SignInProps {
  navigation?: any;
}

const SignUp = ({navigation,route}: SignInProps) => {
  const styles = loginStyles;
  const toasterRef = React.useRef<any>();

  console.log(route?.params,'route');
  const [phoneNumber, setPhoneNumber] = React.useState()

  // const {signUpScreen}=route?.params
  // const [isSignUp, setIsSignUp] = React.useState(false)
  const signUpScreen = false;
  console.log(signUpScreen,'signUpScreen');
  // const {signUpScreen}=route?.params
  const sendOtp = ()=>{
    sendOtpApi({
      strategy:"phoneOtp",
      action:"signup",
      phone:phoneNumber,
    }).then((result) => {
      console.log(result?.data?.message,'result?.data?.message');
      if (result?.data?.message) {
        navigation.navigate(RoutesConstant.OTP,{
          login:false,
          phoneNumber:phoneNumber
        })
          
      }
      
    }).catch((err) => {
      console.log(err?.response,'err');
      toasterRef.current.showToaster(
        {
         message:err?.response?.data?.message || 'Enter valid number',
         type:'E'
        }
       );
    
    });
    // {
     
  }
  return (
    <KeyboardAwareScrollView style={styles.container}>
                  <Toaster ref={toasterRef} />

      <HeaderComponent />
      <View style={styles.textView}>
            <Text style={styles.text}>
              k<Text style={styles.boldText}>NO</Text>wcancers
            </Text>
          </View>
      
        <View style={styles.contentContainer}>
        
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
              onChangeText={(e)=>{
                setPhoneNumber(e)
              }}
              maxLength={10}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                position: 'absolute',
                bottom: 14,
                left: 30,
              }}>
              +91
            </Text>
          </View>
        </View>
        <View style={{marginVertical:30,}}>

       <Button 
        children='Send Otp'
        onPress={()=>sendOtp()}
        contentStyle={{
            backgroundColor:'#936DAC',
            width:'90%',
            paddingVertical:4,
          borderRadius:28,
                alignSelf:'center'

            
            
        }}
        labelStyle={{fontSize:16,fontWeight:'500',color:'white'}}

        />
        </View>
        <View>
        <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 18,marginTop:10}}>
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
                console.log('Facebook')
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
            <Text style={{color: '#282828'}}>{'Have an Account already?'}</Text>
            <TouchableOpacity 
            onPress={()=>{
           
              navigation.navigate(RoutesConstant.LOGIN,{
              })
             
            }
            }
            >
              <Text style={styles.signup}>
                {'Login'}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text>Helloo</Text> */}
        </View>
      </KeyboardAwareScrollView>
  );
};

export default SignUp;
