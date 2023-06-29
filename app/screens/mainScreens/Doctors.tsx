import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import assets from '../../assets';
import {RoutesConstant} from '../../navigators';
import {connectionRequest} from '../../services/Auth';

const Doctors = ({route}) => {
  const {doctorList} = route?.params;
  console.log(doctorList, 'list');
  const connectNewDoctor = item => {
    console.log(item, 'itemsss 200');
    connectionRequest({
      doctorId: item?.doctorId,
    })
      .then(result => {
        console.log(result, 'result in 24');
        if (result?.data?.message == 'success') {
          navigation.navigate(RoutesConstant.CHAT);
        } else {
          console.log(result?.data, 'result?.data');
          navigation.navigate(RoutesConstant.VERIFY_DOCTOR, {
            token: result?.data,
            doctorId: item?.doctorId,
          });
        }
        console.log(result?.data?.message, 'result');

        console.log(result?.data, 'resulttttt request');
      })
      .catch(err => {
        console.log(err, 'error in request');
      });
    // navigation.navigate(RoutesConstant.VERIFY_DOCTOR)
  };
  const [doctors, setDoctors] = useState([
    {
      name: 'Jhon Doe',
      lastConnected: '23rd march, 2023',
      image: assets.ellipse,
      description:
        'Culpa ad magna quis ullamco tempor non mollit aliqua aliquip. Do mollit culpa commodo commodo laborum.',
    },
    {
      name: 'Jhon Doe',
      lastConnected: '23rd march, 2023',
      image: assets.ellipse,
      description:
        'Culpa ad magna quis ullamco tempor non mollit aliqua aliquip. Do mollit culpa commodo commodo laborum.',
    },
    {
      name: 'Jhon Doe',
      lastConnected: '23rd march, 2023',
      image: assets.ellipse,
      description:
        'Culpa ad magna quis ullamco tempor non mollit aliqua aliquip. Do mollit culpa commodo commodo laborum.',
    },
    {
      name: 'Jhon Doe',
      lastConnected: '23rd march, 2023',
      image: assets.ellipse,
      description:
        'Culpa ad magna quis ullamco tempor non mollit aliqua aliquip. Do mollit culpa commodo commodo laborum.',
    },
  ]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        width: 220,
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 10,
      }}>
      <View style={styles.innerCard}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 40, height: 40, borderWidth: 1, borderRadius: 999}}
            source={assets.ellipse}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontWeight: 600,
              color: '#000',
            }}>
            {item.name}
          </Text>
        </View>
        <Text style={{color: '#938f99', marginTop: 10}}>
          {
            'Culpa ad magna quis ullamco tempor non mollit aliqua aliquip. Do mollit culpa commodo commodo laborum.'
          }
        </Text>
        <Text style={{color: '#938f99', marginTop: 25}}>
          Last Connected:<Text style={{color: '#000'}}>23.02.2023</Text>
        </Text>
        <TouchableOpacity
          onPress={() => connectNewDoctor(item)}
          style={styles.cardButton}>
          <Text style={{textAlign: 'right', color: '#936CAB', marginTop: 10}}>
            Connect
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      {/* -----------------HEADER CARD ------------- */}
      <View style={styles.headerCard}>
        <View style={styles.circleOne}></View>
        <View style={styles.circleTwo}></View>
        <View
          style={{
            zIndex: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconFeather name="chevron-left" size={32} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 600,
              marginLeft: 10,
            }}>
            Choose Your Doctor
          </Text>
        </View>
      </View>
      {/* --------------CONTENT-------------- */}
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          {/* -----------HORIZONTAL CAROUSEL (FLATLIST) CARDS------------------- */}
          <FlatList
            data={doctorList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingVertical: 8,
            }}
            // numColumns={2}
          />
        </View>
      </View>

      {/* --------------ADD NEW DOCTOR BUTTON-------------- */}
      {/* <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 999,
            backgroundColor: "#936CAB",
            marginBottom: 30,
            alignItems: "center",
            marginHorizontal: 10,
          }}
          onPress={() => connectNewDoctor()}
        >
          <Text style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>
            + Connect a new Doctor
          </Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'rgba(195, 136, 247, 0.2)',
    backgroundOpacity: 0.1,
  },
  container: {
    paddingHorizontal: 10,
  },
  headerCard: {
    backgroundColor: '#713D73',
    height: 196,
    padding: 10,
    position: 'relative',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  circleOne: {
    backgroundColor: '#7D5B92',
    borderRadius: 9999999,
    position: 'absolute',
    width: 123,
    height: 114,
    left: -21,
    top: -11.71,
    zIndex: 30,
  },
  circleTwo: {
    backgroundColor: '#7E5380',
    backgroundOpacity: '87%',
    borderRadius: 9999999,
    height: 301,
    width: 301,
    position: 'absolute',
    top: -105,
    left: -112,
    zIndex: 10,
  },
  headerImage: {
    height: 150,
    zIndex: 40,
    bottom: -10,
    left: 20,
    position: 'absolute',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  textContainer: {
    color: '#FFFFFF',
    zIndex: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  welcome: {
    zIndex: 50,
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    marginTop: 50,
  },
  knowcancer: {
    fontSize: 36,
  },
});
