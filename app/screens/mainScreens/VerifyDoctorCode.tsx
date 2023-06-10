import {
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React, { useLayoutEffect, useRef, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import IconFeather from "react-native-vector-icons/Feather";
import { RoutesConstant } from "../../navigators";
  
  const VerifyDoctorCode = () => {
    const [otp, setOtp] = useState("");
    const inputRefs = useRef([]);
  
    const handleOtpChange = (value, index) => {
      let newOtp = otp.split("");
      newOtp[index] = value;
      setOtp(newOtp.join(""));
  
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleKeyPress = (e, index) => {
      if (e.nativeEvent.key === "Backspace" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };
  
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    const handleContainerPress = () => {
      Keyboard.dismiss();
    };
  
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", width: "100%" }}
        behavior={Platform.select({ ios: "padding", android: null })}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      >
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
                Doctors
              </Text>
            </View>
          </View>
          {/* --------------CONTENT-------------- */}
  
          <TouchableWithoutFeedback onPress={handleContainerPress}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginTop: 20,
                  paddingHorizontal: 10,
                }}
              >
                Enter the 4 digit code received on your registered mobile number
              </Text>
              {/* -------------------OTP INPUTS----------------------- */}
              <View style={styles.container}>
                {Array.from({ length: 6 }, (_, index) => (
                  <View key={index} style={styles.square}>
                    <TextInput
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      style={styles.input}
                      maxLength={1}
                      keyboardType="numeric"
                      onChangeText={(value) => handleOtpChange(value, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      value={otp[index] ? otp[index] : ""}
                      autoFocus={index === 0} // Auto-focus on the first input
                    />
                  </View>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* --------------Connect-------------- */}
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 999,
              backgroundColor: "#936CAB",
              marginBottom: 10,
              alignItems: "center",
              marginHorizontal: 10,
            }}
            onPress={() => navigation.navigate(RoutesConstant.CHAT)}
          >
            <Text style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
              Connect
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default VerifyDoctorCode;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    square: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 5,
      borderRadius: 10,
    },
    input: {
      fontSize: 20,
      width: 50,
      height: 50,
      textAlign: "center",
    },
    pageContainer: {
      flex: 1,
      backgroundColor: "rgba(195, 136, 247, 0.2)",
      backgroundOpacity: 0.1,
    },
    container1: {
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
  });
  