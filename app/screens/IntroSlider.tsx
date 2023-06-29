import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";
import assets from "../assets";
import AppIntroSlider from "react-native-app-intro-slider";
import { RoutesConstant } from "../navigators";



const IntroSlider = ({navigation}) => {
  const RenderItem = ({item}: any) => {
    console.log(item?.key,'item');
    return (
     
      <View style={{backgroundColor:item?.key=='s1'?'#622864E5':item?.key=='s2'?'#5E51EABF':'#BF3DB7',flex:1}}>
        <TouchableOpacity
          style={{alignItems: 'flex-end', padding: 20}}
          onPress={() => handleIntroSkip()}>
          <Text style={[styles.navigationButtonText]}>
            Skip
          </Text>
        </TouchableOpacity>
        <View
          style={{
            // borderWidth: item?.key == 's3' ? 5 : 0,
            // borderColor: item?.key == 's3' ? '#000' : 'fff',
            borderRadius: 18,
            width:  '100%',
            height:'57%',
            justifyContent:'center',
            alignSelf:'center',

          }}>
          <Image
            source={item?.image}
            resizeMode="contain"
            style={[
              styles.introImageStyle,
              {alignSelf: 'center', width:'90%',            height:'100%',            },
            ]}
          />
        </View>
       
      
        {item?.text}
       
      </View>
    );
  };

  const handleIntroDone = () => {
    navigation.navigate(RoutesConstant.LOGIN, {
      signUpScreen: false,
    });
    // setShowApp(true);
    // let newUserData = {seen_walkthrough: true};
    // userInfoUpdate?.mutate(newUserData);
  };
  const handleIntroSkip = () => {
    navigation.navigate(RoutesConstant.LOGIN, {signUpScreen: false});
    // setShowApp(false);
    // let newUserData = {seen_walkthrough: true};
    // userInfoUpdate?.mutate(newUserData);
  };
  return (
    <>
    <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={() => handleIntroDone()}
        // showSkipButton={true}
        onSkip={() => handleIntroSkip()}
        showPrevButton={true}
       
        renderDoneButton={() => (
          <View style={[styles.row]}>
            <Text style={styles.navigationButtonText}>
              DONE
            </Text>
          </View>
        )}
        
        renderNextButton={() => (
          <View style={styles.row}>
            <Text style={styles.navigationButtonText}>
              NEXT
            </Text>
          </View>
        )}
        renderPrevButton={() => (
          <View style={styles.row}>
            <Text style={styles.navigationButtonText}>
              PREV
            </Text>
          </View>
        )}
        dotStyle={{
          backgroundColor: '#fff',
          height: 12,
          width: 12,
          borderRadius: 6,
          opacity: 0.2,
          // marginBottom: 20,
        }}
        activeDotStyle={{
          backgroundColor: '#fff',
          
          height: 12,
          width: 12,
          borderRadius: 6,
          // marginBottom: 20,
        }}

      />
    </>
  )
};

export default IntroSlider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    // padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    // padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    // height:'60%',
    // flex: 0.85,
    position: 'relative',
    width: '100%',
    // overflow:'hidden'
    // width: 350,
    // height: 200,
  },
  introTextStyle: {
    fontSize: 20,
    // color: 'white',
    textAlign: 'center',
    marginVertical: 3,
    paddingHorizontal: 25,
    // ...fontConfigRoboto?.regular,
    fontWeight: '300',
  },
  introTitleStyle: {
    fontSize: 33,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    textTransform: 'uppercase',
  },
  getStarted: {
    // fontWeight: '700',
    // color: Colors.primary,
    paddingHorizontal: 40,
    textAlign: 'center',
    // // fontSize: 24,

    fontSize: 30,
    top: 35,
    color:'#fff',
    fontWeight:'600'
    // // color: 'red',
    // position: 'absolute',
    // bottom: '20%',
    // // marginHorizontal: 20,
    // justifyContent: 'center',
    // bottom:30
    // textAlign: 'center',
    // backgroundColor:'yellow',
    // paddingTop:15,
    // flex:10,
    // justifyContent:'center',
    // position:'relative',
    // bottom:20,
    // zIndex:9999999
    // lineHeight:0
    // ...fontConfigRoboto?.regular,
    // fontSize: 16,
  },
  desc: {
    fontSize: 18,
    color: 'white',
    // ...fontConfigRoboto?.regular,
    fontWeight: '300',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -12,
    // backgroundColor: Colors.primary,
    // width: '30%',
    // paddingVertical: 10,
    // alignSelf: 'center',
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    // top:0,
    // position
  },
});

const slides = [
  {
    key: 's1',

    text: (
      <Text style={styles.getStarted}>
        {`Doctors & experts to\n help you`}
      </Text>
    ),
   

 
 
    image: assets.introSlider1,
  },
  {
    key: 's2',
    text: (
      <Text style={styles.getStarted}>
        {'Oncologist curated \n Answers and Consults.'}
      </Text>
    ),
    image: assets.introSlider2,
   
  },
  {
    key: 's3',
    text: (
      <Text style={[styles.getStarted]}>
        {` Videos to Help You More`}
      </Text>
    ),
    image: assets.introSlider3,
    // svg: <WalkThroughRoundup width={300} />,
    // backgroundColor: Colors.primary,
  },
];