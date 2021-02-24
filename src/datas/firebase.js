import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyADlcejJJpXrh-jjx7FmGiBWtq6G_YcFdg",
    authDomain: "telegram-app-a00f4.firebaseapp.com",
    databaseURL: "https://telegram-app-a00f4.firebaseio.com",
    projectId: "telegram-app-a00f4",
    storageBucket: "telegram-app-a00f4.appspot.com",
    messagingSenderId: "875160936810",
    appId: "1:875160936810:web:e844b144a0435598c30513"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//simple test to checks if it works properly
const db = firebase.database()
db.ref('test').set({
    test: 'it works 6'
})
