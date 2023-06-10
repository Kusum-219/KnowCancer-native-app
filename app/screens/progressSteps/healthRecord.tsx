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
import {TextInput, Button,RadioButton} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/AntDesign';

interface HealthRecordProps {
  navigation?: any;
}

const HealthRecord = ({navigation, route, handlePress}: HealthRecordProps) => {
  const styles = progressSteps;
  console.log(route?.params, 'route');
  const [checked, setChecked] = React.useState('Yes');

  const Language = ['Delhi', 'Surat'];
  const Height = ['150cm', '160cm'];
  const Weight = ['40kg', '50kg'];
  const BloodGroup = ['0+', 'A+'];
  const Diagnosis = ['Diagnois1', 'Diagnois2'];
  const Stage = ['Stage1', 'Stage2'];

  //   const signUpScreen = false;
  // const {signUpScreen}=route?.params

  return (
    <KeyboardAwareScrollView>
      <View style={{alignItems: 'center'}}>
        <SelectDropdown
          data={Language}
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
        <TextInput
          label="Update Your Health Record"
          mode="outlined"
          style={{
            width: '90%',
            marginBottom: 20,
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
            // marginBottom: 20,
          }}>
          <SelectDropdown
            data={Height}
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
            defaultValue={'Height'}
            defaultButtonText="Height"
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
                    {selectedItem ? selectedItem : 'Height'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          />
          <SelectDropdown
            data={Weight}
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
            defaultValue={'Weight'}
            defaultButtonText="Weight"
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
                    {selectedItem ? selectedItem : 'Weight'}
                  </Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
            }}
          />
          <SelectDropdown
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
          />
        </View>
        <View style={{backgroundColor:'white',width:'90%',marginBottom:20,borderRadius:8,borderWidth:1,borderColor:'#6750A4',paddingHorizontal:10}}>
        <Text style={{color:'#936DAC'}}>Are you under Treatment?</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'85%'}}>
     <View style={{flexDirection:'row',alignItems:'center'}}>
     <RadioButton
        value="Yes"
        status={ checked === 'Yes' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Yes')}

      />
                  <Text>Yes</Text>
     </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>

      <RadioButton
        value="No"
        status={ checked === 'No' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('No')}
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
        />
        <View style={{flexDirection: 'row', width: '90%', marginBottom: 20}}>
          <SelectDropdown
            data={Diagnosis}
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
            defaultValue={'Diagnosis'}
            defaultButtonText="Diagnosis"
            dropdownStyle={
              {
                // width:'80%',
              }
            }
            buttonStyle={{
              width: '35%',
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
                    {selectedItem ? selectedItem : 'Diagnosis'}
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
              width: '35%',
              backgroundColor: 'white',
              borderRadius: 8,
              borderColor: '#6750A4',
              borderWidth: 1,
              marginBottom: 20,
              marginRight: 22,
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
        </View>
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
            onPress={handlePress}
          />
        </View>
        {/* <HeaderComponent  text={'Basic Details'}/> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default HealthRecord;
