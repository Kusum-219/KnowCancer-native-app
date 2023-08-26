import { View, Text,Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComponent from '../../components/headerComponent/header'
import assets from '../../assets';
import { RoutesConstant } from '../../navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";

const ProfileScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = React.useState();
  const isFocused = useIsFocused();

  const DATA = [
    {
      title: 'My Profile',
      icon: assets.person,
      navigation:RoutesConstant.PROFILE_PAGES
    //   navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
    //     index:1
    //   })
    },
    {
      title: 'My Health Records',
      icon: assets.healthRecord,
      navigation:RoutesConstant.PROFILE_PAGES
    //   navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
    //     index:2
    //   })
    },
    // {
    //   title: 'Invites Friends',
    //   icon: assets.invite
    // //   navigation:navigation.navigate(RoutesConstant.PROFILE_DESCRIPTION,{
    // //     index:3
    // //   })
    // },
    {
      title: 'Support',
      icon: assets.support,
      navigation:RoutesConstant.PROFILE_PAGES
    },
    {
      title: 'Review',
      icon: assets.feedback,
      navigation:RoutesConstant.PROFILE_PAGES
    },
  ];

  useEffect(() => {

    AsyncStorage.getItem('UserInfo').then((result) => {
      // return (
        const data= JSON.parse(result)
        setUserInfo(data)


      })
  }, [isFocused])
console.log(userInfo,'infooooooooo');
  return (
    <View style={{flex:1, backgroundColor: "rgba(195, 136, 247, 0.2)",
    backgroundOpacity: 0.1,}}>
      <HeaderComponent text={'Profile'} handleBackPress={()=>navigation.navigate(RoutesConstant.HOME_PAGE)}/>
<ScrollView>
<View style={{flex:3,marginTop:20}}>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
      <View>
        <View>
         {userInfo?.avatar?
         <Image source={{uri:userInfo?.avatar}} style={{ height:75,width:75,borderRadius:35}} />
         :<View style={{backgroundColor:'#D2D4D6',borderRadius:80/2,height:80,width:80,justifyContent:'center'}}>
          <Image source={assets.profileImg} style={{ height:65,width:65,borderRadius:35,alignSelf:'center'}} />
          </View>}
          </View>
          <View style={{ height:20,width:20,borderRadius:10,position:'absolute',backgroundColor:'#57FB0A',top:0,right:0}}>

        </View>
        </View>
        <View style={{ marginLeft:22}}>
          <Text style={{fontWeight: '800',color:'black',fontSize:20}}>{userInfo?.name}</Text>
          <Text style={{color:'black',fontWeight:'300',textDecorationLine:'underline'}}>{userInfo?.email}</Text>
          <Text style={{fontWeight: '500', color: 'black',marginTop:4,}}>
          {userInfo?.city}
          </Text>
        </View>
      </View>
   <View style={{marginHorizontal:25,marginTop:25}}>
   {DATA.map((item,index) => {
          return (
            <>
              <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',marginVertical: 15,justifyContent:'space-between'}} onPress={                   ()=> navigation.navigate(RoutesConstant.PROFILE_PAGES,{index,userInfo})
   }>
      <View style={{flexDirection:'row',alignItems:'center'}}>
     <View style={{
      height:35,width:35,
      backgroundColor:'#936CAB',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:24,
     }}>
     <Image
        source={item?.icon}
        style={{height:22,width:22,tintColor:'white'}}
        />
     </View>
        {/* {item?.icon} */}
                <Text style={{marginLeft: 25,fontSize:16,color:'black',fontWeight:'500'}}>
                  {item?.title}
                </Text>
      </View>
                <Image
        source={assets?.rightArrow}
        // style={{height:30,width:30,}}
        />
              </TouchableOpacity>
              {/* <View
                style={{
                  height: 1,
                  width: '100%',
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderStyle: 'dashed',
                  zIndex: 0,
                  marginVertical: 15,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: 1,
                    backgroundColor: 'white',
                    zIndex: 1,
                  }}
                />
              </View> */}
            </>
          );
        })}


   </View>
      </View>
   <TouchableOpacity style={ {flex:1,marginTop: 35,marginBottom:20,flexDirection:'row',alignItems:'center',marginHorizontal:25}} onPress={()=>{
     AsyncStorage.removeItem('accessToken'),
     navigation.navigate(RoutesConstant.LOGIN)
    }}>
<View style={{
      height:35,width:35,
      backgroundColor:'#936CAB',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:24,
     }}>
        <Image
        source={assets.logOut}
        style={{height:18,width:18,tintColor:'#fff',marginLeft:3}}
        />
        </View>
          <Text style={{marginLeft: 15,fontSize:16,color:'black',fontWeight:'500'}}>Logout</Text>
        </TouchableOpacity>
</ScrollView>
    </View>
  )
}

export default ProfileScreen