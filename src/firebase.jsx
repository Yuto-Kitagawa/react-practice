import { initializeApp } from "firebase/app";
// 3. Authを使うので、以下をインポートする
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// 4. firestoreを使うので、以下をインポートする
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "指定された値",
    authDomain: "指定された値",
    projectId: "指定された値",
    storageBucket: "指定された値",
    messagingSenderId: "指定された値",
    appId: "指定された値",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. authとfirebaseそれぞれ実行、インスタンス化
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// exportしてどこからでも使えるようにする
export { auth, provider, db };