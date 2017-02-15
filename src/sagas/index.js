import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

// register watcher saga(s) and export as single generator function (startForman) as root saga.
export default function* startForman() {
	yield fork(watchSearchMedia);
}
