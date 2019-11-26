import {fork, take, call, put, takeEvery} from 'redux-saga/effects';
import * as videoConstants from '../constants/video';
import {fetchListVideo, shareAVideo} from '../apis/video';
import {STATUS_CODE} from '../constants';
import {
  fetchListVideoSuccess,
  fetchListVideoFailed,
  shareVideoSuccess,
  shareVideoFailed,
} from '../actions/video';

function* watchFetchListVideo () {
  while (true) {
    yield take (videoConstants.FETCH_VIDEO);
    const res = yield call (fetchListVideo);
    const {status, data} = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put (fetchListVideoSuccess (data));
    } else {
      yield put (fetchListVideoFailed (data));
    }
  }
}
function* shareVideoSaga({payload}) {
  const {title, description, link} = payload;
  const res = yield call (shareAVideo, {
    link,
    title,
    author: 'unknown',
    description,
    status: 'un-voted',
  });
  const {status, data} = res;
  if (status === STATUS_CODE.CREATED) {
    yield put (shareVideoSuccess (data));
  } else {
    yield put (shareVideoFailed (data));
  }
}

function* rootSaga () {
  yield fork (watchFetchListVideo);
  yield takeEvery (videoConstants.SHARE_VIDEO, shareVideoSaga);
}

export default rootSaga;
