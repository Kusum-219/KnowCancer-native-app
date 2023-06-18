import { View, Text,TouchableOpacity,Image, } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import assets from '../../assets'
import {TextInput,Button} from 'react-native-paper'
import MIcon from 'react-native-vector-icons/SimpleLineIcons';
import { RoutesConstant } from '../../navigators'

const AddHealthRecord = ({handlePress,arrowBack,navigation,image,handleHealthRecord}) => {
     // const image= false
  return (
    <>
    <View style={{flexDirection:'row',justifyContent: 'space-between',marginHorizontal:10,marginVertical:20}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={arrowBack}>
        <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={24}
                name="arrow-left"
                color={'black'}
                style={{padding:15,}}
              />
        </TouchableOpacity>
    <Text style={{  fontWeight:'700',color:'#131A42',fontSize:16}}>
        VIEW HEALTH RECORD
     </Text>
        </View>
     {image && <TouchableOpacity style={{backgroundColor: '#936CAB',borderRadius:24,paddingHorizontal:10,width:'30%',alignItems:'center',justifyContent:'center'}} onPress={handleHealthRecord}>
<Text style={{color:'white'}}>+ Add New</Text>
     </TouchableOpacity>}
    </View>
    {!image &&<TouchableOpacity style={{backgroundColor: '#936CAB',borderRadius:34,paddingHorizontal:10,width:'30%',alignItems:'center',justifyContent:'center',height:100,width:'60%',alignSelf:'center'}} onPress={handleHealthRecord}>
<Text style={{color:'white'}}>+ Add Health Record</Text>
     </TouchableOpacity>}
    <KeyboardAwareScrollView style={{}}>

{
   image &&    <>
       <View style={{paddingHorizontal:22,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:10}}>
     <Text style={{color:'#999999',fontSize:15}}>Updated On</Text>
<Text style={{color:'black',fontSize:15,fontWeight:'500'}}>{ new Date().toLocaleDateString()}</Text>

     </View>
    
     <View style={{width:'100%',}}>
     <Image
     source={{uri:image}}
     style={{height:400,width:'100%'}}
     resizeMode='contain'
     />
</View>
     </>
}

    

    
    
<View  style={{marginVertical:20,alignSelf:'center'}}>
<Button 
    children={'Done'}
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'100%',
        paddingVertical:4,
        borderRadius:24
    }}
    labelStyle={{fontSize:20,fontWeight:'500',color:'white'}}
    onPress={handlePress}
    />  
</View>
      </KeyboardAwareScrollView>
    </>
  )
}

export default AddHealthRecord