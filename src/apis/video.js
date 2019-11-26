import axiosService from '../commons/axiosService';
import {API_ENDPOINT} from '../constants';

const url = 'videos';

export const fetchListVideo = () => {
  return axiosService.get (`${API_ENDPOINT}/${url}`);
};

export const shareAVideo = data => {
  return axiosService.post (`${API_ENDPOINT}/${url}`, data);
};
