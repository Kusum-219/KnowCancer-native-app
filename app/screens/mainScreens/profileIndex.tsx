import { View, Text } from 'react-native'
import React from 'react'
import MyProfile from './myProfile';
import SupportTicket from './SupportTicket';
import MyHealthRecord from './myHealthRecord';

const ProfileIndex = ({navigation,route}) => {
    const {index}=route?.params
    console.log(index,'indexxx');
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
              <SupportTicket
                // handlePress={() => setIndex('healthRecord')}
                navigation={navigation}
              />
            );
        }
      };
  return (
    <View>
        {renderComponent()}
      {/* <Text>ProfileIndex</Text> */}
    </View>
  )
}

export default ProfileIndex