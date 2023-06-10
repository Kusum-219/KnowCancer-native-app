import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {progressSteps} from './progressSteps/styles';
import assets from '../../assets';
import HeaderComponent from '../components/headerComponent/header';
import {RoutesConstant} from '../navigators';
import BasicDetail from './progressSteps/basicDetailsScreen';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import HealthRecord from './progressSteps/healthRecord';
import AddHealthRecord from './progressSteps/addHealthrecord';
import UploadRecord from './progressSteps/uploadRecord';

interface ProgressStepsProps {
  navigation?: any;
}

const ProgressSteps = ({navigation, route}: ProgressStepsProps) => {
  const styles = progressSteps;
  //   console.log(route?.params,'route');
  //   const signUpScreen = false;
  // const {signUpScreen}=route?.params

  const [index, setIndex] = React.useState(0);
  const [headerName, setHeaderName] = React.useState('Basic Details');

  const renderComponent = () => {
    console.log(index, '19 linne');
    switch (index) {
      case 0:
        return (
          <BasicDetail
            handlePress={() => {
              setIndex(1), setHeaderName('Health Record');
            }}
            navigation={navigation}
          />
        );
      case 1:
        return (
          <HealthRecord
            handlePress={() => {
              setIndex('healthRecord'), setHeaderName('View Health Record');
            }}
            navigation={navigation}
          />
        );
      case 'healthRecord':
        return (
          <AddHealthRecord
            handlePress={() => {
              setIndex(2), setHeaderName('Health Record');
            //   navigation.navigate(RoutesConstant.)
            }}
            navigation={navigation}
            arrowBack={
                ()=>{
                    setIndex(1),
                    setHeaderName('Health Record')

                }
            }
          />
        );
      case 2:
        return (
          <UploadRecord
            // handlePress={() => setIndex('healthRecord')}
            navigation={navigation}
          />
        );
    }
  };

  const handlePress = ()=>{
    console.log(index,'index 75');
    if (index==0) {
        navigation.goBack()
    }
    else if (index==1){
        setHeaderName('Basic Detail')
 setIndex(0)
    }
    else if (index==2){
setIndex(1)
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: "rgba(195, 136, 247, 0.2)",
    backgroundOpacity: 0.1,}}>
      {headerName == 'View Health Record' ? null : (
        <>
          <HeaderComponent text={headerName} handleBackPress={handlePress} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
              marginBottom:10
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                  backgroundColor: '#936CAB',
                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 0 || index == 1 ||  index == 2? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text style={{alignSelf: 'center', color: '#936CAB',fontWeight:'600',fontSize:18}}>1</Text>
                )}
              </View>
              <Divider
                style={{
                  width: 85,
                  alignSelf: 'center',
                  //  ...Layout.selfCenter,
                  //  ...Gutters.smallVMargin,
                  borderWidth: 1,
                  borderColor: '#936CAB',
                  marginVertical: 10,

                }}
              />
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                //   backgroundColor: '#936CAB',
                  backgroundColor: index == 1 || index ==2 ? '#936CAB' : '#fff',

                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 1 || index == 2 ? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text style={{alignSelf: 'center', color: '#936CAB',fontWeight:'600',fontSize:18}}>2</Text>
                )}
              </View>
              <Divider
                style={{
                  width: 85,
                  alignSelf: 'center',
                  //  ...Layout.selfCenter,
                  //  ...Gutters.smallVMargin,
                  borderWidth: 1,
                  borderColor: '#936CAB',
                  marginVertical: 10,
                }}
              />
              <View
                style={{
                  borderColor: '#936CAB',
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 50 / 2,
                  borderWidth: 2,
                  backgroundColor: index == 2 || index =='healthRecord' ? '#936CAB' : '#fff',
                  // backgroundColor: index == 1 ? Colors.primary : Colors.white,
                  //   index === '0' ||
                  //   index === 'verify' ||
                  //   index === 'googleSignin'
                  //     ? Colors.green
                  //     : Colors.gray,
                }}>
                {index == 'healthRecord' || index == 2 ? (
                  <MIcon
                    // style={{marginLeft: 10,color:'red'}}
                    size={18}
                    name="check"
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                ) : (
                  <Text style={{alignSelf: 'center',color: '#936CAB',fontWeight:'600',fontSize:18}}>3</Text>
                )}
              </View>
            </View>
          </View>
        </>
      )}

      {renderComponent()}
    </View>
  );
};

export default ProgressSteps;
