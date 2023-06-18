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
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";
import assets from "../../assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RoutesConstant } from "../../navigators";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [userInfo, setUserInfo] = useState()
  useEffect(() => {
    AsyncStorage.getItem('UserInfo').then(r=> setUserInfo(r));
  }, [])
  console.log(userInfo,'userInfo');
  const [carouselData, setCarouselData] = useState([
    {
      title: "Direct Consult",
      image: assets.introSlider,
      description:
        "Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.",
      href:RoutesConstant.DIRECT_CONSULT,
    },
    {
      title: "Video Guidance",
      image: assets.introSlider,
      description:
        " Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.",
        href:RoutesConstant.DIRECT_CONSULT,
      },
    {
      title: "Chat & Consult",
      image: assets.introSlider,
      description:
        " Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.",
        href:RoutesConstant.CHAT,
      },
  ]);

  const renderItem = ({ item }) => (
    <View key={item.title} style={styles.carouselCard}>
      <View style={styles.innerCard}>
        <Image style={styles.cardImage} source={item.image} />
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(item.href)}
          style={styles.cardButton}
        >
          <Text style={styles.whiteText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      {/* -----------------HEADER CARD ------------- */}
      <View style={styles.headerCard}>
        <View style={styles.circleOne}></View>
        <View style={styles.circleTwo}></View>
        <Image
          style={styles.headerImage}
          source={assets.headerImg}
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Hey,Nikhil</Text>
          <Text style={styles.whiteText}>Hey,Nikhil</Text>
          <Text style={styles.welcome}>
            Welcome to <Text style={styles.knowcancer}>kNOcancer</Text>
          </Text>
        </View>
      </View>
      {/* ----------CONTENT------------- */}
      <KeyboardAwareScrollView style={styles.container}>
        {/*--------------------- SEARCHBAR------------------- */}
        <View
          style={styles.search}
          // className="flex-row space-x-2 flex-1 border border-gray-300 rounded-lg items-center pr-2"
        >
          <IconFeather name="search" size={20} color="#000000" />
          <TextInput placeholder="Search" placeholderTextColor={'#000'} />
        </View>
        {/* ---------HEADING---------- */}
        <Text style={styles.title}>
          Bringing Cancer Treatment and help on Chat !!
        </Text>
        {/* -----------HORIXONTAL CAROUSEL (FLATLIST) CARDS------------------- */}
        <FlatList
          data={carouselData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: 8,
          }}
        />
        {/* -----------------KNOWWLEDGE SECTION------------------- */}
        {/* ---------HEADING---------- */}
        <Text style={styles.title}>Little Knowledge section for you</Text>
        {/* ---------------BLOG CARD----------------- */}
        <View style={styles.blogCard}>
          <View style={styles.blogText}>
            <Text style={styles.blogTitle}>Medicine Can Save You</Text>
            <Text style={styles.cardDescription}>
              {
                "Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem."
              }
            </Text>
            <Text style={styles.cardDescription}>
              Irure incididunt ex esse im Lorem velit sint sit consectetur
              eiusmod sit Lorem.
            </Text>
          </View>
          <View style={styles.blogImage}>
            <Image
              style={{ borderRadius: 10 }}
              source={assets.pixaBy}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "rgba(195, 136, 247, 0.2)",
    backgroundOpacity: 0.1,
  },
  container: {
    paddingHorizontal: 10,
  },
  headerCard: {
    backgroundColor: "#713D73",
    height: 196,
    padding: 10,
    position: "relative",
    borderRadius: 12,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  circleOne: {
    backgroundColor: "#7D5B92",
    borderRadius: 9999999,
    position: "absolute",
    width: 123,
    height: 114,
    left: -21,
    top: -11.71,
    zIndex: 30,
  },
  circleTwo: {
    backgroundColor: "#7E5380",
    backgroundOpacity: "87%",
    borderRadius: 9999999,
    height: 301,
    width: 301,
    position: "absolute",
    top: -105,
    left: -112,
    zIndex: 10,
  },
  headerImage: {
    height: 150,
    zIndex: 40,
    bottom: -10,
    left: 20,
    position: "absolute",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "left",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  textContainer: {
    color: "#FFFFFF",
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  welcome: {
    zIndex: 50,
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    marginTop: 50,
  },
  knowcancer: {
    fontSize: 36,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    alignItems:'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color:'#000'
  },
  carouselCard: {
    backgroundColor: "#936CAB",
    paddingTop: 60,
    minHeight: 250,
    width: 210,
    marginLeft: 10,
    borderRadius: 12,
  },
  innerCard: {
    borderRadius: 12,
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  cardImage: {
    width: 150,
    marginTop: -40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 2,
    color:'#000'
  },
  cardDescription: {
    color: "#938f99",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "justify",
    paddingHorizontal: 5,
  },
  cardButton: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "#936CAB",
  },
  blogCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0px 4px 4px #936CAB",
    padding: 10,
    justifyContent: "space-between",
    marginTop: 10,
  },
  blogText: {
    width: "59%",
  },
  blogImage: {
    width: "39%",
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: 500,
    color:'#000'
  },
});
