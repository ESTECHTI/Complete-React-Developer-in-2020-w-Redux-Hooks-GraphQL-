import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionsTypes from './user.types';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.actions';
import UserActionTypes from './user.types';

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))

    } catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(
            emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    } catch(error) {
        yield put(emailSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}