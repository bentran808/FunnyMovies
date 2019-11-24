import * as videoConstants from '../constants/video';
import {toastError} from '../helpers/toastHelpers';

const initialState = {listVideo: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case videoConstants.FETCH_VIDEO:
      return {
        ...state,
        listVideo: [],
      };
    case videoConstants.FETCH_VIDEO_SUCCESS:
      const {data} = action.payload;
      return {
        ...state,
        listVideo: data,
      };
    case videoConstants.FETCH_VIDEO_FAILED:
      const {error} = action.payload;
      toastError(error);
      return {
        ...state,
        listVideo: [],
      };
    default:
      return state;
  }
};

export default reducer;
