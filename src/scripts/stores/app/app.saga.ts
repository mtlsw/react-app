import { takeEvery } from 'redux-saga/effects'
import { INITIALIZE } from '.'

function* initlaize() {
  console.log('INITIALIZE')
}

export default function* appSaga() {
  yield takeEvery(INITIALIZE, initlaize)
}
