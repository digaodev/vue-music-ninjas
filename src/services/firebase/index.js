import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJNOJ1Uf12rsAKW0uXgYdwJy1RTKgd6Xo",
  authDomain: "vue-music-ninjas.firebaseapp.com",
  projectId: "vue-music-ninjas",
  storageBucket: "vue-music-ninjas.appspot.com",
  messagingSenderId: "962062934431",
  appId: "1:962062934431:web:07821879503f5085c95daa"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { db, auth, timestamp }