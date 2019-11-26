import * as videoConstants from '../constants/video';
import {toastError} from '../helpers/toastHelpers';
import {toast} from 'react-toastify';

const initialState = {listVideo: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case videoConstants.FETCH_VIDEO: {
      return {
        ...state,
        listVideo: [],
      };
    }
    case videoConstants.FETCH_VIDEO_SUCCESS: {
      const {data} = action.payload;
      return {
        ...state,
        listVideo: data,
      };
    }
    case videoConstants.FETCH_VIDEO_FAILED: {
      const {error} = action.payload;
      toastError (error);
      return {
        ...state,
        listVideo: [],
      };
    }
    case videoConstants.SHARE_VIDEO: {
      return {
        ...state,
      };
    }
    case videoConstants.SHARE_VIDEO_SUCCESS: {
      const {data} = action.payload;
      toast.success("Shared Success !")
      return {
        ...state,
        listVideo: state.listVideo.concat ([data]),
      };
    }
    case videoConstants.SHARE_VIDEO_FAILED: {
      const {error} = action.payload;
      toastError (error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
