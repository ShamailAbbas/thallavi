import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCGW62TcgRSJwVwkHWbiaiIFVxs9Hef57k',
  authDomain: 'hotelbookingapp-28297.firebaseapp.com',
  projectId: 'hotelbookingapp-28297',
  storageBucket: 'hotelbookingapp-28297.appspot.com',
  messagingSenderId: '1013413087182',
  appId: '1:1013413087182:web:80f473143cb314a7b10d9f',
  measurementId: 'G-4MTV8BRD06',
})

export const auth = app.auth()
export const db = app.firestore()
export default app
