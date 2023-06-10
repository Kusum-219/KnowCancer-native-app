import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";

const Chat = () => {
  const route = useRoute();
  const [message, setMessage] = useState("");
  const scrollViewRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const sendMessage = async () => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
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
            Doctors
          </Text>
        </View>
      </View>
      {/* --------------CONTENT-------------- */}
      {loading ? (
        <ActivityIndicator size={"large"} color={"#0000fa"} />
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center", width: "100%" }}
          behavior={Platform.select({ ios: "padding", android: null })}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 1 }}>
              <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() =>
                  scrollViewRef.current.scrollToEnd({ animated: true })
                }
                style={styles.chatArea}
              >
                {messages.map((msg) => {
                  return (
                    <View
                      key={msg.id}
                      style={[
                        styles.messageContainer,
                        // msg.sender.role === 1
                        //   ?
                          styles.rightMessageContainer
                        //   : styles.leftMessageContainer,
                      ]}
                    >
                      <Text style={styles.messageText}>{msg}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Type your message here"
                  value={message}
                  onChangeText={(text) => setMessage(text)}
                  z
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={sendMessage}
                >
                  {sendLoading ? (
                    <ActivityIndicator size="small" color="#cccccc" />
                  ) : (
                    <Text style={styles.sendButtonText}>Send</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  leftMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },
  rightMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  messageText: {
    fontSize: 16,
    color:'#000'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#7E5380",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Chat;
