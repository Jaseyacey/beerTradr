import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDSb9XgKL13aZdreKuQhN3jUQ3Vj1IVHz4",
    authDomain: "beertradr.firebaseapp.com",
    databaseURL: "https://beertradr.firebaseio.com",
    projectId: "beertradr",
    storageBucket: "beertradr.appspot.com",
    messagingSenderId: "192607524040",
    appId: "1:192607524040:web:3b6142e8654b3927c081fd",
    measurementId: "G-P6MKZMLG0D"
};  

const storage = firebase.storage();

export {
    storage, firebase as default
}