import { View, Text } from 'react-native'
import React from 'react'
import MyProfile from './myProfile';
import SupportTicket from './SupportTicket';
import MyHealthRecord from './myHealthRecord';
import ALLSupportTicket from './AllSupportTickets';
import ReviewScreen from './reviewScreen';

const ProfileIndex = ({navigation,route}) => {
    const {index,userInfo}=route?.params || {}
    console.log(index,'indexxx');
    console.log(userInfo,'userInfo');
    const renderComponent = () => {
        console.log(index, '19 linne');
      switch (index) {
          case 0:
            return (
             <MyProfile 
             navigation={navigation}
             />
            );
          case 1:
            return (
             <MyHealthRecord 
             navigation={navigation}
             />
            );
          case 2:
            return (
              <ALLSupportTicket
                // handlePress={() => setIndex('healthRecord')}
                navigation={navigation}
              />
            );
            case 3:
              return(
                <ReviewScreen
                navigation={navigation}

                />
              )
          default:
            return (
              <MyProfile 
              navigation={navigation}
              />
             );
        }
      };
  return (
    <View style={{ backgroundColor: 'rgba(195, 136, 247, 0.2)',
    backgroundOpacity: 0.1,flex:1}}>
        {renderComponent()}
      {/* <Text>ProfileIndex</Text> */}
    </View>
  )
}

export default ProfileIndex