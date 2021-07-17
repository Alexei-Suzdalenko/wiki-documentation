import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyCTOmzS5kZSB_dDYZFPEO9SbAdqfPp9mcg",
    authDomain: "wiki-aux.firebaseapp.com",
    databaseURL: "https://wiki-aux-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wiki-aux",
    storageBucket: "wiki-aux.appspot.com",
    messagingSenderId: "570132637492",
    appId: "1:570132637492:web:3550b2f7bded174ad6e761",
    measurementId: "G-G8L89423PN"
};
firebase.initializeApp(firebaseConfig); // firebase.analytics();

createApp(App)
    .use(store)
    .use(router).mount('#app')
