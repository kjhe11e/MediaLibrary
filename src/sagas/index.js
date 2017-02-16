import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// register watcher saga(s) and export as a single generator
// function 'startForman' as root Saga.
export default function* startForman() {
  yield fork(watchSearchMedia);
}
