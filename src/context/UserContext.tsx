"use client";

import React, { createContext, useReducer, useEffect, ReactNode, useContext, Dispatch } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export interface UserState {
  isLoggedIn: boolean;
  userName: string;
  email: string;
}

export type UserAction =
  | { type: "LOGIN"; payload: { userName?: string | null; email?: string | null } | string }
  | { type: "LOGOUT"; payload?: string };

export const initialState: UserState = {
  isLoggedIn: false,
  userName: "",
  email: "",
};

export const reducer = (state: UserState, action: UserAction): UserState => {
  if (action.type === "LOGIN") {
    if (typeof action.payload === "string") {
      return { ...state, isLoggedIn: true, userName: action.payload };
    }
    const { userName, email } = action.payload || {};
    return {
      ...state,
      isLoggedIn: true,
      userName: userName || state.userName || "",
      email: email || state.email || "",
    };
  } else if (action.type === "LOGOUT") {
    return { ...state, isLoggedIn: false, userName: "", email: "" };
  }
  return state;
};

export interface UserContextType {
  state: UserState;
  dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified || user.email === "durjoybarua1971@gmail.com") {
          dispatch({
            type: "LOGIN",
            payload: {
              userName: user.displayName || user.email?.split("@")[0] || "",
              email: user.email || "",
            },
          });
        } else {
          dispatch({ type: "LOGOUT" });
        }
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

