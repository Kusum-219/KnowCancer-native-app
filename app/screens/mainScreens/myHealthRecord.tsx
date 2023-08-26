import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/headerComponent/header';
import {allHealthRecord, allHealthRecordEdit, imageUpload} from '../../services/Auth';
import Pdf from 'react-native-pdf';
import {ActivityIndicator, Button} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toaster from '../../components/toast/Toaster';

const MyHealthRecord = ({navigation}) => {
  const [healthRecord, setHealthRecord] = useState([]);
  const [document, setDocument] = useState();
  const [disable, setDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toasterRef = React.useRef<any>();

  console.log(healthRecord, 'healthRecordhealthRecord');
  useEffect(() => {
    allHealthRecord()
      .then(r => {
        setHealthRecord(r?.data?.healthRecord);
        console.log(r?.data?.healthRecord, 'all reacord');
      })
      .catch(e => {
        console.log(e?.message, 'erroe');
      });
  }, []);

  useEffect(() => {
    if (document) {
      imageUpload(document)?.then(result => {
        // setDocument(result?.data);
        const newData = result?.data?.map((item) => item?.filePath);
        console.log(newData,'newData');
        // newData.map(item => {
        //   // console.log(item,'377777777777777777777777');
        //   return 
        // });
        // setLoading(false)
        setHealthRecord([...healthRecord, ...newData]);
        setDisable(false)
        console.log(result?.data, 'resultttttttt in 34');
      });
    }
   
  
    
  }, [document])
  const selectDoc = async () => {
    // setLoading(true)
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
        allowMultiSelection: true,
      });
      setDocument(doc)
      
      //  setLoading(false)
      // await imageUpload(doc)?.then(result => {
      //   console.log(result?.data,'resultttttttt');
      // })
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
 const uploadHealthRecord = ()=>{
  allHealthRecordEdit({"healthRecord":healthRecord}).then(r=>{
    console.log(r,'r in 7744444444444444444');
    toasterRef.current.showToaster(
      {
       message:'Health Record Updated Successfully',
       type:'S'
      }
     );
  }).catch(e=>{
    console.log(e,'error');
  })
 }
 const handleLoadComplete = (numberOfPages, filePath) => {
  // PDF is fully loaded, update your UI or perform any action here
  setIsLoading(false);
};
  return (
    <>
      <View style={{flex:1}}>
      <Toaster ref={toasterRef} />
        <HeaderComponent
          text={'My Health Record'}
          handleBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView contentContainerStyle={{}} nestedScrollEnabled>
        <View style={{marginTop: 30}}>
          {healthRecord?.map(data => {
            const filePath = data?.match?.(/\.(jpg|png)$/i)
              ? data?.split?.('.').pop()?.toLowerCase()
              : 'pdf';
              console.log(filePath,'filePath');
            return (
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  padding: 0,
                  height: 300,
                  marginVertical:10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 8,
                  flex:1
                }}>

                {filePath == 'pdf' ? (
                  <>

                  <Pdf
                    style={{
                      flex: 1,
                      borderRadius: 8,

                      // width: '100%',
                     
                    }}
                    source={{uri: data}}
                    onLoadComplete={handleLoadComplete}

                    onError={error => {
                      console.log(`Error while loading PDF: ${error}`);
                    }}
                    trustAllCerts={false}
                    // onLoadProgress={()=>{
                    //   setIsLoading(true)
                    // }}
                    // activityIndicator={null}
                    // activityIndicatorProps={{color:'transparent',progressTintColor:'transparent'}}
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
                ) : (
                  <Image
                    source={{uri: data}}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="stretch"
                  />
                )}

              </View>
            );
          })}
          {}
        </View>
        <View style={{marginVertical: 20, alignSelf: 'center', marginTop: 35}}>
          <Button
            children={'Add New Health Record'}
            contentStyle={{
              backgroundColor: '#936DAC',
              width: '100%',
              paddingVertical: 4,
              borderRadius: 24,
            }}
            labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
            onPress={() => {
              selectDoc();
              console.log('');
            }}
          />
        </View>
        <View style={{marginVertical: 10, alignSelf: 'center'}}>
          <Button
            children={'Upload Health Record'}
            contentStyle={{
              backgroundColor: '#936DAC',
              width: '100%',
              paddingVertical: 4,
              borderRadius: 24,
            }}
            disabled={disable}
            labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
            onPress={() => {
              uploadHealthRecord()
              // console.log('');
            }}
          />
        </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default MyHealthRecord;
