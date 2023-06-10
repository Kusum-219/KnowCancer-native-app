import React,{useState} from 'react';
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
import DatePicker from 'react-native-date-picker'
import MIcon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface BasicDetailProps {
  navigation?: any;
}

const BasicDetail = ({navigation,route,handlePress}: BasicDetailProps) => {
  const styles = progressSteps;
  console.log(route?.params,'route');
//   const signUpScreen = false;
  // const {signUpScreen}=route?.params
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = React.useState(false);
  const onPress = () => setExpanded(!expanded);
  const City = ["Delhi", "Surat"]
  const Pincode = ["1002773", "1007833"]
  const State = ["Delhi", "Gujarat"]

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
    />
      <TextInput
      label="E-mail"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20

      }}
      keyboardType='email-address'

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
    />
    <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',        marginBottom:20,alignItems:'center'}}>
    {/* <TextInput
      label="Gender"
      mode='outlined'
      style={{
        width:'45%',
      }}
    /> */}
             <SelectDropdown
	data={Gender}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
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
  console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Gender'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
    {/* <TextInput
      label="Date of Birth"
      mode='outlined'
      style={{
        width:'45%'
      }}
    /> */}
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
     <SelectDropdown
	data={City}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
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
  defaultValue={'City'}
  defaultButtonText='City'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'30%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}
renderCustomizedButtonChild={(selectedItem, index) => {
  console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'City'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
<SelectDropdown
	data={Pincode}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
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
  defaultValue={'Pincode'}
  defaultButtonText='Pincode'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'30%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}
renderCustomizedButtonChild={(selectedItem, index) => {
  console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'Pincode'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
<SelectDropdown
	data={State}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
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
  defaultValue={'State'}
  defaultButtonText='State'
  dropdownStyle={{
    // width:'80%',
  }}
  buttonStyle={{width:'30%',backgroundColor:'white',borderRadius:8,borderColor:'#6750A4',borderWidth:1}}
// renderCustomizedRowChild={
//   <AppText.Text>hh</AppText.Text>
// }
// renderDropdownIcon={isOpened => {
//   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
// }}
renderCustomizedButtonChild={(selectedItem, index) => {
  console.log(selectedItem,'selectedItem');
  return (
    <View style={styles.dropdown3BtnChildStyle}>
     
      <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem : 'State'}</Text>
      <FontAwesome name="chevron-down" color={'#444'} size={18} />
    </View>
  );
}}
/>
    {/* <TextInput
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
    /> */}
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
