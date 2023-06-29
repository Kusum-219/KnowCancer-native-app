import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Alert} from 'react-native';
import {progressSteps} from './progressSteps/styles';
import assets from '../../assets';
import HeaderComponent from '../components/headerComponent/header';
import {RoutesConstant} from '../navigators';
import BasicDetail from './progressSteps/basicDetailsScreen';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import HealthRecord from './progressSteps/healthRecord';
import AddHealthRecord from './progressSteps/addHealthrecord';
import UploadRecord from './progressSteps/uploadRecord';
import {profileUpload, userManagement} from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProgressStepsProps {
  navigation?: any;
}

const ProgressSteps = ({navigation, route}: ProgressStepsProps) => {
  const styles = progressSteps;
  //   console.log(route?.params,'route');
  //   const signUpScreen = false;
  // const {signUpScreen}=route?.params

  const [index, setIndex] = React.useState(0);
  const [headerName, setHeaderName] = React.useState('Basic Details');
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [address, setAddress] = React.useState();
  const [gender, setGender] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [stateSelect, setselected] = React.useState('');
  const [citySelect, setCityselected] = React.useState('');
  const [language, setLanguage] = React.useState();
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [underTreatment, setUnderTreatment] = React.useState(false);
  const [newcase, setNewCase] = React.useState('');
  const [diagnosis, setDiagnosis] = React.useState('');
  const [stage, setStage] = React.useState('');
  const [bloodGroup, setBloodGroup] = React.useState('');
  const [image, setImage] = React.useState([]);
  const [pincode, setPincode] = React.useState();
  let dateVal =
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    date.getFullYear();
  console.log(dateVal, '5444');
  console.log(typeof Number(phoneNumber), 'pppp');
  console.log(image, 'image in index file');

  const attachmentsUpload = async blob => {
    const token = await AsyncStorage.getItem('RegistrationToken').then(r => {
      return r;
    });

    var formdata = new FormData();
    // formdata.append("file", blob);
    image.map(item => formdata.append('file', item));
    // formdata.append("file", image)
    formdata.append('type', '1');
    formdata.append('purpose', 'surgeon');

    console.log({formdata});
    // setAttachmentsUploading(true);

    var requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
      redirect: 'follow',
    };
    await fetch('http://3.110.179.66:3030/v1/upload-media', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result, 'result 86 line');
        // console.log(result.map((item) => item.link));
        // setAttachmentsUrl(result.map((item) => item.link));
        // setAttachmentsThumbnailsUrl(result.map((item) => item.thumbnail));
        // setAttachmentsMetadata(result.map((item) => item.metadata));
        // setAttachmentsUploading(false);
      })
      .catch(error => {
        console.log('error', error);
        // setAttachmentsUploading(false);
      });
  };

  const uploadRecord = async () => {
    setIndex('healthRecord'), setHeaderName('View Health Record');

    const token = await AsyncStorage.getItem('RegistrationToken').then(r => {
      return r;
    });
    console.log(token, 'tokennnnn');
    var formdata = new FormData();
    image.map(item => formdata.append('files', item));
    formdata.append('fileType', 1);
    formdata.append('purpose', 'profile');
    console.log(image, 'image in 103');
    var requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    };

    // await profileUpload(requestOptions)
    //   .then(result => {
    //     setIndex('healthRecord');
    //     setHeaderName('View Health Record');
    //     console.log(result, 'result');
    //   })
    //   .catch(err => console.log(err?.response, 'errrrr 38 line'));

    // await fetch('http://3.110.179.66:3030/v1/upload', requestOptions)
    // .then((response) => console.log(response.json(),'json'))
    // .then((result) => {
    //   console.log(result,'rrrrrrrrrrrrrrrrr1188888');
    //   console.log(result.map((item) => item.link));
    //   // setAttachmentsUrl(result.map((item) => item.link));
    //   // setAttachmentsThumbnailsUrl(result.map((item) => item.thumbnail));
    //   // setAttachmentsMetadata(result.map((item) => item.metadata));
    //   // setAttachmentsUploading(false);
    // })
    // .catch((error) => {
    //   console.log("error", error?.response);
    //   // setAttachmentsUploading(false);
    // });
    // attachmentsUpload()
  };
  console.log(typeof stateSelect?._id, 'stateSelect?._id');
  console.log(
    underTreatment,
    '-----',
    diagnosis?._id,
    '87777777777',
    stage,
    '666',
    diagnosis?._id,
    '666',
    gender,
  );
  const registrationFlow = async () => {
    const token = await AsyncStorage.getItem('RegistrationToken').then(r => {
      return r;
    });
    // var date = new Date('2010-10-11T00:00:00+05:30');

    console.log(token, 'token66');
    userManagement({
      registrationToken: token,
      name: name,
      phone: Number(phoneNumber),
      role: 3,
      gender: 1, // how to describe male,female
      dob: dateVal,
      address: address,
      city: citySelect?._id,
      pincode: pincode,
      state: stateSelect?._id,
      language: language, // same above
      healthRecord: [
        'https://vitmeds-dev.s3.ap-south-1.amazonaws.com/profile/2023/0527/1685204381954_1674828761748_full-body-checkup-bapa.pdf',
      ],
      height: height,
      weight: weight,
      bloodGroup: bloodGroup, // same
      underTreatment: underTreatment,
      diagnosis: diagnosis?._id,
      stage: stage, // same above
    })
      .then(result => {
        console.log(result, 'result in user management');
        navigation.navigate(RoutesConstant.HOME_PAGE);
      })
      .catch(err => {
        Alert.alert(
          'Error',
          err?.response?.data?.message || 'Enter valid number',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
        console.log(
          err?.response?.data,
          'err?.response?.dataerr?.response?.data',
        );
        // console.log(err?.response?.data?.message, 'err in user management');
      });
  };
  // console.log(name,'full name',email,phoneNumber,address,gender,date?.toLocaleDateString());
  const renderComponent = () => {
    // console.log(index, '19 linne');
    switch (index) {
      case 0:
        return (
          <BasicDetail
            handlePress={() => {
              setIndex(1), setHeaderName('Health Record');
            }}
            navigation={navigation}
            setName={setName}
            name={name}
            email={email}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            setAddress={setAddress}
            address={address}
            setGender={setGender}
            gender={gender}
            setDate={setDate}
            date={date}
            setselected={setselected}
            stateSelect={stateSelect}
            setCityselected={setCityselected}
            citySelect={citySelect}
            setPincode={setPincode}
            pincode={pincode}
          />
        );
      case 1:
        return (
          <HealthRecord
            handlePress={() => {
              setIndex('healthRecord'), setHeaderName('View Health Record');
            }}
            navigation={navigation}
            setLanguage={setLanguage}
            language={language}
            setHeight={setHeight}
            height={height}
            setWeight={setWeight}
            weight={weight}
            underTreatment={underTreatment}
            setUnderTreatment={setUnderTreatment}
            setNewCase={setNewCase}
            newcase={newcase}
            setDiagnosis={setDiagnosis}
            diagnosis={diagnosis}
            stage={stage}
            setStage={setStage}
            setBloodGroup={setBloodGroup}
            bloodGroup={bloodGroup}
          />
        );
      case 'healthRecord':
        return (
          <AddHealthRecord
            handlePress={() => {
              registrationFlow();
              // setIndex(2), setHeaderName('Health Record');
              //   navigation.navigate(RoutesConstant.)
            }}
            handleHealthRecord={() => {
              setIndex(2), setHeaderName('Health Record');
            }}
            navigation={navigation}
            arrowBack={() => {
              setIndex(1), setHeaderName('Health Record');
            }}
            image={image}
          />
        );
      case 2:
        return (
          <UploadRecord
            handlePress={() => uploadRecord()}
            navigation={navigation}
            setImage={setImage}
            image={image}
          />
        );
    }
  };

  const handlePress = () => {
    // console.log(index,'index 75');
    if (index == 0) {
      navigation.goBack();
    } else if (index == 1) {
      setHeaderName('Basic Detail');
      setIndex(0);
    } else if (index == 2) {
      setIndex(1);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(195, 136, 247, 0.2)',
        backgroundOpacity: 0.1,
      }}>
      {headerName == 'View Health Record' ? null : (
        <>
          <HeaderComponent text={headerName} handleBackPress={handlePress} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
              marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                  backgroundColor: '#936CAB',
                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 0 || index == 1 || index == 2 ? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: '#936CAB',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    1
                  </Text>
                )}
              </View>
              <Divider
                style={{
                  width: 85,
                  alignSelf: 'center',
                  //  ...Layout.selfCenter,
                  //  ...Gutters.smallVMargin,
                  borderWidth: 1,
                  borderColor: '#936CAB',
                  marginVertical: 10,
                }}
              />
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                  //   backgroundColor: '#936CAB',
                  backgroundColor:
                    index == 1 || index == 2 ? '#936CAB' : '#fff',

                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 1 || index == 2 ? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: '#936CAB',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    2
                  </Text>
                )}
              </View>
              <Divider
                style={{
                  width: 85,
                  alignSelf: 'center',
                  //  ...Layout.selfCenter,
                  //  ...Gutters.smallVMargin,
                  borderWidth: 1,
                  borderColor: '#936CAB',
                  marginVertical: 10,
                }}
              />
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                  backgroundColor:
                    index == 2 || index == 'healthRecord' ? '#936CAB' : '#fff',
                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 'healthRecord' || index == 2 ? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: '#936CAB',
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    3
                  </Text>
                )}
              </View>
            </View>
          </View>
        </>
      )}

      {renderComponent()}
    </View>
  );
};

export default ProgressSteps;
