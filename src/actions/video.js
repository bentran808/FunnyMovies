import * as videoApis from '../apis/video';
import * as videoConstants from '../constants/video';

export const fetchListVideo = () => {
  return {
    type: videoConstants.FETCH_VIDEO,
  };
};

export const fetchListVideoSuccess = data => {
  return {
    type: videoConstants.FETCH_VIDEO_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListVideoFailed = error => {
  return {
    type: videoConstants.FETCH_VIDEO_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchListVideoRequest = () => {
  return dispatch => {
    videoApis
      .fetchListVideo ()
      .then (res => {
        const {data} = res;
        dispatch (fetchListVideoSuccess (data));
      })
      .catch (error => {
        dispatch (fetchListVideoFailed (error));
      });
  };
};
