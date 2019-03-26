import { put, takeLatest, all } from 'redux-saga/effects';
import apiRequest from 'services/utilities/api';

function* fetchNews() {
    const json = yield apiRequest.fetchData();

    yield put({ type: 'NEWS_RECEIVED', json });
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
