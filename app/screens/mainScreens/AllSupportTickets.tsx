import {StyleSheet, Text, View, Alert,ScrollView,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../components/headerComponent/header';
import {TextInput, Button} from 'react-native-paper';
import {createSupportTicket, getCloseSupportTicket, getSupportTicket} from '../../services/Auth';
import FeatherIcon  from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/SimpleLineIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RoutesConstant } from '../../navigators';

const ALLSupportTicket = ({navigation}) => {
  const [complain, setComplain] = useState('');
  const [description, setDescription] = useState('');
  const [openTicket, setOpenTicket] = useState();
  const [closeTicket, setCloseTicket] = useState();


useEffect(() => {
  getSupportTicket().then(r=>setOpenTicket(r?.data?.data))
  getCloseSupportTicket().then(r=>setCloseTicket(r?.data?.data))

}, [])
console.log(closeTicket,'closeTicketcloseTicket',openTicket);
  const handleTicket = () => {
  navigation.navigate(RoutesConstant.SUPPORT_TICKET)
  };
  return (
    <>
        <HeaderComponent
          text={'Support Tickets'}
          handleBackPress={() => navigation.goBack()}
        />
        <KeyboardAwareScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: '#713D73',
              fontWeight: '500',
              fontSize: 20,
              marginBottom: 5,
            }}>
            Open Tickets
          </Text>
          <View style={{backgroundColor: '#fff', padding: 15}}>
       {
       openTicket?.length>0? openTicket?.map((i,index)=>{
          
          return(
            <>
            <View>
<View
   style={{
     paddingTop: 10,
     paddingBottom: 8,
     flexDirection: 'row',
     justifyContent: 'space-between',
   }}>
   <Text style={{color: '#000', fontWeight: '600'}}>
     {i?.complainAbout}
   </Text>
   <Text style={{color: 'gray', fontWeight: '600'}}>
     Ticket ID: {i?.ticketNumber}
   </Text>
 </View>
 <Text>{i?.description}</Text>
 <Text>
   Ticket Created On:{' '}
   <Text style={{color: '#000', fontWeight: '500'}}>
     {'11/05/2022'}
   </Text>
 </Text>
 <View
   style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:25,alignItems:'center'}}>
   <View style={{flexDirection: 'row',}}>
     <View
       style={{
         backgroundColor: '#4CD964',
         borderRadius: 12,
         paddingHorizontal: 5,
        
       }}>
       <Text>Open</Text>
     </View>
     {/* <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'center'}}>
       <FeatherIcon name={'message-square'} color={'gray'} size={15} style={{marginTop:3}}/>
    

     <Text>2</Text>

     </View> */}
   </View>
   <TouchableOpacity onPress={()=>navigation.navigate(RoutesConstant.RAISED_TICKET,{ticketId:i?._id})}>
   <MIcon
     // style={{marginLeft: 10,color:'red'}}
     size={16}
     name="arrow-right"
     color={'#58B9FF'}
     // style={{alignSelf:'center',padding:15,}}
   />
     {/* <Text style={{fontSize: 28}}>{'>'}</Text> */}
   </TouchableOpacity>
 </View>
 </View>
{   openTicket.length !=index+1&& <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'gray', borderStyle: 'dashed',marginVertical:15 }} />
}      
      </>
          )
        }):<Text>No Ticket</Text>
       }
            {/* <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'gray', borderStyle: 'dashed',marginVertical:15 }} /> */}

            <View>
       
           
          
            </View>
          </View>

          <Text
            style={{
              color: '#713D73',
              fontWeight: '500',
              fontSize: 20,
              marginBottom: 5,
              marginTop:'10%'
            }}>
            Closed Tickets
          </Text>
          <View style={{backgroundColor: '#fff', padding: 15}}>
          {
      closeTicket?.length>0?  closeTicket?.map((i,index)=>{
          // const date =i?.createdAt

          // let dateVal 
          // (i?.createdAt?.getMonth() > 8 ? i?.createdAt?.getMonth() + 1 : '0' + (i?.createdAt?.getMonth() + 1)) +
          // '/' +
          // (i?.createdAt?.getDate() > 9 ? i?.createdAt?.getDate() : '0' + i?.createdAt?.getDate()) +
          // '/' +
          // i?.createdAt?.getFullYear();
          
          return(
            <>
            <View>
<View
   style={{
     paddingTop: 10,
     paddingBottom: 8,
     flexDirection: 'row',
     justifyContent: 'space-between',
   }}>
   <Text style={{color: '#000', fontWeight: '600'}}>
     {i?.complainAbout}
   </Text>
   <Text style={{color: 'gray', fontWeight: '600'}}>
     Ticket ID: {i?.ticketNumber}
   </Text>
 </View>
 <Text>{i?.description}</Text>
 <Text>
   Ticket Created On:{' '}
   <Text style={{color: '#000', fontWeight: '500'}}>
     {'11/05/2022'}
   </Text>
 </Text>
 <View
   style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:25,alignItems:'center'}}>
   <View style={{flexDirection: 'row',}}>
     <View
       style={{
         backgroundColor: '#4CD964',
         borderRadius: 12,
         paddingHorizontal: 5,
        
       }}>
       <Text>Open</Text>
     </View>
     {/* <View style={{flexDirection:'row',alignItems:'center',width:'50%',justifyContent:'center'}}>
       <FeatherIcon name={'message-square'} color={'gray'} size={15} style={{marginTop:3}}/>
    

     <Text>2</Text>

     </View> */}
   </View>
   <TouchableOpacity onPress={()=>navigation.navigate(RoutesConstant.RAISED_TICKET)}>
   <MIcon
     // style={{marginLeft: 10,color:'red'}}
     size={16}
     name="arrow-right"
     color={'#58B9FF'}
     // style={{alignSelf:'center',padding:15,}}
   />
     {/* <Text style={{fontSize: 28}}>{'>'}</Text> */}
   </TouchableOpacity>
 </View>
 </View>
{  closeTicket.length !=index+1 && <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: 'gray', borderStyle: 'dashed',marginVertical:15 }} />
}         
   </>
          )
        }):<Text>No Ticket</Text>
       }
          </View>
        </KeyboardAwareScrollView>
      <Button
        children="Create"
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

export default ALLSupportTicket;
