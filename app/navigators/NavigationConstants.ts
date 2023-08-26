import {NavigatorParamList} from '@/navigators/AppNavigator.types';

const RoutesConstant: {[key: string]: keyof NavigatorParamList} = {
  LOGIN: 'login',
  OTP:'otp',
  PROGRESSTEPS:'progressSteps',
  HOME_PAGE:'homePage',
  CHAT_PAGE:'chatPage',
  SETTING_PAGE:'settingPage',
  INTROSLIDER:'introSlider',
  PROFILE_PAGES:'profilePages',
  DOCTORS:'doctors',
  DIRECT_CONSULT:'directDoctors',
  CHAT:'chat',
  VERIFY_DOCTOR:'verifyDoctor',
  SIGNUP:'signUp',
  SUPPORT_TICKET:'supportTicket',
  RAISED_TICKET:'raisedTickets',
  REVIEW_SCREEN:'reviewScreen'
};

export default RoutesConstant;
