import { StyleSheet, Text, View,Image, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import assets from '../../assets/index'
import MIcon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { imageUpload, profileImageUpload } from '../../services/Auth';

const ProfileUpload = ({handlePress,onhadleProfilePic,profilePic,setProfilePic}) => {
  console.log(typeof handlePress,'handlePress');
  const [image, setImage] = useState()
  console.log(profilePic,'profilePic');
  // const [imageShow, setImageShow] = useState()
const handleRecord = ()=>{
  // if (!profilePic) {
  //   Al
  // }
  // console./log('13333333');
  handlePress()
}
  // const [profilePic, setProfilePic] = useState()
  useEffect(() => {
    profileImageUpload(image)?.then(result => {
const pic = result?.data[0]?.filePath
      console.log(result?.data,'profile image upload',result?.data[0]?.filePath);
      setProfilePic(pic)

      console.log(result?.data?.path,'resultttttttt');
    }) 

  //  }

  }, [image])
  console.log(profilePic,'profilepic');
// console.log(imageShow,'imageShowimageShowimageShow');
  const requestCameraPermission = async () => {
    try {
      console.log('2111111111111');
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
      console.log(granted,'grantedgranted');
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           ImagePicker.openPicker({
        // includeBase64: true,
        width: 250,
        height: 250,
        cropping: true,
        mediaType: 'photo',
        multiple: true,
      }).then(image => {
        setImage(image)
        console.log({image}, 'imgaeee in 44 line');
        // const images = image.map(i => {
        //   console.log(i?.file,'i in 68 line ',i?.path,'======',i?.type);
        //   return i;
        //   // console.log(i?.path,'pathhhhhhhhhhhh 62222222222')
        // });
        // setImage(images);
        // console.log(image,'60======>');
        // setImage(image[0]?.path)

        // console.log(image, 'image 57');
      });
        console.log('2222222222222');
        // onCaptureImage()
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN){
        Alert.alert('Camera Permission Required','Please enable camera access in your device settings to use this feature.')
        console.log('23333333333333');
        // onCaptureImage()
      }
    } catch (err) {}
  };
  const onUploadImage = () => {
    const permission = requestCameraPermission().then(r=>{
      console.log(r,'rrrr');
    }).catch(e=>{
      console.log(e,'eeee');
    })
    console.log(permission,'permission');
    // console.log(permission, 'permission');
    // if (true) {
    //   console.log('59999999999999999');
   
    // }
  };
  return (
    <View style={{marginTop:30}}>
      <Text style={{color:'#6750A4',fontSize:24,fontWeight:'700',textAlign:'center'}}>Upload a profile picture</Text>
<View>
<View style={{height:200,width:200,justifyContent:'center',alignSelf:'center',backgroundColor:'#D2D4D6',borderRadius:200,marginTop:'15%'}}>
{profilePic?
  <Image 
  source={{uri:profilePic}}
  style={{height:200,width:200,alignSelf:'center',borderRadius:100}}
  resizeMode='cover'
  />
:<Image 
  source={assets.profileImg}
  style={{height:120,width:120,alignSelf:'center',tintColor:'gray'}}
  />}
   <TouchableOpacity style={{position:'absolute',right: -10,bottom:-8,}} onPress={()=>onUploadImage()}>
  <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={45}
                name="pluscircle"
                color={'#6750A4'}
                style={{alignSelf:'center',padding:15,}}
              />
  </TouchableOpacity>
</View>
<View style={{marginTop: '20%'}}>
          <Button
            children={'Upload Profile Pic'}
            contentStyle={{
              backgroundColor: '#936DAC',
              width: '80%',
              paddingVertical: 4,
              borderRadius: 24,
              alignSelf:'center'
            }}
            labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
            onPress={()=>{
              Alert.alert('Success','Profile Pic Uploaded', [

                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])
            }}
            disabled={!profilePic}
          />
        </View>
<View style={{marginVertical: 30}}>
          <Button
            children={'Upload Health Record'}
            contentStyle={{
              backgroundColor: '#936DAC',
              width: '80%',
              paddingVertical: 4,
              borderRadius: 24,
              alignSelf:'center'
            }}
            labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
            onPress={()=>handleRecord()}
          />
        </View>
</View>

    </View>
  )
}

export default ProfileUpload

