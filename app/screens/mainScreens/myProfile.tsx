import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/headerComponent/header'

const MyProfile = ({navigation}) => {
    return (
        <>
        <View>
          <HeaderComponent
          text={'My Profile'}
          handleBackPress={()=>navigation.goBack()}
          />
      
        </View>
       
        </>
      )
}

export default MyProfile