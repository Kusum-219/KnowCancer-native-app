import axios from 'axios';
import instance from '../services';
import CONFIG from './Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sendOtpApi = async data => {
  console.log(data, 'dataa');
  const url = '/authenticate';
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data);
};

export const verifyOtp = async data => {
  const url = '/authenticate?$populate=userHealthRecord';
  return await axios.patch(`${CONFIG.BASE_URL}${url}`, data);
};

export const userManagement = async data => {
  const url = '/user-management';
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data);
};

export const allState = async () => {
  const url = '/state';
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const selectedCity = async id => {
  const url = `/city?state=${id}&$limit=-1`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};
export const imageUpload = async formdata => {

  console.log(formdata[0]?.mime,'document TYpeeee');
  const url = `/upload`;
  let formdataa = new FormData();
  formdata.map(item => formdataa.append('files', {
   uri: item?.uri,
   name:item?.name,
   type:item?.type
  }));

  // formdataa.append('image',
  //     {
  //        uri:formdata[0]?.path,
  //        name:'user_document',
  //        type:formdata[0]?.mime
  //     });
  // formdataa.append('files',formdata[0]?.path);
  formdataa.append('fileType', 2);
  formdataa.append('purpose', 'documents');
  return await axios.post(`${CONFIG.BASE_URL}${url}`,formdataa, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const diagnosisManagement = async () => {
  const url = `/diagnosis-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const directConsult = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/direct-consult-request`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const videoGuidance = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/video-management`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const doctorList = async () => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/doctors`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const connectionRequest = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/connect-new-doctor`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const verifyToken = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/connect-new-doctor`;
  return await axios.patch(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const previousConnectedList = async id => {
  const url = `/v1/connect-new-doctor?$populate=doctor&$populate=createdBy`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`);
};

export const chatBotUserQuery = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/user-query`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createSupportTicket = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/support-ticket-management`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSupportTicket = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/support-ticket-management?status=1`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getCloseSupportTicket = async data => {
   const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/support-ticket-management?status=0`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getSupportTicketDetail = async id => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/support-ticket-management/${id}`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editProfile = async (id,data) => {
  console.log(id,'data',data);
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/user-management/${id}`;
  return await axios.patch(`${CONFIG.BASE_URL}${url}`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const allReview = async id => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/review?$limit=-1`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addReview = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const url = `/review`;
  return await axios.post(`${CONFIG.BASE_URL}${url}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const profileImageUpload = async formdata => {

  console.log(formdata[0],'document TYpeeee');
  const url = `/upload`;
  let formdataa = new FormData();
 formdataa.append('files', {
   uri: formdata[0]?.path,
   name:'profilePic',
   type:formdata[0]?.mime
  })

  // formdataa.append('image',
  //     {
  //        uri:formdata[0]?.path,
  //        name:'user_document',
  //        type:formdata[0]?.mime
  //     });
  // formdataa.append('files',formdata[0]?.path);
  formdataa.append('fileType', 1);
  formdataa.append('purpose', 'documents');
  return await axios.post(`${CONFIG.BASE_URL}${url}`,formdataa, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const allHealthRecord = async id => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const userId =  await AsyncStorage.getItem('UserInfo').then(r => {
    const info =JSON.parse(r)
    return info?.userHealthRecord?._id;
  });
  console.log(userId,'userId');
  const url = `/health-record-management/${userId}`;
  return await axios.get(`${CONFIG.BASE_URL}${url}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const allHealthRecordEdit = async data => {
  const token = await AsyncStorage.getItem('accessToken').then(r => {
    return r;
  });
  const userId =  await AsyncStorage.getItem('UserInfo').then(r => {
    const info =JSON.parse(r)
    return info?.userHealthRecord?._id;
  });
  console.log(userId,'userId');
  const url = `/health-record-management/${userId}`;
  return await axios.patch(`${CONFIG.BASE_URL}${url}`,data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};