import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconFeather from "react-native-vector-icons/Feather";
import assets from "../../assets";
import { RoutesConstant } from "../../navigators";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const item = {
  title: "Direct Consult",
  image: assets.introSlider,
  description:
    "Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.Irure incididunt ex esse magna Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  velit sint sit consectetur eiusmod sit Lorem.",
  href: "DirectConsult",
};

const DirectConsult = ({navigation}) => {
//   const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      {/* -----------------HEADER CARD ------------- */}
      <View style={styles.headerCard}>
        <View style={styles.circleOne}></View>
        <View style={styles.circleTwo}></View>
        <View
          style={{
            zIndex: 50,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconFeather name="chevron-left" size={32} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              marginLeft: 10,
            }}
          >
            Direct Consult
          </Text>
        </View>
      </View>
      {/* --------------CONTENT-------------- */}
      <View style={{ paddingHorizontal: 10, marginTop: 20, flex: 1 }}>
        <Text style={{ fontSize: 36, fontWeight: 500,color:'#000' }}>
          Consult, where the Help Start..!
        </Text>
        <KeyboardAwareScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate(RoutesConstant.DOCTORS)}
          key={item.title}
          style={styles.carouselCard}
        >
          <View style={styles.innerCard}>
            <Image style={styles.cardImage} source={item.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={{ marginTop: 10 }}>4.9 | 750+ Ratings</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
      {/* --------------ADD NEW DOCTOR BUTTON-------------- */}
      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 999,
          backgroundColor: "#936CAB",
          marginVertical: 30,
          alignItems: "center",
          marginHorizontal: 10,
        }}
        onPress={() => navigation.navigate(RoutesConstant.VERIFY_DOCTOR)}
      >
        <Text style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
          + Connect a new Doctor
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DirectConsult;

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
    alignItems: "flex-start",
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
  carouselCard: {
    backgroundColor: "#936CAB",
    paddingTop: 60,
    width: "100%",
    height: 300,
    // marginLeft: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  innerCard: {
    borderRadius: 12,
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
    padding: 15,
  },
  cardImage: {
    width: 150,
    marginTop: -50,
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 2,
    color: "#000",

  },
  cardDescription: {
    color: "#938f99",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "justify",
    marginTop: 10,
  },
  cardButton: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: "#936CAB",
  },
});
