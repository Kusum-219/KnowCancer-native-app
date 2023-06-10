import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/headerComponent/header'
import {TextInput,Button} from 'react-native-paper';
const SupportTicket = ({navigation}) => {
  return (
    <>
    <View>
      <HeaderComponent
      text={'Create Your Support Tickets'}
      handleBackPress={()=>navigation.goBack()}
      />
   <View style={{marginHorizontal:15,marginTop:30,justifyContent:'center',alignItems:'center',borderRadius:8}}>
   <TextInput
      label="Complaint About"
      mode='outlined'
      style={{
        width:'90%',
        marginBottom:20
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
    onPress={()=>console.log('onPress')}
    />
    </>
  )
}

export default SupportTicket

