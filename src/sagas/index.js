import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );

  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

function* fetchData() {

  const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json(), );

  yield put({ type: "DATA_RECEIVED", json: json, });

  console.log(json)
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
  yield takeLatest('GET_DATA', fetchData);
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
