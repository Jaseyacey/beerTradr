import app from 'firebase/app';
import 'firebase/auth';
import storage from '../Firebase/storage';

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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.storage = Firebase.storage();
  }
  
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    
    // *** Image API *** 

doImageUpload = (Image) => 
  this.auth.ImageUpload(Image);
  }



export { Firebase, storage as default };