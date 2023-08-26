import {StyleSheet} from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    toast: {
      position: 'absolute',
      right: 0,
      width: '100%',
      top: -30,
      zIndex: 999999,
    },
    content: {
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      padding: 16,
      backgroundColor: 'purple',
    },
    toastMessageContainer: {
      justifyContent: 'flex-start',
      paddingLeft: 18,
      flex: 1,
    },
    titleText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '800',
    },
    messageText: {
      color: 'white',
      fontSize: 16,
      textAlign:'center'
      // flex: 1,
    },
  });
