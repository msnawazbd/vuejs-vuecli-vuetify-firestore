import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBLspY1UOC6xqIZ2gfggTVvLOvPKnIpwZ4",
    authDomain: "vue-to-do-9cbf4.firebaseapp.com",
    databaseURL: "https://vue-to-do-9cbf4.firebaseio.com",
    projectId: "vue-to-do-9cbf4",
    storageBucket: "vue-to-do-9cbf4.appspot.com",
    messagingSenderId: "55363245007",
    appId: "1:55363245007:web:05ec7bd1d56279d1ed78ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true});

export default db;

