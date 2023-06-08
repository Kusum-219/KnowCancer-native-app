import {NavigatorParamList} from '@/navigators/AppNavigator.types';

const RoutesConstant: {[key: string]: keyof NavigatorParamList} = {
  LOGIN: 'login',
  OTP:'otp',
  PROGRESSTEPS:'progressSteps',
};

export default RoutesConstant;
