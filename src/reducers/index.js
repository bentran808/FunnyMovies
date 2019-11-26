import {combineReducers} from 'redux';
import video from './video';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers ({
  video,
  form: formReducer,
});
export default rootReducer;
