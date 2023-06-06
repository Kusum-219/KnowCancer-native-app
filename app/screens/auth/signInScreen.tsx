import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SignInProps {}

const SignIn = (props: SignInProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22}}>SignIn Screen</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
