import {
  ImageSourcePropType,
  TextStyle,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ModalTypes = {
  headerTitle?: string | null;
  imgSource?: ImageSourcePropType;
  title?: string | null;
  textStyle?: TextStyle | TextStyle[];
  imageStyle?: ImageStyle | ImageStyle[];
  labelKey?: string;
  valueKey?: string;
  Data?: any;
  headingStyle?: ViewStyle | ViewStyle[];
};

export type PickerTypes = {
  title: string | null;
  data: any;
  value: string;
  onChange: (val?: string) => void;
  labelKey?: string;
  valueKey?: string;
};

export type ProviderDetailsTypes = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  payment: Types[] | null;
  website: string;
  distance: string;
  care_type: Types[] | null;
  longitude: number;
  latitude: number;
  detail: string;
  type: boolean;
};

type Types = {
  code: string;
  description: string;
};

export type NavigatorParamList = {
  login: undefined;
  forgotPassword: undefined;
  dashboard: undefined;
  moreOptions: undefined;
  recognizeOD: undefined;
  startRescue: undefined;
  reportReversal: undefined;
  reportReversalPrivate: undefined;
  findTreatment: undefined;
  findNaloxone: undefined;
  resources: undefined;
  inviteOthers: undefined;
  language: undefined;
  description: {selectedState: string};
  additional: undefined;
  breathingRescue: undefined;
  administerNaloxone: undefined;
  monitorResponse: undefined;
  doanddont: undefined;
  rescueDetail: {id: number; headerTitle: string};
  accountSettings: {id: number; headerTitle: string};
  naloxoneLog: undefined;
  learnTreatment: undefined;
  modalScreen: ModalTypes;
  treatmentMap: {type: boolean, selectedState: any};
  treatmentVideo: {link: string; title: string | null};
  pickerScreen: PickerTypes;
  agreement: undefined;
  providerScreen: ProviderDetailsTypes;
  initialscreen: undefined;
};

export type RecognizeODNavigationProp = NativeStackScreenProps<
  NavigatorParamList,
  'modalScreen'
>;
