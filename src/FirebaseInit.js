import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDfqllwYtRjpjmD4AArDSDOnO_rfEg0WwE",
    authDomain: "openforce-2022.firebaseapp.com",
    projectId: "openforce-2022",
    storageBucket: "openforce-2022.appspot.com",
    messagingSenderId: "282239187881",
    appId: "1:282239187881:web:c4f4e7654a916cbc7ce2b8",
    measurementId: "G-VK5ZEYB4KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
