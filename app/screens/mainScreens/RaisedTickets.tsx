import {StyleSheet, Text, View, Alert,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/headerComponent/header';
import {TextInput, Button} from 'react-native-paper';
import {createSupportTicket, getSupportTicketDetail} from '../../services/Auth';
import FeatherIcon  from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/SimpleLineIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RoutesConstant } from '../../navigators';

const RaisedTickets = ({navigation,route}) => {
  const [complain, setComplain] = useState('');
  const [detail, setDetail] = useState('');
const {ticketId}= route?.params;
console.log(ticketId,'ticketId');

useEffect(() => {
  getSupportTicketDetail(ticketId).then(r=>{
    setDetail(r?.data)
    console.log(r?.data,'rrrr');
  }).catch(e=>console.log(e,'eeeeeee'))
}, [])

  const handleTicket = () => {
    console.log('Raised Tickets');
  navigation.navigate(RoutesConstant.HOME_PAGE)
  };
  return (
    <>
        <HeaderComponent
          text={'Raised Tickets'}
          handleBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView style={{margin: 20}}>
          <View style={{backgroundColor: '#fff', padding: 15,borderWidth:1,borderColor:'#936CAB'}}>
           <View>

              <Text style={{color: '#000', fontWeight: '400'}}>
              Ticket ID: {detail?.ticketNumber}
              </Text>
             
            <Text style={{color: '#000', fontWeight: '400',paddingVertical:10}}>Complaint About:<Text>{detail?.complainAbout}</Text></Text>
            <Text style={{color: '#000', fontWeight: '400',paddingBottom:25}}>
              Description:{' '}
              <Text>
                {detail?.description}
              </Text>
            </Text>
          
            </View>
          </View>
          {/* <View style={{backgroundColor: '#fff', padding: 15,borderWidth:1,borderColor:'#936CAB',marginTop:25}}>

              <Text style={{color: '#000', fontWeight: '400',paddingBottom:8}}>
              Admin response
              </Text>
             
            <Text style={{color: '#000', fontWeight: '400',paddingBottom:25}}>
              Lorem Ipsum
            </Text>
          
          </View> */}
          {/* <View style={{backgroundColor: '#fff', padding: 15,borderWidth:1,borderColor:'#936CAB',marginTop:25}}>

<Text style={{color: '#000', fontWeight: '400',paddingBottom:8}}>
  Respond:
</Text>

<Text style={{color: '#000', fontWeight: '400',paddingBottom:25}}>
Lorem Ipsum
</Text>

</View> */}
        </KeyboardAwareScrollView>
      <Button
        children="Submit"
        contentStyle={{
          backgroundColor: '#936DAC',
          width: '70%',
          paddingVertical: 4,
          borderRadius: 28,
          alignSelf: 'center',
          marginVertical:5
        }}
        labelStyle={{fontSize: 20, fontWeight: '500', color: 'white'}}
        onPress={() => handleTicket()}
      />
    </>
  );
};

export default RaisedTickets;
