import axios, {AxiosError} from 'axios';
import CONFIG from './Constants';

export const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
});
