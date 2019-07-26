import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDIWZDMjE6MaxBmnNZ3od9M67GtpmW0dfo",
    authDomain: "dailydevotionoffline-f0662.firebaseapp.com",
    databaseURL: "https://dailydevotionoffline-f0662.firebaseio.com",
    projectId: "dailydevotionoffline-f0662",
    storageBucket: "",
    messagingSenderId: "535613739282",
    appId: "1:535613739282:web:5b1e759d9d032171"
};

firebase.initializeApp(config);

//firebase.firestore().settings(settings);

export default firebase;
