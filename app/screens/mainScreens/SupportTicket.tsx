import { StyleSheet, Text, View,Alert } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../../components/headerComponent/header'
import {TextInput,Button} from 'react-native-paper';
import { createSupportTicket } from '../../services/Auth';
import Toaster from '../../components/toast/Toaster';
const SupportTicket = ({navigation}) => {
  const [complain, setComplain] = useState("");
  const [description, setDescription] = useState("");
  const toasterRef = React.useRef<any>();

  const handleTicket = ()=>{
    createSupportTicket({
      "complainAbout":complain,
      "description":description,
      "attachments":"https://knowcancer-dev.s3.ap-south-1.amazonaws.com/supportTicket/2023/0614/1686717342439_1682698614728_Lalpath%2Bsample%20%281%29.pdf"
    }).then((result) => {
      if (result?.data?._id) {
        toasterRef.current.showToaster(
          {
            message:'Support Ticket Created Successfully',
           type:'S'
          }
         );

      }
      console.log(result?.data?._id,'results in support ticket');
    }).catch((err) => {
      toasterRef.current.showToaster(
        {
         message: err?.response?.data?.message || ' Something went wrong',
         type:'E'
        }
       );

      console.log(err?.response,'error in support ticket');
    });
  }
  return (
    <>
    <View>
    <Toaster ref={toasterRef} />

      <HeaderComponent
      text={'Create Your Support Tickets'}
      handleBackPress={()=>navigation.goBack()}
      />
   <View style={{marginHorizontal:15,marginTop:30,justifyContent:'center',alignItems:'center',borderRadius:8,}}>
   <TextInput
      label="Complaint About"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20
      }}
value={complain}
onChangeText={(e)=>{
  setComplain(e)
}}
    />
      <TextInput
      label="Description"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20,
        height:120
      }}
      multiline
      value={description}
onChangeText={(e)=>{
  setDescription(e)
}}
    />
      <TextInput
      label="Attachment"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20
      }}
    />
   </View>
    </View>
    <Button
    children='Create'
    contentStyle={{
        backgroundColor:'#936DAC',
        width:'70%',
        paddingVertical:4,
      borderRadius:28,
      alignSelf:'center'


    }}
    labelStyle={{fontSize:20,fontWeight:'500',color:'white'}}
    onPress={()=>handleTicket()}
    />
    </>
  )
}

export default SupportTicket

