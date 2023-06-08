import { View, Text, Image } from 'react-native'
import React from 'react'
import assets from '../../assets'
import { headerStyles } from './headerStyle'
import MIcon from 'react-native-vector-icons/SimpleLineIcons';

const HeaderComponent = ({text}) => {
    const styles =headerStyles
  return (
    <View style={{}}>
    <Image
    source={assets.headerBg}
    style={styles.bgImg}
    />
    <Image
    source={assets.headerCircle}
    style={styles.positionView}
    />
    <Image
    source={assets.headerBgCircle}
    style={styles.positionView}
    />
   { text?
   <>
  
               <View style={{justifyContent:'center',bottom:15,flexDirection:'row',position:'absolute',alignItems: 'center',}}>
               <MIcon
                // style={{marginLeft: 10,color:'red'}}
                size={28}
                name="arrow-left"
                color={'white'}
                style={{alignSelf:'center',padding:15,}}
              />
    <Text style={{color:'white',fontSize:20,}}>
{text}
  </Text>
   </View>
   </>
   :
   <View style={styles.circleImgView}>
   <Image
          source={assets.headerCircleImg}
          style={styles.positionView}
          />
    </View>}
          </View>
  )
}

export default HeaderComponent