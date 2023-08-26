import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import assets from '../../assets';
import {TextInput, Button, ActivityIndicator} from 'react-native-paper';
import MIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from "react-native-document-picker";
import { imageUpload } from '../../services/Auth';
import WebView from 'react-native-webview';
import Pdf from 'react-native-pdf';

const UploadRecord = ({handlePress, setImage, image,documentFiles,setDocumentFiles}) => {
  console.log(image.length, 'lengthh');
  const healthRecord=true
  const [document, setDocument] = useState();
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const pdfUrl = 'https://knowcancer-dev.s3.ap-south-1.amazonaws.com/documents/2023/0712/1689176727254_AGENDA%20%2807.07.23%29.pdf';

  console.log(document,'document',documentFiles);
  useEffect(() => {
    if (document) {
      imageUpload(document)?.then(result => {
        setDocumentFiles(result?.data)
        setLoading(false)

        console.log(result?.data,'resultttttttt');
      }) 
    }
   
  
    
  }, [document])
  
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
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('2222222222222');
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
            console.log(i?.file,'i in 68 line ',i?.path,'======',i?.type);
            return i;
            // console.log(i?.path,'pathhhhhhhhhhhh 62222222222')
          });
          setImage(images);
          // console.log(image,'60======>');
          // setImage(image[0]?.path)
  
          // console.log(image, 'image 57');
        });
        // onCaptureImage()
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN){
        Alert.alert('Camera Permission Required','Please enable camera access in your device settings to use this feature.')
        console.log('23333333333333');
        // onCaptureImage()
      }
    } catch (err) {}
  };
  const onCaptureImage = async () => {
    const permission = requestCameraPermission();
    // if (permission) {
      ImagePicker.openCamera({
        // includeBase64: true,
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
        multiple: true,
      }).then(image => {
        console.log(image,'imafe, 522222222');
        // const images = image.map(i => {
        //   console.log(i?.file,'i in 68 line ',i?.path,'======',i?.type);
        //   return i;
        //   // console.log(i?.path,'pathhhhhhhhhhhh 62222222222')
        // });
        console.log(image?.path,'image?.path');
        // setImage(image);
        setImage([image]);
        console.log(image?.path,'image 533');
      });
    // }
  };

  const onUploadImage = () => {
    const permission = requestCameraPermission();
    console.log(permission, 'permission');
    // if (permission) {
      console.log('59999999999999999');
     
    // }
  };
  console.log(image, 'imagessss in 7666666666666666666');
  const removeImg = index => {
    let newImages = [...image];
    newImages.splice(index, 1);
    setImage(newImages);
  };
  const removeDoc = index => {
    let newDoc = [...documentFiles];
    newDoc.splice(index, 1);
    setDocumentFiles(newDoc);
  };
  
  const selectDoc = async()=>{
    setLoading(true)
    try {
      const doc = await DocumentPicker.pick({
        type:[DocumentPicker.types.pdf,DocumentPicker.types.images],
        allowMultiSelection:true
      });
      setDocument(doc)
    //  setLoading(false)
      // await imageUpload(doc)?.then(result => {
      //   console.log(result?.data,'resultttttttt');
      // })
    console.log(doc,'docccc');
    
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("error -----", err);
      } else {
        console.log(err,'errr');
        throw err;
      }
    }
    }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop:12,
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
                marginBottom: 15,
              }}>
              Health Record
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
              Upload Attachment
            </Text>
          </View>
       {   healthRecord?
        loading?
        <>
          <ActivityIndicator animating={true} color={'purple'} style={{marginTop:25}}/>

          </>
        :
     (  documentFiles?.length>0?
     <>
     {
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flex:1,justifyContent:'center'}}>
      <View style={{flexDirection:'row',flex:1,justifyContent:'center',flexWrap:'wrap'}}>
     
     {
       documentFiles?.map((data,index)=>{
        const pdfUri = 'https://knowcancer-dev.s3.ap-south-1.amazonaws.com/documents/2023/0712/1689180098451_1689179894634_ielts-academic-writing-task-2-activity.pdf';
        const filePath = data?.filePath.match(/\.(jpg|png)$/i) ? data?.filePath.split('.').pop().toLowerCase() : 'pdf';

        return(
          <View style={{height:150,width:120,alignSelf:'center',marginTop:30,marginHorizontal:15}}>
          {/* <PDFView
          style={{ flex: 1,height:100,width:100 ,borderColor:'gray',borderWidth:1,borderRadius:8}}
          source={{uri: data?.filePath}}
        /> */}
    <View style={{height:120,width:120 ,borderColor:'gray',borderWidth:1,borderRadius:8,justifyContent:'center',alignItems:'center',}}>
    {filePath=='pdf'?
    <>
    <Pdf
          style={{ flex: 1,width:'100%' ,borderRadius:8,}}
          source={{uri: data?.filePath}}
          onLoadComplete={(numberOfPages, filePath) => {
            setIsLoading(false);

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
     style={{height:100,width:100}}
     resizeMode='stretch'
     />}
    </View>
         <TouchableOpacity
                          style={{
                            backgroundColor: '#936CAB',
                            position: 'absolute',
                            zIndex: 999999,
                            right: -15,
                            top:-8,
                            // bottom: 0,
                            borderRadius: 16,
                            padding: 4,
                            // bottom:0
                          }}
                          onPress={() => {
                            removeDoc(index);
                          }}>
                          <MIcon
                            // style={{marginLeft: 10,color:'red'}}
                            size={24}
                            name="close"
                            color={'#fff'}
                            
                          />
                        </TouchableOpacity>
        </View>
        
        )
      })
     }
      </View>
      </ScrollView>
     }
     </>:
     <View style={{alignSelf:'center',marginTop:35}}>
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
                    selectDoc()
                    // onUploadImage();
                  }}>
                  <Image
                    source={assets.gallery}
                    height={30}
                    width={30}
                    style={{}}
                  />
                  <Text>Files</Text>
                </TouchableOpacity>
       </View>)
       :
       
      <View
            style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
              marginTop: 15,
              width: '80%',
              // justifyContent: 'space-between',
              alignSelf: 'center',
              // backgroundColor: 'red',
              // alignItems:'center'
            }}>
            {image.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    // marginHorizontal: 10,
                    marginVertical: 15,
                    // alignSelf:'center',
                    // backgroundColor:'pink',
                    // width:'100%'
                    // justifyContent:'center'
                  }}>
                  {image.map((item, index) => {
                    console.log(item, 'itemsssssssssssssssssssss');
                    return (
                      <>
                        <Image
                          source={{
                            uri: item?.path,
                          }}
                          style={{
                            height: 260,
                            width: 260,
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
          
          }
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
              disabled={isLoading}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default UploadRecord;
