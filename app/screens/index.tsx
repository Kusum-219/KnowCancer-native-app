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
import {imageUpload, userManagement} from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toaster from '../components/toast/Toaster';
import DocumentPicker from 'react-native-document-picker';
import ProfileUpload from './progressSteps/profileUpload';

interface ProgressStepsProps {
  navigation?: any;
}

const ProgressSteps = ({navigation, route}: ProgressStepsProps) => {
  const styles = progressSteps;
  //   console.log(route?.params,'route');
  //   const signUpScreen = false;
  // const {signUpScreen}=route?.params
  const toasterRef = React.useRef<any>();

  const [index, setIndex] = React.useState(0);
  const [headerName, setHeaderName] = React.useState('Basic Details');
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [address, setAddress] = React.useState();
  const [gender, setGender] = React.useState();
  const [dobDate, setDobDate] = React.useState();
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
  const [uploadImg, setUploadImage] = React.useState();
  const [documentFiles, setDocumentFiles] = React.useState();
  const [allDocumentFiles, setAllDocumentFiles] = React.useState(documentFiles);
  const [profilePic, setProfilePic] = React.useState();
  console.log(profilePic, 'index piccc');
  React.useEffect(() => {
    if (allDocumentFiles) {
      setAllDocumentFiles(prevDataArray => [
        ...prevDataArray,
        ...documentFiles,
      ]);
    } else if (documentFiles) {
      setAllDocumentFiles(documentFiles);
    }
  }, [documentFiles]);

  const healthRecord = allDocumentFiles?.map(item => item.filePath);
  console.log(allDocumentFiles, 'allDocumentFilesallDocumentFiles');
  console.log(healthRecord, 'healthRecordhealthRecordhealthRecord');

  console.log(documentFiles, 'documentFilesdocumentFiles');
  // const [imageType, setImageType] = React.useState([]);
  const [pincode, setPincode] = React.useState();
  console.log(pincode, 'pincode');
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
  };

  const uploadRecord = async () => {
    setIndex('healthRecord'), setHeaderName('View Health Record');

    // const token = await AsyncStorage.getItem('RegistrationToken').then(r => {
    //   return r;
    // });
    // console.log(token, 'tokennnnn');
    // let formdata = new FormData();
    // image.map(item => formdata.append('files', item));
    // formdata.append('files', image[0]);
    // formdata.append('fileType', 2);
    // formdata.append('purpose', 'documents');
    // console.log(image[0], 'image in 103');
    // var requestOptions = {
    //   // method: 'POST',

    //   body: formdata,
    //   redirect: 'follow',
    // };
    // await imageUpload(image)
    // .then(result => {

    //   console.log( 'result in image upload',result?.data);
    //   setUploadImage(result?.data)
    //   if (result?.data) {
    //     setIndex('healthRecord'), setHeaderName('View Health Record');
    //   }
    // })
    // .catch(err => console.log(err?.response?.data, 'errrrr 38 line',err?.response,'Error',err));
  };
  console.log(signUpdata, 'signUpdata');
  const registrationFlow = async () => {
    const token = await AsyncStorage.getItem('RegistrationToken').then(r => {
      return r;
    });
    // var date = new Date('2010-10-11T00:00:00+05:30');

    userManagement({
      registrationToken: token,
      name: name,
      phone: Number(phoneNumber),
      role: 3,
      gender: gender, // how to describe male,female
      dob: dateVal,
      address: address,
      city: citySelect,
      pincode: pincode,
      state: stateSelect?._id,
      language: language, // same above
      healthRecord: healthRecord,
      height: height,
      weight: weight,
      bloodGroup: bloodGroup, // same
      underTreatment: underTreatment,
      diagnosis: diagnosis?._id,
      stage: stage,
      avatar: profilePic, // same above
    })
      .then(result => {
        console.log(result?.data, 'result in user management');
        navigation.navigate(RoutesConstant.HOME_PAGE);
        AsyncStorage.setItem('accessToken', result?.data?.accessToken);

        AsyncStorage.setItem('UserInfo', JSON.stringify(result?.data?.user));
      })
      .catch(err => {
        toasterRef.current.showToaster({
          message: err?.response?.data?.message || 'Enter valid number',
          type: 'E',
        });
        console.log(
          err?.response?.data,
          'err?.response?.dataerr?.response?.data',
        );
        // console.log(err?.response?.data?.message, 'err in user management');
      });
  };
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc],
        allowMultiSelection: true,
      });

      await imageUpload(doc).then(result => {
        console.log(result?.data, 'resultttttttt');
      });
      console.log(doc, 'docccc');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('error -----', err);
      } else {
        console.log(err, 'errr');
        throw err;
      }
    }
  };

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const AlertPopUp = alertVal => {
    // Alert.alert('Error',`${alertVal} is required` || 'The field is required', [

    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ])
    toasterRef.current.showToaster({
      message: `${alertVal} is required`,
      type: 'E',
    });
  };

  const onNextPress = () => {
    // setIndex('profileUpload'),
    // setHeaderName('Profile Upload');
    // if (!language) {
    //   return AlertPopUp('Language');
    // } else if (!bloodGroup) {
    //   return AlertPopUp('Blood-Group');
    // } else if (!height) {
    //   return AlertPopUp('Height');
    // } else if (!weight) {
    //   return AlertPopUp('Weight');
    // } else {
      setIndex('profileUpload'), setHeaderName('Profile Upload');
      // handlePress()
    // }
  };
  const onHandleHealthPress = () => {
    console.log('object');
    // if (!profilePic) {
    //   toasterRef.current.showToaster(
    //     {
    //      message:'Please Upload Profile Pic',
    //      type:'E'
    //     }
    //    );
    // }else{
    setIndex('healthRecord'), setHeaderName('View Health Record');
    // }
    // setIndex('healthRecord'), setHeaderName('View Health Record');

    // handlePress()
  };

  const onHandlePress = () => {
    // setIndex(1), setHeaderName('Health Record');
    // handlePress()

    // if (!name) {
    //   return AlertPopUp('Name');
    // } else if (reg.test(email) == false) {
    //   return AlertPopUp('Valid email');
    // } else if (!phoneNumber) {
    //   return AlertPopUp('Phone Number');
    // } else if (!gender) {
    //   return AlertPopUp('Gender');
    // } else if (!date) {
    //   return AlertPopUp('DOB');
    // } else if (!stateSelect) {
    //   return AlertPopUp('State');
    // } else if (!citySelect) {
    //   return AlertPopUp('City');
    // } else if (!pincode) {
    //   return AlertPopUp('Pincode');
    // } else {
      setIndex(1), setHeaderName('Health Record');
    // }
  };
  // console.log(name,'full name',email,phoneNumber,address,gender,date?.toLocaleDateString());
  const renderComponent = () => {
    // console.log(index, '19 linne');
    switch (index) {
      case 0:
        return (
          <BasicDetail
            handlePress={() => onHandlePress()}
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
              onNextPress();
              // onHandleHealthPress()
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
      case 'profileUpload':
        return (
          <ProfileUpload
            handlePress={() => {
              onHandleHealthPress();
            }}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
          />
        );
      case 'healthRecord':
        return (
          <AddHealthRecord
            handlePress={() => {
              // registrationFlow();
              // setIndex(2), setHeaderName('Health Record');
              //   navigation.navigate(RoutesConstant.)
            }}
            handleHealthRecord={() => {
              // selectDoc()
              setIndex(2), setHeaderName('Health Record');
              // setDocumentFiles([])
            }}
            handleHealthRecordNew={() => {
              // selectDoc()
              setIndex(2), setHeaderName('Health Record');
              setDocumentFiles([]);
            }}
            navigation={navigation}
            arrowBack={() => {
              setIndex('profileUpload');
            }}
            image={uploadImg}
            documentFiles={documentFiles}
            allDocumentFiles={allDocumentFiles}
          />
        );
      case 2:
        return (
          <UploadRecord
            handlePress={() => uploadRecord()}
            navigation={navigation}
            setImage={setImage}
            image={image}
            documentFiles={documentFiles}
            setDocumentFiles={setDocumentFiles}
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
      <Toaster ref={toasterRef} />

      {headerName == 'View Health Record' ||
      headerName == 'Profile Upload' ? null : (
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
