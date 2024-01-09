// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { initializeApp } from 'firebase-admin/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA8DYVfIOTfviTOhZMLZ2OKg23t6qW3eqQ',
	authDomain: 'viola-d30e4.firebaseapp.com',
	databaseURL: 'https://viola-d30e4-default-rtdb.firebaseio.com',
	projectId: 'viola-d30e4',
	storageBucket: 'viola-d30e4.appspot.com',
	messagingSenderId: '71513143223',
	appId: '1:71513143223:web:ac51556c2dd3212c6ada32'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const adminApp = initializeAdminApp(firebaseConfig);
