import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Animated, Easing, TouchableOpacity, View, Text} from 'react-native';
// import SuccessToastIcon from '@/assets/pennyImages/success.svg';
// import ErrorToastIcon from '@/assets/pennyImages/error_outline-white.1e50ed6deda63b993455e279d0d8a2f1.svg';
import {createStyles} from './ToasterStyle';
// import {useKeyboard} from '../../hooks/useKeyboard';
import {ToastIconInterface, ToastTitleInterface} from './ToastInterface';
// import {Colors} from '@/themes/Variables';
// import {AppText} from '@/components';
const toastTitle: ToastTitleInterface = {
  E: 'FAILED',
  S: 'SUCCESS',
};


const initialToast = {
  title: '',
  message: '',
  type: null,
  visible: false,
};

export const Toaster = (props: any, ref: React.Ref<unknown> | undefined) => {
  // const colors = Colors;
  const translateYRef = useRef(new Animated.Value(-70));
  const [toast, setToast] = useState(initialToast);
  const timeout = useRef<any>();
  // const {keyboardHeight, keyboardShown} = useKeyboard();
  const TOAST_TITLE = toast.title
    ? toast.title
    : toast.type
    ? toastTitle[toast.type]
    : null;
  // const TOAST_ICON: any = toast.type ? toastIcon[toast.type] : null;
  const TOAST_COLOR =
    toast.type === 'E' ? 'red': '#936DAC';
  const styles = React.useMemo(() => createStyles())

  useImperativeHandle(ref, () => ({
    showToaster: showToaster,
    hideToaster: hideToaster,
  }));
  const showToaster = useCallback((args: any) => {
    setToast({...initialToast, visible: true, ...args});
    showToast();
  }, []);

  const hideToaster = useCallback(() => {
    setToast({...initialToast, type: toast.type});
    hideToast();
  }, [toast]);

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hideToaster, 4000);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [hideToaster, toast]);

  const showToast = () => {
    // const toValue =
    //   keyboardShown && Platform.OS === 'ios' ? keyboardHeight + 550 : 650;
    Animated.timing(translateYRef.current, {
      duration: 300,
      easing: Easing.linear,
      toValue: 50,
      useNativeDriver: true,
    }).start();
  };

  const hideToast = () => {
    Animated.timing(translateYRef.current, {
      duration: 300,
      easing: Easing.linear,
      toValue: -80,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.toast,
        {transform: [{translateY: translateYRef.current}]},
      ]}>
      <TouchableOpacity
        onPress={hideToaster}
        style={[
          styles.content,
          TOAST_COLOR ? {backgroundColor: TOAST_COLOR} : {},
        ]}
        activeOpacity={1}>
        {/* {TOAST_ICON && <TOAST_ICON width={30} height={30} />} */}
        <View style={styles.toastMessageContainer}>
          <Text style={styles.messageText}>
            {toast.message}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default React.forwardRef(Toaster);
