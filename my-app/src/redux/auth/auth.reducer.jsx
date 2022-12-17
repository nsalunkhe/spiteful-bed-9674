import React, { useState } from "react";
import {
  AUTH_GOOGLE_SIGNIN,
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
  AUTH_SIGNUP,
  AUTH_STATE_CHANGED,
  SET_USER_AS_ADMIN,
} from "./auth.types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Auth } from "../../Firebase/firebase";
const authInitialState = {
  isAuth: localStorage.getItem("nord-isAuth") || false,
  user: "",
  isAdmin: localStorage.getItem("nord-admin-status") || false,
};

export const authReducer = (state = authInitialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGNIN: {
      let newState = { ...state, isAuth: true };
      localStorage.setItem("nord-isAuth", true);
      return signInWithEmailAndPassword(Auth, payload.email, payload.password);
    }
    case AUTH_SIGNOUT: {
      let newState = { ...state, isAuth: false, isAdmin: false };
      localStorage.setItem("nord-isAuth", newState.isAuth);
      localStorage.setItem("nord-admin-status", newState.isAuth);
      signOut(Auth);
      return newState;
    }
    case AUTH_STATE_CHANGED: {
      let newState = { ...state, user: payload };
      return newState;
    }
    case AUTH_GOOGLE_SIGNIN: {
      const google_Auth_Provider = new GoogleAuthProvider();
      localStorage.setItem("nord-isAuth", true);
      return signInWithPopup(Auth, google_Auth_Provider);
    }
    case AUTH_SIGNUP: {
      return createUserWithEmailAndPassword(
        Auth,
        payload.email,
        payload.password
      );
    }
    case SET_USER_AS_ADMIN: {
      let newState = { ...state, isAuth: !state.isAuth };
      localStorage.setItem("nord-isAuth", newState.isAuth);
      return newState;
    }
    default:
      return state;
  }
};
