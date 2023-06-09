import {NavigatorParamList} from '@/navigators/AppNavigator.types';

const RoutesConstant: {[key: string]: keyof NavigatorParamList} = {
  LOGIN: 'login',
  OTP:'otp',
  PROGRESSTEPS:'progressSteps',
  HOME_PAGE:'homePage',
  CHAT_PAGE:'chatPage',
  SETTING_PAGE:'settingPage',
};

export default RoutesConstant;
