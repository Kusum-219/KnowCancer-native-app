import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native';
import {loginStyles} from './signInStyles';
import assets from '../../assets';
import HeaderComponent from '../../components/headerComponent/header';
import { useState,useEffect } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from 'react-native-paper';
import { RoutesConstant } from '../../navigators';

interface OtpScreenProps {}

const OtpScreen = ({navigation,route}: OtpScreenProps) => {
  const styles = loginStyles;
  const signUpScreen= false;
const{login}=route?.params
  const [timeLeft, setTimeLeft] = useState(30);
  let timer = () => {};

    const startTimer = () => {
        timer = setTimeout(() => {
            if(timeLeft <= 0){
                clearTimeout(timer);
                return false;
            }
         setTimeLeft(timeLeft-1);
        }, 1000)
     }

     useEffect(() => {
         startTimer();
         return () => clearTimeout(timer);
     });    

    const start = () => {
        setTimeLeft(30);
        clearTimeout(timer);
        startTimer();
    }
  return (
    <View style={styles.container}>
      <HeaderComponent />

    <View style={{justifyContent:'space-around',flex:1}}>
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
            fontWeight: '600',
          }}>
          Enter Your 6 digit OTP
        </Text>
       <View style={{alignItems:'center'}}>
       <OTPInputView
    style={{width: '85%', height: 80,}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = 8code => { this.setState({code})}}
    // autoFocusOnLoad
    
    codeInputFieldStyle={styles.underlineStyleBase}
    // codeInputHighlightStyle={S.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}/>
       </View>
     <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:25,alignItems:'center',}}>
<Text>{timeLeft?`Waiting for OTP... ${timeLeft} Sec`:'Didn’t Received OTP?'}</Text>
{!timeLeft &&<TouchableOpacity onPress={start}>
  <Text style={{color:'#E61323',fontWeight:'500',marginLeft:5}}>Resend OTP</Text>
</TouchableOpacity>}
{/* <Button children='Resend OTP' type='text' labelStyle={{color:'red',paddingHorizontal:0}} onPress={start} contentStyle={{backgroundColor: 'green',borderRadius:0,paddingHorizontal:0}}/> */}
</View>
      </View>
      <View>
     <TouchableOpacity style={{width:'60%',paddingVertical:12,backgroundColor:'#936DAC',borderRadius:24,alignItems:'center',alignContent:'center',alignSelf:'center'}} onPress={()=>{
            if (login) {
              navigation.navigate(RoutesConstant.HOME_PAGE)
            }else{
              navigation.navigate(RoutesConstant.PROGRESSTEPS)

            }

}}>
        <Text style={{fontSize:20,color:'#fff'}}>
           {login? 'Login':'SignUp'}
        </Text>
     </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default OtpScreen;
