// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//     apiKey: "AIzaSyDLpeAfkjxmMybNnPV5tV5K8Yw3fb5lAuc",
//     authDomain: "inventory-management-app-d4410.firebaseapp.com",
//     projectId: "inventory-management-app-d4410",
//     storageBucket: "inventory-management-app-d4410.appspot.com",
//     messagingSenderId: "168090410116",
//     appId: "1:168090410116:web:ef3070946e8080125876d1",
//     measurementId: "G-MWNXYNDMNQ"
//   };
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// export { firestore };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpeAfkjxmMybNnPV5tV5K8Yw3fb5lAuc",
  authDomain: "inventory-management-app-d4410.firebaseapp.com",
  projectId: "inventory-management-app-d4410",
  storageBucket: "inventory-management-app-d4410.appspot.com",
  messagingSenderId: "168090410116",
  appId: "1:168090410116:web:ef3070946e8080125876d1",
  measurementId: "G-MWNXYNDMNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}