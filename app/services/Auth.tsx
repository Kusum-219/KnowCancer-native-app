import axios from 'axios';
import instance from '../services';
import CONFIG from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sendOtpApi =async  (data) => {
  console.log(data,'dataa');
  const url = '/authenticate';
  return await axios.post(`${CONFIG.BASE_URL}${url}`,data);
};

export const verifyOtp = async (data) => {
  const url = '/authenticate?$populate=userHealthRecord';
  return await axios.patch(`${CONFIG.BASE_URL}${url}`,data);
};

export const userManagement = async (data) => {
  const url = '/user-management';
  return await axios.post(`${CONFIG.BASE_URL}${url}`,data);
};

export const allState = async () => {
  const url = '/state';
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const selectedCity = async (id) => {
  const url = `/city?state=${id}&$limit=-1`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};
export const profileUpload = async (data) => {
  const token = await AsyncStorage.getItem('RegistrationToken').then(r=>{ return r});
  console.log(token,'token5555');
  const url = `/upload`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`,data,{
    headers: {
      'Authorization': `Bearer ${token}` 
    }

  });
};

export const diagnosisManagement = async () => {
  const url = `/diagnosis-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};