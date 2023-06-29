import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import assets from '../../assets';
import {TextInput, Button} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';

const UploadRecord = ({handlePress, setImage, image}) => {
  console.log(image.length, 'lengthh');
  // const [image, setImage] = useState()
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
      } else {
      }
    } catch (err) {}
  };
  const onCaptureImage = async () => {
    const permission = requestCameraPermission();
    if (permission) {
      ImagePicker.openCamera({
        includeBase64: true,
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        multiple: true,
      }).then(image => {
        setImage(image?.path);
        console.log(image?.path);
      });
    }
  };

  const onUploadImage = () => {
    const permission = requestCameraPermission();
    console.log(permission, 'permission');
    if (permission) {
      console.log('object');
      ImagePicker.openPicker({
        includeBase64: true,
        width: 250,
        height: 250,
        cropping: true,
        mediaType: 'photo',
        multiple: true,
      }).then(image => {
        console.log({image}, 'imgaeee in 60 line');
        const images = image.map(i => {
          console.log(i?.file,'i in 68 line ');
          return i?.path;
          // console.log(i?.path,'pathhhhhhhhhhhh 62222222222')
        });
        setImage(images);
        // console.log(image,'60======>');
        // setImage(image[0]?.path)

        console.log(image[0]?.path, 'image 57');
      });
    }
  };
  console.log(image, 'imagessss in 7666666666666666666');
  const removeImg = index => {
    let newImages = [...image];
    newImages.splice(index, 1);
    setImage(newImages);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: '20%',
          height: 300,
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: 25,
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            padding: 18,
          }}
          onPress={() => setImage('')}>
          <MIcon
            // style={{marginLeft: 10,color:'red'}}
            size={26}
            name="close"
            color={'#8A8072'}
            style={{}}
          />
        </TouchableOpacity>
        <KeyboardAwareScrollView>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'black',
                marginBottom: 18,
              }}>
              Health Record
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
              Upload Attachment
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
              marginTop: 35,
              width: image.length > 0 ? '90%' : '75%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            {image.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginVertical: 15,
                  }}>
                  {image.map((item, index) => {
                    console.log(item, 'itemsssssssssssssssssssss');
                    return (
                      <>
                        <Image
                          source={{
                            uri: item,
                          }}
                          style={{
                            height: 250,
                            width: 250,
                            alignSelf: 'center',
                            marginHorizontal: 10,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: 'gray',
                          }}
                        />
                        <TouchableOpacity
                          style={{}}
                          onPress={() => {
                            removeImg(index);
                          }}>
                          <MIcon
                            // style={{marginLeft: 10,color:'red'}}
                            size={24}
                            name="close"
                            color={'#fff'}
                            style={{
                              backgroundColor: '#936CAB',
                              position: 'absolute',
                              zIndex: 999999,
                              right: '10%',
                              top: -10,
                              borderRadius: 16,
                              padding: 4,
                            }}
                          />
                        </TouchableOpacity>
                      </>
                    );
                  })}
                  {/* <Image   source={{
          uri: image[0],
        }}
        style={{
          height:250,
          width:250,
          alignSelf:'center'
        }}
        /> */}
                </View>
              </ScrollView>
            ) : (
              <>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 110,
                    borderWidth: 2,
                    borderColor: '#936CAB',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginRight: 25,
                    backgroundColor: '#fff',
                  }}
                  onPress={() => {
                    onCaptureImage();
                  }}
                  //   onPress={() => {
                  //     navigation.navigate(RoutesConstant.OTP);
                  //   }}
                >
                  <Image
                    source={assets.camera}
                    height={32}
                    width={32}
                    style={{}}
                  />
                  <Text>Take a Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 110,
                    borderWidth: 2,
                    borderColor: '#936CAB',
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    backgroundColor: '#fff',
                  }}
                  onPress={() => {
                    onUploadImage();
                  }}>
                  <Image
                    source={assets.gallery}
                    height={30}
                    width={30}
                    style={{}}
                  />
                  <Text>Gallery</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <View style={{marginVertical: 35}}>
            <Button
              children={'Upload'}
              contentStyle={{
                backgroundColor: '#936DAC',
                width: '60%',
                paddingVertical: 4,
                alignSelf: 'center',
                borderRadius: 34,
              }}
              labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
              onPress={handlePress}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default UploadRecord;
