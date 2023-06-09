import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
//   TextInput,
  TouchableOpacity,
} from 'react-native';
import {progressSteps} from '../progressSteps/styles';
import assets from '../../assets';
import HeaderComponent from '../../components/headerComponent/header';
import {RoutesConstant} from '../../navigators';
import {TextInput,Button} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface BasicDetailProps {
  navigation?: any;
}

const BasicDetail = ({navigation,route,handlePress}: BasicDetailProps) => {
  const styles = progressSteps;
  console.log(route?.params,'route');
//   const signUpScreen = false;
  // const {signUpScreen}=route?.params
  
  return (
   <KeyboardAwareScrollView>
     <View style={{alignItems:'center'}}>
        <TextInput
      label="Full Name"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20
      }}
    />
      <TextInput
      label="E-mail"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
      right={<TextInput.Icon name="email-outline" color={'red'}/>}
    />
      <TextInput
      label="Phone Number"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
    />
    <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',        marginBottom:20}}>
    <TextInput
      label="Gender"
      mode='outlined'
      style={{
        width:'45%',
      }}
    />
    <TextInput
      label="Date of Birth"
      mode='outlined'
      style={{
        width:'45%'
      }}
    />
    </View>
    <TextInput
      label="Address"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
    />
     <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',        marginBottom:20}}>
    <TextInput
      label="City"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
    <TextInput
      label="Pincode"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
     <TextInput
      label="State"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
    </View>
   <View style={{marginVertical:30}}>
   <Button 
    children={'Continue'}
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'100%',
        paddingVertical:4,
      borderRadius:28
        
        
    }}
    labelStyle={{fontSize:20,fontWeight:'500',color:'white'}}
    onPress={handlePress}
    />
   </View>
      {/* <HeaderComponent  text={'Basic Details'}/> */}
     


    </View>
   </KeyboardAwareScrollView>
  );
};

export default BasicDetail;
