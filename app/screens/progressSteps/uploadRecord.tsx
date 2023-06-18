import { View, Text,Image,TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import assets from '../../assets';
import {TextInput,Button} from 'react-native-paper'
import MIcon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from 'react-native-image-crop-picker';

const UploadRecord = ({handlePress,setImage,image}) => {

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
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {}
  };
  const onCaptureImage = async () => {
    const permission =
        requestCameraPermission()
    if (permission) {
      ImagePicker.openCamera({
        includeBase64: true,
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        multiple: true
      }).then(image => {
        setImage(image?.path)
        console.log(image?.path);
      }); 
    }
  };

  const onUploadImage = () => {
   const permission= requestCameraPermission();
   console.log(permission,'permission');
   if (permission) {
    console.log('object');
    ImagePicker.openPicker({
      includeBase64: true,
      width: 250,
      height: 250,
      cropping: true,
      mediaType: 'photo',
      multiple: true
    }).then(image => {
      setImage(image[0]?.path)

      console.log(image[0]?.path,'image 57');
    });
   }
   
  };
  return (
    <View style={{flex:1}}>
        <View style={{
            marginTop:'20%',
            height:300,
            backgroundColor: 'white',
            flex:1,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            paddingVertical:25
        }}>
          <TouchableOpacity style={{
alignSelf:'flex-end',position: 'absolute',padding:18,
          }}
          onPress={()=>setImage('')}
          >
          <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={26}
                name="close"
                color={'#8A8072'}
                style={{}}
              />
          </TouchableOpacity>
<KeyboardAwareScrollView>
<View style={{alignItems:'center'}}>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginBottom:18}}>Health Record</Text>
<Text  style={{fontSize:15,fontWeight:'500',color:'black'}}>Upload Attachment</Text>
</View>
<View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
              marginTop:35,
              width:'75%',
              justifyContent: 'space-between',
              alignSelf:'center'
            }}>
           {
image?<View style={{justifyContent:'center',flex:1}}>
  <Image   source={{
          uri: image,
        }}
        style={{
          height:250,
          width:250,
          alignSelf:'center'
        }}
        />
  </View>:
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
   onPress={()=>{
     onCaptureImage()
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
   onPress={()=>{
     onUploadImage()
   }}
   >
    
   <Image
     source={assets.gallery}
     height={30}
     width={30}
     style={{}}
   />
                 <Text>Gallery</Text>

 </TouchableOpacity>
  </>

           }
          </View>
         <View style={{marginVertical:35}}>
         <Button
    children={'Upload'}
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'60%',
        paddingVertical:4,
        alignSelf: 'center',
        borderRadius:34
        
    }}
    labelStyle={{fontSize:20,fontWeight:'500',color:'white'}}
    onPress={handlePress}
    />
         </View>
</KeyboardAwareScrollView>
        </View>
     
     </View>
  )
}

export default UploadRecord