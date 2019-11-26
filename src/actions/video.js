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

export const shareVideo = (link, title, description) => {
  return {
    type: videoConstants.SHARE_VIDEO,
    payload: {
      link,
      title,
      description,
    },
  };
};

export const shareVideoSuccess = data => {
  return {
    type: videoConstants.SHARE_VIDEO_SUCCESS,
    payload: {
      data,
    },
  };
};

export const shareVideoFailed = error => {
  return {
    type: videoConstants.SHARE_VIDEO_FAILED,
    payload: {
      error,
    },
  };
};
