import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAoNChZGGxGMmbcnQOOXHJXIkNK6PfxR_w",
    authDomain: "home-535a0.firebaseapp.com",
    databaseURL: "https://home-535a0.firebaseio.com",
    projectId: "home-535a0",
    storageBucket: "home-535a0.appspot.com",
    messagingSenderId: "778090654140"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;