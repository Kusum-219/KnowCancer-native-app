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
  return await axios.patch(`${CONFIG.BASE_URL}${url}`,data,);
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
export const profileUpload = async (formdata) => {
  const url = `/upload`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, formdata);
};

export const diagnosisManagement = async () => {
  const url = `/diagnosis-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const directConsult = async (data) => {

  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/direct-consult-request`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`,data,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${token}`,
    },
  });
};

export const videoGuidance = async (data) => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/video-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      'Authorization':`Bearer ${token}`,
    },
  });
};

export const doctorList = async () => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/doctors`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      'Authorization':`Bearer ${token}`,
    },
  });
};

export const connectionRequest = async (data) => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/connect-new-doctor`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`,data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const verifyToken = async (data) => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/connect-new-doctor`;
  return await axios.patch(`${CONFIG.BASE_URL}${url}`,data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const previousConnectedList = async (id) => {
  const url = `/v1/connect-new-doctor?$populate=doctor&$populate=createdBy`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const chatBotUserQuery = async (data) => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/user-query`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createSupportTicket = async (data) => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/support-ticket-management`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSupportTicket = async (data) => {
  const url = `/support-ticket-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`, data);
};

export const getSupportTicketDetail = async (id) => {
  const url = `/support-ticket-management/${id}`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`, data);
};