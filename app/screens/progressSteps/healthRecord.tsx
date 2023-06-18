import * as React from 'react';
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
import {TextInput, Button,RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/AntDesign';
import { diagnosisManagement } from '../../services/Auth';

interface HealthRecordProps {
  navigation?: any;
}

const HealthRecord = ({navigation, route, handlePress,language, setLanguage,height, setHeight,weight, setWeight,underTreatment, setUnderTreatment,newcase, setNewCase,diagnosis, setDiagnosis,stage, setStage,bloodGroup, setBloodGroup}: HealthRecordProps) => {
  const styles = progressSteps;
  console.log(route?.params, 'route');
  const [diagnosisData, setDiagnosisData] = React.useState();
// console.log(language,'====');
  const Language = ['Hindi', 'English'];
  const Height = ['150cm', '160cm'];
  const Weight = ['40kg', '50kg'];
  const BloodGroup = ['A+', 'A-','B+','B-','AB+','AB-','0+','0-'];
  const Diagnosis = ['Diagnois1', 'Diagnois2'];
  const Stage = ['Stage 1', 'Stage 2','Stage 3','Stage 4'];
React.useEffect(() => {
  diagnosisManagement().then(r=>{
    setDiagnosisData(r?.data?.data)
    console.log(r?.data?.data,'diagnosis data');
  })
}, [])
const AlertPopUp = (alertVal)=>{
  Alert.alert('Error',`${alertVal} is required` || 'The field is required', [
     
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ])
}
const onHandlePress =()=>{
  // handlePress()

  if (!language) {
   return AlertPopUp('Language')
  }else if (!bloodGroup){
    return AlertPopUp('Blood-Group')
  }else if (!height){
    return AlertPopUp('Height')
  }else if (!weight){
    return AlertPopUp('Weight')
  }else{
    handlePress()
  }
}
  //   const signUpScreen = false;
  // const {signUpScreen}=route?.params

  return (
    <KeyboardAwareScrollView>
      <View style={{alignItems: 'center'}}>
        <SelectDropdown
          data={Language}
          onSelect={(selectedItem, index) => {
            setLanguage(index+1)
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          defaultValue={'Language'}
          defaultButtonText="Preferred Language"
          dropdownStyle={
            {
              // width:'80%',
            }
          }
          buttonStyle={{
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 8,
            borderColor: '#6750A4',
            borderWidth: 1,
            marginBottom: 20,
          }}
          // renderCustomizedRowChild={
          //   <AppText.Text>hh</AppText.Text>
          // }
          // renderDropdownIcon={isOpened => {
          //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          // }}
          renderCustomizedButtonChild={(selectedItem, index) => {
            console.log(selectedItem, 'selectedItem');
            return (
              <View style={styles.dropdown3BtnChildStyle}>
                <Text style={styles.dropdown3BtnTxt}>
                  {selectedItem ? selectedItem : 'Preferred Language'}
                </Text>
                <FontAwesome name="chevron-down" color={'#444'} size={18} />
              </View>
            );
          }}
        />
        {/* <TextInput
      label="Phone Number"
      mode='outlined'
      style={{
        width:'90%'
      }}
    /> */}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
         <TextInput
      label="Height"
      mode='outlined'
      style={{
        width:'45%'
      }}
      value={height}
      onChangeText={(e)=>{
        setHeight(e)
      }}
    />
    <TextInput
      label="Weight"
      mode='outlined'
      style={{
        width:'45%'
      }}
      value={weight}
      onChangeText={(e)=>{
        setWeight(e)
      }}
    />
          {/* <SelectDropdown
            data={BloodGroup}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultValue={'BloodGroup'}
            defaultButtonText="BloodGroup"
            dropdownStyle={
              {
                // width:'80%',
              }
            }
            buttonStyle={{
              width: '30%',
              backgroundColor: 'white',
              borderRadius: 8,
              borderColor: '#6750A4',
              borderWidth: 1,
              marginBottom: 20,
            }}
            // renderCustomizedRowChild={
            //   <AppText.Text>hh</AppText.Text>
            // }
            // renderDropdownIcon={isOpened => {
            //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            // }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              console.log(selectedItem, 'selectedItem');
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? selectedItem : 'BloodGroup'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          /> */}
        </View>
        <SelectDropdown
            data={BloodGroup}
            onSelect={(selectedItem, index) => {
              setBloodGroup(index+1)
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultValue={'BloodGroup'}
            defaultButtonText="BloodGroup"
            dropdownStyle={
              {
                // width:'80%',
              }
            }
            buttonStyle={{
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 8,
              borderColor: '#6750A4',
              borderWidth: 1,
              marginBottom: 20,
            }}
            // renderCustomizedRowChild={
            //   <AppText.Text>hh</AppText.Text>
            // }
            // renderDropdownIcon={isOpened => {
            //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            // }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              console.log(selectedItem, 'selectedItem');
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? selectedItem : 'BloodGroup'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          />
        <View style={{backgroundColor:'white',width:'90%',marginBottom:20,borderRadius:8,borderWidth:1,borderColor:'#6750A4',paddingHorizontal:10}}>
        <Text style={{color:'#936DAC'}}>Are you under Treatment?</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'85%'}}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
     <RadioButton
        value="Yes"
        status={ underTreatment == true? 'checked' : 'unchecked' }
        onPress={() => setUnderTreatment(true)}

      />
                  <Text>Yes</Text>
     </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>

      <RadioButton
        value="No"
        status={ underTreatment ==false ? 'checked' : 'unchecked' }
        onPress={() => setUnderTreatment(false)}
      />
                  <Text>No</Text>
                  </View>

    </View>
        </View>
        {/* <TextInput
          label="Are you under Treatment"
          mode="outlined"
          style={{
            width: '90%',
            marginBottom: 20,
          }}
        /> */}
        <TextInput
          label="New Case"
          mode="outlined"
          style={{
            width: '90%',
            marginBottom: 20,
          }}
          value={newcase}
          onChangeText={e=>{
            setNewCase(e)
          }}
        />
        {/* <View style={{flexDirection: 'row', width: '90%', marginBottom: 20}}> */}
          <SelectDropdown
            data={diagnosisData}
            onSelect={(selectedItem, index) => {
              setDiagnosis(selectedItem)
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem?.name;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item?.name;
            }}
            defaultValue={'Diagnosis'}
            defaultButtonText="Diagnosis"
            dropdownStyle={
              {
                // width:'80%',
              }
            }
            buttonStyle={{
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 8,
              borderColor: '#6750A4',
              borderWidth: 1,
              marginBottom: 20,
            }}
            // renderCustomizedRowChild={
            //   <AppText.Text>hh</AppText.Text>
            // }
            // renderDropdownIcon={isOpened => {
            //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            // }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              console.log(selectedItem, 'selectedItem');
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? selectedItem?.name : 'Diagnosis'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          />
          <SelectDropdown
            data={Stage}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setStage(index+1)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            defaultValue={'Stage'}
            defaultButtonText="Stage"
            dropdownStyle={
              {
                // width:'80%',
              }
            }
            buttonStyle={{
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 8,
              borderColor: '#6750A4',
              borderWidth: 1,
              marginBottom: 20,
              // marginRight: 22,
            }}
            // renderCustomizedRowChild={
            //   <AppText.Text>hh</AppText.Text>
            // }
            // renderDropdownIcon={isOpened => {
            //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            // }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              console.log(selectedItem, 'selectedItem');
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem ? selectedItem : 'Stage'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          />
        {/* </View> */}
        <View style={{marginVertical: 30}}>
          <Button
            children={'Submit'}
            contentStyle={{
              backgroundColor: '#936DAC',
              width: '100%',
              paddingVertical: 4,
              borderRadius: 24,
            }}
            labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
            onPress={()=>onHandlePress()}
          />
        </View>
        {/* <HeaderComponent  text={'Basic Details'}/> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default HealthRecord;
