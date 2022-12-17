import {
  AUTH_GOOGLE_SIGNIN,
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
  AUTH_SIGNUP,
  AUTH_STATE_CHANGED,
  SET_USER_AS_ADMIN,
} from "./auth.types";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../Firebase/firebase";
// export const setUserAsAdmin = () => {
//   dispatch({ type: SET_USER_AS_ADMIN });
// };

export const signUp = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP, payload: { email, password } });
};

export const logIn = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNIN, payload: { email, password } });
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: AUTH_SIGNOUT });
};

export const googleSignIn = () => async (dispatch) => {
  dispatch({ type: AUTH_GOOGLE_SIGNIN });
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
    dispatch({ type: AUTH_STATE_CHANGED, payload: currentUser });
  });
  // this will run when component unmount
  return () => {
    unsubscribe();
  };
}, []);
