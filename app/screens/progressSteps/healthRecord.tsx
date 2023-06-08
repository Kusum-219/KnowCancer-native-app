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

interface HealthRecordProps {
  navigation?: any;
}

const HealthRecord = ({navigation,route,handlePress}: HealthRecordProps) => {
  const styles = progressSteps;
  console.log(route?.params,'route');
//   const signUpScreen = false;
  // const {signUpScreen}=route?.params
  
  return (
  <KeyboardAwareScrollView>
      <View style={{alignItems:'center'}}>
        <TextInput
      label="Preferred Language"
      mode='outlined'
      style={{
        width:'90%'
      }}
    />
      <TextInput
      label="Update Your Health Record"
      mode='outlined'
      style={{
        width:'90%'
      }}
    />
      {/* <TextInput
      label="Phone Number"
      mode='outlined'
      style={{
        width:'90%'
      }}
    /> */}
    <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between'}}>
    <TextInput
      label="Height"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
    <TextInput
      label="Weight"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
     <TextInput
      label="Blood Group"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
    </View>
    <TextInput
      label="Are you under Treatment"
      mode='outlined'
      style={{
        width:'90%'
      }}
    />
    <TextInput
      label="New Case"
      mode='outlined'
      style={{
        width:'90%'
      }}
    />
     <View style={{flexDirection:'row',width:'90%',}}>
    <TextInput
      label="Diagnois"
      mode='outlined'
      style={{
        width:'30%',
        marginRight:20
      }}
    />
    <TextInput
      label="Stage"
      mode='outlined'
      style={{
        width:'30%'
      }}
    />
    
    </View>
   <View style={{marginVertical:30}}>
   <Button 
    children={'Submit'}
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'100%',
        paddingVertical:4,
        borderRadius:24
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

export default HealthRecord;
