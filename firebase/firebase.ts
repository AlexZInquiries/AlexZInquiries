import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "personal-website-e970a.firebaseapp.com",
	projectId: "personal-website-e970a",
	storageBucket: "personal-website-e970a.appspot.com",
	messagingSenderId: "545099707773",
	appId: "1:545099707773:web:4b7cf17176fd156c034814",
	measurementId: "G-RBFVZ6H3S7",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
