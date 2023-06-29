import React,{useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
//   TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {progressSteps} from '../progressSteps/styles';
import assets from '../../assets';
import HeaderComponent from '../../components/headerComponent/header';
import {RoutesConstant} from '../../navigators';
import {TextInput,Button} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-date-picker'
import MIcon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { allState, selectedCity } from '../../services/Auth';
import { SelectList } from 'react-native-dropdown-select-list'

interface BasicDetailProps {
  navigation?: any;
}

const BasicDetail = ({navigation,route,handlePress,name,setName,setEmail,email,setAddress,address,phoneNumber,setPhoneNumber,date,setDate,gender,setGender,stateSelect,setselected,citySelect,setCityselected,setPincode,pincode}: BasicDetailProps) => {
  const styles = progressSteps;
//   const signUpScreen = false;
  // const {signUpScreen}=route?.params
  // const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = React.useState(false);
  const [cityData, setCityData] = useState()
  const [stateData, setStateData] = useState()

  const [stateId, setStateId] = useState()
  console.log(cityData,'cityDatacityData');
// console.log(stateSelect,'state');
useEffect(() => {
   selectedCity('6482159489f06c24df629ac3').then(r=>{
    // console.log(r?.data,'rrrrrrrrrrrrrrrrrrrrrrrrr');
    setCityData(r?.data)
  })
  console.log('object');
}, [stateId])
console.log(name,email,phoneNumber,gender,date,address,stateSelect,citySelect,pincode,setPincode);
  const onPress = () => setExpanded(!expanded);
  const City = ["Delhi", "Surat"]
  const Pincode = ["1002773", "1007833"]
  const State = ["Delhi", "Gujarat"]
  const data = [
    {key:'1', v:'Mobiles', disabled:true},
    {key:'2', v:'Appliances'},
    // {key:'3', value:'Cameras'},
    // {key:'4', value:'Computers', disabled:true},
    // {key:'5', value:'Vegetables'},
    // {key:'6', value:'Diary Products'},
    // {key:'7', value:'Drinks'},
]
  useEffect(() => {
    allState().then(r=>{
      setStateData(r?.data?.data)
      // console.log(r?.data?.data,'r 43');
    })
    // setTimeout(() => {
     
    // }, 3000);
  }, [])
  const AlertPopUp = (alertVal)=>{
    Alert.alert('Error',`${alertVal} is required` || 'The field is required', [
       
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ])
  }
const onHandlePress =()=>{
  // handlePress()

  // if (!name) {
  //  return AlertPopUp('Name')
  // }else if (!phoneNumber){
  //   return AlertPopUp('Phone Number')
  // }else if (!gender){
  //   return AlertPopUp('Gender')
  // }else if (!date){
  //   return AlertPopUp('DOB')
  // }else if (!stateSelect){
  //   return AlertPopUp('State')
  // }else if (!citySelect){
  //   return AlertPopUp('City')
  // }
  // else if (!pincode){
  //   return AlertPopUp('Pincode')
  // }else{
    handlePress()
  // }
}
  const Gender = [
 'Male',
 'Female',
'Other',
  ];
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
      value={name}
      onChangeText={e=>{
        setName(e)
      }}
    />
      <TextInput
      label="E-mail"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
      keyboardType='email-address'
      value={email}
      onChangeText={e=>{
        setEmail(e)
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
      keyboardType='number-pad'
      value={phoneNumber}
      onChangeText={e=>{
        setPhoneNumber(e)
      }}
      maxLength={10}
    />
    <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',        marginBottom:20,alignItems:'center'}}>
             <SelectDropdown
	data={Gender}
	onSelect={(selectedItem, index) => {
    console.log(index+1,'index');
    setGender(index+1)
		// console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
  defaultValue={'Gender'}
  defaultButtonText='Gender'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'45%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}
renderCustomizedButtonChild={(selectedItem, index) => {
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Gender'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
    <TouchableOpacity onPress={() => setOpen(true)} style={styles.inputViewStyle}>
<Text>{date?date?.toLocaleDateString():'DD/MM/YYYY'}</Text>
<MIcon
          // style={{marginLeft: 10,color:'red'}}
          size={20}
          name="calendar"
          color={'gray'}
          
        />
        </TouchableOpacity>
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        // maximumDate={new Date()}
        mode='date'
      />
    </View>
    <TextInput
      label="Address"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
      value={address}
      onChangeText={e=>{
        setAddress(e)
      }}
    />
    {/* <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="v"

    /> */}
    <SelectDropdown
	data={stateData}
	onSelect={(selectedItem, index) => {
    setselected(selectedItem)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {

		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem?.name
	}}
	rowTextForSelection={(item, index) => {
    // console.log(item?.name,'name ');
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item?.name
	}}
  defaultValue={'State'}
  defaultButtonText='State'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'90%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1,marginBottom:18}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}

// renderCustomizedButtonChild={(selectedItem, index) => {
//   console.log(selectedItem,'selectedItem');
//   return (
//     <View style={styles.dropdown3BtnChildStyle}>
     
//       <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Pincode'}</Text>
//       <FontAwesome name="chevron-down" color={'#444'} size={18} />
//     </View>
//   );
// }}
// />
renderCustomizedButtonChild={(selectedItem, index) => {
  console.log('object');
  setStateId(selectedItem?._id)
  // setSelectedItem(selectedItem)
 
    return (
      <View style={styles.dropdown3BtnChildStyle}>
       
        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem?.name : 'State'}</Text>
        <FontAwesome name="chevron-down" color={'#444'} size={18} />
      </View>
    );
  }

 
}
/>
     <SelectDropdown
	data={cityData}
	onSelect={(selectedItem, index) => {
		// console.log(selectedItem, index)
	}}
  disabled={!stateSelect}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem?.name
	}}
	rowTextForSelection={(item, index) => {
		return item?.name
	}}
  defaultValue={'City'}
  defaultButtonText='City'
  dropdownStyle={{
  }}
  buttonStyle={{width:'90%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1,marginBottom:18}}
renderCustomizedButtonChild={(selectedItem, index) => {
  setCityselected(selectedItem)
  // console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem?.name : 'City'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
<SelectDropdown
	data={Pincode}
	onSelect={(selectedItem, index) => {
    setPincode(selectedItem)
		// console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		return item
	}}
  defaultValue={'Pincode'}
  defaultButtonText='Pincode'
  dropdownStyle={{
  }}
  buttonStyle={{width:'90%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1,}}
renderCustomizedButtonChild={(selectedItem, index) => {
  // console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Pincode'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>

    {/* </View> */}
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
    onPress={()=>{
      onHandlePress()
    }}
    />
   </View>
      {/* <HeaderComponent  text={'Basic Details'}/> */}
     


    </View>
   </KeyboardAwareScrollView>
  );
};

export default BasicDetail;
