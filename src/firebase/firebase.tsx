import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import { 
  getFirestore,
getDoc,
setDoc,
doc,
 } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIDxsfD8gKrJaqAiGo-EQCU_gXVVxbHDA",
    authDomain: "url-shortener-scissors.firebaseapp.com",
    projectId: "url-shortener-scissors",
    storageBucket: "url-shortener-scissors.appspot.com",
    messagingSenderId: "125977022662",
    appId: "1:125977022662:web:f9951a763f77dfa28287c7",
    measurementId: "G-PV31K5E9GJ"
  };
const firebaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth: { uid?: any; displayName?: any; email?: any },
  additonalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid );

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additonalInformation,
      });
    } catch (error) {
      console.log('AN error occured', error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
export const signUserOut = async () => {
 await signOut(auth);
}

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
