import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';



const UserAuth = () => {

  
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  
  const auth = getAuth(app);
  auth.languageCode = 'it';

  
  const googleProvider = new GoogleAuthProvider();

  const loginWithPhone = (phone, appVerifier) => {
    setLoading(true);
    return signInWithPhoneNumber(auth, phone, appVerifier);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    auth,
    user,
    setUser,
    loading,
    loginWithPhone,
    loginWithGoogle,
    updateUserProfile,
    signUpWithEmail,
    loginWithEmailAndPassword,
    logout,
    resetPassword,
  };

  return authInfo;
};

export default UserAuth;
