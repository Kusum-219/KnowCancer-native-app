import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/headerComponent/header'
import assets from '../../assets';
import { RoutesConstant } from '../../navigators';

const ProfileScreen = ({navigation}) => {
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
      title: 'Supports',
      icon: assets.support,
      navigation:RoutesConstant.PROFILE_PAGES
    },
  ];
  return (
    <View style={{flex:1, backgroundColor: "rgba(195, 136, 247, 0.2)",
    backgroundOpacity: 0.1,}}>
      <HeaderComponent text={'Profile'}/>
      <View style={{flex:3,marginTop:20}}>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
          <Image source={assets.profilePic} style={{ height:75,width:75,borderRadius:35}} />
          <View style={{ height:10,width:10,borderRadius:10,borderColor:'#9B9DFD',borderWidth:1,alignItems:'center',justifyContent:'center',position:'absolute'}}>

        </View>
        <View style={{ marginLeft:22}}>
          <Text style={{fontWeight: '800',color:'black',fontSize:20}}>Nikhil</Text>
          <Text style={{color:'black',fontWeight:'300',textDecorationLine:'underline'}}>nikhil.smith@gmail.com</Text>
          <Text style={{fontWeight: '500', color: 'black',marginTop:4,}}>
          Bangalore
          </Text>
        </View>
      </View>
   <View style={{marginHorizontal:25,marginTop:25}}>
   {DATA.map((item,index) => {
          return (
            <>
              <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',marginVertical: 15,justifyContent:'space-between'}} onPress={                   ()=> navigation.navigate(RoutesConstant.PROFILE_PAGES,{index})
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
   <TouchableOpacity style={ {flex:1,marginTop: 35,marginBottom:20,flexDirection:'row',alignItems:'center',marginHorizontal:25}} onPress={()=>navigation.navigate(RoutesConstant.LOGIN)}>
<View style={{
      height:35,width:35,
      backgroundColor:'#936CAB',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:24,
     }}>
        <Image 
        source={assets.logOut}
        style={{height:18,width:18,tintColor:'#E61323'}}
        />
        </View>
          <Text style={{marginLeft: 15,fontSize:16,color:'black',fontWeight:'500'}}>Logout</Text>
        </TouchableOpacity>
      {/* <Text>profileScreen</Text> */}
    </View>
  )
}

export default ProfileScreen