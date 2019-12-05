import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyDNOrTGYQQq15TmS62PqAHELCyn5JtN2JQ",
    authDomain: "crwn-db-a7d8b.firebaseapp.com",
    databaseURL: "https://crwn-db-a7d8b.firebaseio.com",
    projectId: "crwn-db-a7d8b",
    storageBucket: "crwn-db-a7d8b.appspot.com",
    messagingSenderId: "266359855997",
    appId: "1:266359855997:web:277c2a4939522ed26d0a14"
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;