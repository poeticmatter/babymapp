import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAbTa8qn5GiQKDbHwuMTIJDTbNY5j1J9F8',
  authDomain: 'babymapp-98305.firebaseapp.com',
  projectId: 'babymapp-98305',
  storageBucket: 'babymapp-98305.appspot.com',
  appId: '<your-app-id>',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
