import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import assets from '../../assets';
import {TextInput,Button} from 'react-native-paper'
import MIcon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const UploadRecord = () => {
  return (
    <View style={{flex:1}}>
        <View style={{
            marginTop:'20%',
            height:300,
            backgroundColor: 'white',
            flex:1,
            borderRadius:24,
            paddingVertical:25
        }}>
          <TouchableOpacity style={{
alignSelf:'flex-end',position: 'absolute',padding:10,
          }}>
          <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={22}
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
              }}>
               
              <Image
                source={assets.gallery}
                height={30}
                width={30}
                style={{}}
              />
                            <Text>Gallery</Text>

            </TouchableOpacity>
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
    />
         </View>
</KeyboardAwareScrollView>
        </View>
     
     </View>
  )
}

export default UploadRecord