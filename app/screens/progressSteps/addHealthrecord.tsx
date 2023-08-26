import { View, Text,TouchableOpacity,Image, } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import assets from '../../assets'
import {TextInput,Button, ActivityIndicator} from 'react-native-paper'
import MIcon from 'react-native-vector-icons/SimpleLineIcons';
import FileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pdf from 'react-native-pdf';


import { RoutesConstant } from '../../navigators'
import WebView from 'react-native-webview'

const AddHealthRecord = ({handlePress,arrowBack,navigation,image,handleHealthRecord,documentFiles,handleHealthRecordNew,allDocumentFiles}) => {
     // const image= false
     console.log(image,'image');
     console.log(documentFiles,'filessssss',);
     console.log(allDocumentFiles,'allDocumentFiles in add health ');
     const [isLoading, setIsLoading] = useState(true);

//      const uniqueArray = Array?.from(new Set(mergedArray?.map(JSON.stringify))).map(JSON.parse);
// console.log(uniqueArray,'uniquwwwwwwww');
     
  return (
    <>
    <View style={{flexDirection:'row',justifyContent: 'space-between',marginHorizontal:3,marginVertical:20,}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
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
     <TouchableOpacity style={{backgroundColor: '#936CAB',borderRadius:24,paddingHorizontal:10,width:'32%',alignItems:'center',justifyContent:'flex-end',paddingVertical:11,alignContent:'flex-end',marginLeft:25}} onPress={handleHealthRecordNew}>
<Text style={{color:'white'}}>+ Add New</Text>
     </TouchableOpacity>
        </View>
      
    </View>
    {!allDocumentFiles &&<TouchableOpacity style={{height:'40%',width:'90%',borderWidth:1,borderColor:'#936CAB',alignSelf:'center',borderRadius:10,alignItems:'center',justifyContent:'center'}} activeOpacity={0.5} onPress={handleHealthRecord}>
      <FileIcon name={'file-document-edit-outline'} size={45} tintColor={'red'}/>
<Text style={{fontSize:18}}>
Upload Health Record 
</Text>
    </TouchableOpacity>}
    {/* {image &&<TouchableOpacity style={{backgroundColor: '#936CAB',borderRadius:34,paddingHorizontal:10,width:'30%',alignItems:'center',justifyContent:'center',height:100,width:'60%',alignSelf:'center'}} onPress={handleHealthRecord}>
<Text style={{color:'white'}}>+ Add Health Record</Text>
     </TouchableOpacity>} */}
    <KeyboardAwareScrollView style={{}}>

{
   allDocumentFiles?.length>0 &&    <>
      { allDocumentFiles?.map((data,index)=>{

        const filePath = data?.filePath.match(/\.(jpg|png)$/i) ? data?.filePath.split('.').pop().toLowerCase() : 'pdf';
        console.log(filePath,'filePathfilePath');
return(
  <>
  <View style={{paddingHorizontal:22,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:10}}>
     <Text style={{color:'#999999',fontSize:15}}>Updated On</Text>
<Text style={{color:'black',fontSize:15,fontWeight:'500'}}>{ new Date().toLocaleDateString()}</Text>

     </View>
    
     <View style={{width:'90%',borderWidth:1,alignSelf:'center',borderColor:'gray',borderRadius:12,padding:0,height:300,}}>
     {filePath=='pdf'?
     <>
     <Pdf
          style={{ flex: 1,width:'100%' ,borderRadius:14}}
          source={{uri: data?.filePath}}
          onLoadComplete={(numberOfPages, filePath) => {
            setIsLoading(false)
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onError={(error) => {
            console.log(`Error while loading PDF: ${error}`);
          }}
          trustAllCerts={false}
          renderActivityIndicator={()=>{
            <ActivityIndicator size="large" />
          }}
        />
         {isLoading && (
        <ActivityIndicator
          size="small"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}
        />
      )}
        </>
        :
        <Image
     source={{uri:data?.filePath}}
     style={{height:'100%',width:'100%'}}
     resizeMode='stretch'
     />
        }
          
      {/* <Text>
        PDF FILE : {index+1} {data?.filePath}
      </Text> */}
     {/* <Image
     source={{uri:image[0]?.filePath}}
     style={{height:320,width:'100%'}}
     resizeMode='contain'
     /> */}
</View>
  </>
)
       })}
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