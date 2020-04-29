import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBZCbdzRjR5aPopBeRkyXH8nkQPmO4FuIc",
  authDomain: "beertradr2.firebaseapp.com",
  databaseURL: "https://beertradr2.firebaseio.com",
  projectId: "beertradr2",
  storageBucket: "beertradr2.appspot.com",
  messagingSenderId: "859191988579",
  appId: "1:859191988579:web:d2a3d507b04e91744e8356",
  measurementId: "G-QJM5MDK1BR"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
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
}

export default Firebase;
