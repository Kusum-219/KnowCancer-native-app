import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/headerComponent/header';
import assets from '../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, TextInput} from 'react-native-paper';
import {ScreenStyles} from './ScreenStyles';
import DatePicker from 'react-native-date-picker';
import MIcon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

import {
  allState,
  editProfile,
  profileImageUpload,
  selectedCity,
} from '../../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toaster from '../../components/toast/Toaster';

const MyProfile = ({navigation}) => {
  const styles = ScreenStyles;
 
  useEffect(async () => {
    allState().then(r => {
      setStateData(r?.data);
    });
    AsyncStorage.getItem('UserInfo')
      .then(result => {
        // return (
        const data = JSON.parse(result);
        console.log(data,'User Info');
        setName(data?.name);
        setEmail(data?.email);
        setPhoneNumber(data?.phone);
        setAddress(data?.address);
        setCityselected(data?.city);
        setPincode(data?.pincode);
        setHeight(data?.userHealthRecord?.height.toString());
        setWeight(data?.userHealthRecord?.weight.toString());
        setGender(data?.gender);
        setLanguage(data?.userHealthRecord?.language || 1);// we dont get language and blood group from storage
        setDob(data?.dob);
        setProfilePic(data?.avatar);
        setBloodGroup(data?.userHealthRecord?.bloodGroup||4)
        setDate(new Date(data?.dob))
         setselected(data?.state)

        setUserInfo(data);
      })
      .catch(err => {});
  }, []);
  const [userInfo, setUserInfo] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [address, setAddress] = React.useState();
  const [gender, setGender] = React.useState();
  const [dob, setDob] = React.useState(new Date());
  const [date, setDate] = React.useState(new Date(dob));
  const [stateSelect, setselected] = React.useState('');
  const [citySelect, setCityselected] = React.useState('');
  const [language, setLanguage] = React.useState();
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [stateData, setStateData] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [open, setOpen] = useState(false);
  const [pincode, setPincode] = React.useState();
  const [disable, setDisable] = React.useState(true);
  const [profilePic, setProfilePic] = useState();
  const [image, setImage] = useState();
  const [selectedState, setSelectedState] = useState(null); // State object with _id and name


  useEffect(() => {
    // Find the state with the matching ID from stateData array
    const stateObject = stateData?.find(state => state?._id === stateSelect);
    setSelectedState(stateObject);
  }, [stateData,stateSelect]);
console.log(selectedState,'selected Stateeee');
console.log(dob,gender,stateSelect,language,bloodGroup,'dropdown Data');
  useEffect(() => {
    profileImageUpload(image)?.then(result => {
      const pic = result?.data[0]?.filePath;
      setProfilePic(pic);
    });
  }, [image]);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'Penny Profit needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openPicker({
          width: 250,
          height: 250,
          cropping: true,
          mediaType: 'photo',
          multiple: true,
        }).then(image => {
          setImage(image);
        });
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Camera Permission Required',
          'Please enable camera access in your device settings to use this feature.',
        );
      }
    } catch (err) {}
  };
  const onUploadImage = () => {
    const permission = requestCameraPermission();
  };
  const toasterRef = React.useRef<any>();

  const handlePress = () => {
    editProfile(userInfo?._id, {
      name: name,
      email: email,
      phone: phoneNumber,
      gender: gender,
      height: height,
      address: address,
      dob: '04/03/2000',
      city: citySelect,
      pincode: pincode,
      state: stateSelect?._id,
      language: language,
      weight: weight,
      bloodGroup: bloodGroup,
      avatar: profilePic,
    })
      .then(r => {
        console.log(r?.data, 'rrrrrrrrrrrrrrrrrrrrr'),
          AsyncStorage.setItem('UserInfo', JSON.stringify(r?.data));
        toasterRef.current.showToaster({
          message: 'Profile is Updated',
          type: 'S',
        });
        setName(r?.data?.name), setEmail(r?.data?.email);
        setPhoneNumber(r?.data?.phone);
        setAddress(r?.data?.address);
        setCityselected(r?.data?.city);
        // setPincode(r?.data?.pincode)
        // setHeight(r?.data?.userHealthRecord?.height.toString())
        // setWeight(r?.data?.userHealthRecord?.weight.toString())
        // setGender(r?.data?.gender)
        // setLanguage(r?.data?.userHealthRecord?.language)
        setDob(r?.data?.dob);
        setProfilePic(r?.data?.avatar);
      })
      .catch(e => console.log(e, 'eeeeee'));
  };

  const Gender = ['Male', 'Female', 'Other'];
  const Language = ['Hindi', 'English'];
  const BloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-'];
  return (
    <>
      <Toaster ref={toasterRef} />

      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(195, 136, 247, 0.2)',
          backgroundOpacity: 0.1,
        }}>
        <HeaderComponent
          text={'Profile'}
          handleBackPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              padding: 10,
              paddingTop: 25,
            }}>
            <View>
              <View style={{}}>
                {profilePic ? (
                  <Image
                    source={{uri: profilePic}}
                    style={{height: 85, width: 85, borderRadius: 40}}
                  />
                ) : (
                  <View
                    style={{
                      backgroundColor: '#D2D4D6',
                      borderRadius: 80 / 2,
                      height: 80,
                      width: 80,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={assets.profileImg}
                      style={{
                        height: 65,
                        width: 65,
                        borderRadius: 35,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={{position: 'absolute', right: -18, bottom: -18}}
                  onPress={() => onUploadImage()}>
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={28}
                    name="pluscircle"
                    color={'#6750A4'}
                    style={{alignSelf: 'center', padding: 15}}
                  />
                </TouchableOpacity>
              </View>
              {/* {userInfo?.avatar?
         <Image source={{uri:userInfo?.avatar}} style={{ height:75,width:75,borderRadius:35}} />
         :<View style={{backgroundColor:'#D2D4D6',borderRadius:80/2,height:80,width:80,justifyContent:'center'}}>
          <Image source={assets.profileImg} style={{ height:65,width:65,borderRadius:35,alignSelf:'center'}} />
          </View>} */}
              {/* <Image source={assets.profilePic} style={{ height:75,width:75,borderRadius:35}} /> */}
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  position: 'absolute',
                  backgroundColor: '#57FB0A',
                  top: 0,
                  right: 0,
                }}></View>
            </View>
            <View style={{marginLeft: 22}}>
              <Text style={{fontWeight: '800', color: 'black', fontSize: 20}}>
                {name}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '300',
                  textDecorationLine: 'underline',
                }}>
                {email}
              </Text>
              <Text style={{fontWeight: '500', color: 'black', marginTop: 4}}>
                {citySelect}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              alignSelf: 'center',
              marginBottom: 28,
              padding: 20,
            }}
            onPress={() => setDisable(false)}>
            <MaterialIcon name={'pencil'} size={22} color={'#936DAC'} />
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView>
          <View style={{alignItems: 'center'}}>
            <TextInput
              label="Full Name"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              value={name}
              onChangeText={e => {
                setName(e);
              }}
              disabled={disable}
            />
            <TextInput
              label="E-mail"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              keyboardType="email-address"
              value={email}
              onChangeText={e => {
                setEmail(e);
              }}
              right={<TextInput.Icon name="email-outline" color={'red'} />}
              disabled={disable}
            />
            <TextInput
              label="Phone Number"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={e => {
                setPhoneNumber(e);
              }}
              maxLength={10}
              disabled={disable}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                marginBottom: 20,
                alignItems: 'center',
              }}>
              <SelectDropdown
                data={Gender}
                disabled={disable}
                onSelect={(selectedItem, index) => {
                  setGender(index + 1);
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
                defaultValue={'Gender1'}
                defaultButtonText="Gender2"
                dropdownStyle={
                  {
                    // width:'80%',
                  }
                }
                buttonStyle={{
                  width: '45%',
                  backgroundColor: 'white',
                  borderRadius: 8,
                  borderColor: '#6750A4',
                  borderWidth: 1,
                }}
                // renderCustomizedRowChild={
                //   <AppText.Text>hh</AppText.Text>
                // }
                // renderDropdownIcon={isOpened => {
                //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                // }}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View style={styles.dropdown3BtnChildStyle}>
                      <Text style={styles.dropdown3BtnTxt}>
                        {/* {selectedItem
                          ? selectedItem
                          : gender
                          ? 'Male'
                          : 'Female'} */}
                                        {selectedItem || Gender[gender - 1]}

                      </Text>
                      <FontAwesome
                        name="chevron-down"
                        color={'#444'}
                        size={18}
                      />
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.inputViewStyle}
                disabled={disable}
                >
                   <Text>
          {!open
            ? date?.toLocaleDateString() // Display selected date when not in DatePicker mode
            : ''}
        </Text>
                {/* <Text>{!dob ? date?.toLocaleDateString() : formatDate(dob)}</Text> */}
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
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                // maximumDate={new Date()}
                mode="date"
              
              />
            </View>
            <TextInput
              label="Address"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              value={address}
              onChangeText={e => {
                setAddress(e);
              }}
              disabled={disable}
            />
            <SelectDropdown
              data={stateData}
              disabled={disable}
              onSelect={(selectedItem, index) => {
                setselected(selectedItem);
                setSelectedState(selectedItem);
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
              defaultValue={'State'}
              defaultButtonText="State"
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
                marginBottom: 18,
              }}
              renderCustomizedButtonChild={(selectedItem, index) => {
                // setStateId(selectedItem?._id)
                // setSelectedItem(selectedItem)

                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <Text style={styles.dropdown3BtnTxt}>
                      {selectedItem ? selectedItem?.name : selectedState?.name}
                    </Text>
                    <FontAwesome name="chevron-down" color={'#444'} size={18} />
                  </View>
                );
              }}
            />

            <TextInput
              label="City"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              value={citySelect}
              onChangeText={e => {
                setCityselected(e);
              }}
              disabled={disable}
            />
            <TextInput
              label="Pincode"
              mode="outlined"
              style={{
                width: '90%',
                marginBottom: 20,
              }}
              value={pincode}
              onChangeText={e => {
                setPincode(e);
              }}
              maxLength={6}
              keyboardType="number-pad"
              disabled={disable}
            />
            <SelectDropdown
              data={Language}
              disabled={disable}
              onSelect={(selectedItem, index) => {
                setLanguage(index + 1);
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
                    {selectedItem || Language[language - 1]}

                    </Text>
                    <FontAwesome name="chevron-down" color={'#444'} size={18} />
                  </View>
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '94%',
                // justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View style={{width: '50%', alignItems: 'center'}}>
                <TextInput
                  label="Height"
                  mode="outlined"
                  style={{
                    width: '90%',
                    paddingRight: 20,
                  }}
                  value={height}
                  onChangeText={e => {
                    setHeight(e);
                  }}
                  keyboardType="number-pad"
                  disabled={disable}
                />

                <Text style={{position: 'absolute', right: 22, bottom: 15}}>
                  Cm
                </Text>
              </View>
              <View style={{width: '50%', alignItems: 'center'}}>
                <TextInput
                  label="Weight"
                  mode="outlined"
                  style={{
                    width: '90%',
                    paddingRight: 20,
                  }}
                  value={weight}
                  onChangeText={e => {
                    setWeight(e);
                  }}
                  keyboardType="number-pad"
                  disabled={disable}
                />
                <Text style={{position: 'absolute', right: 22, bottom: 15}}>
                  Kg
                </Text>
              </View>
            </View>
            <SelectDropdown
              data={BloodGroup}
              disabled={disable}
              onSelect={(selectedItem, index) => {
                setBloodGroup(index+1)
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
              defaultValue={'BloodGroupp'}
              defaultButtonText="BloodGroupp"
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
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    <Text style={styles.dropdown3BtnTxt}>
                    {selectedItem || BloodGroup[bloodGroup - 1]}
                    </Text>
                    <FontAwesome name="chevron-down" color={'#444'} size={18} />
                  </View>
                );
              }}
            />
          </View>
          <View style={{marginVertical: 20}}>
            <Button
              children={'Continue'}
              contentStyle={{
                backgroundColor: '#936DAC',
                width: '50%',
                paddingVertical: 4,
                borderRadius: 28,
                alignSelf: 'center',
              }}
              labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
              onPress={() => {
                handlePress();
              }}
              disabled={disable}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default MyProfile;
