import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/headerComponent/header'

const MyHealthRecord = ({navigation}) => {
    return (
        <>
        <View>
          <HeaderComponent
          text={'My Health Record'}
          handleBackPress={()=>navigation.goBack()}
          />
      
        </View>
       
        </>
      )
}

export default MyHealthRecord