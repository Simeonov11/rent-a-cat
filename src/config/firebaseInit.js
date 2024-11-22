// Import the functions you need from the SDKs you need
//import { initializeApp } from "../../node_modules/firebase/firebase-app.js";
//import { getAuth } from "../../node_modules/firebase/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import page from "../lib/page.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DZbw_fUICrGKgm8FwYZwKZAG9qHqzkI",
  authDomain: "rent-a-cat-softuni.firebaseapp.com",
  projectId: "rent-a-cat-softuni",
  storageBucket: "rent-a-cat-softuni.firebasestorage.app",
  messagingSenderId: "814864523359",
  appId: "1:814864523359:web:4bc440b31e104f55d3fbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
    .then(()=> {
        console.log('persistance');

        // Refresh current page when persistance is loaded, a little bit hacky :)
        page.redirect(location.pathname);
    })
    .catch(error => {
        console.log('persistance error');
    })

export default app;