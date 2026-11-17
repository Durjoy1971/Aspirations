"use client";

import React, { createContext, useReducer, useEffect, useMemo, ReactNode, useContext, Dispatch } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export interface UserState {
  isLoggedIn: boolean;
  isLoading: boolean;
  userName: string;
  email: string;
}

export type UserAction =
  | { type: "LOGIN"; payload: { userName?: string | null; email?: string | null } | string }
  | { type: "LOGOUT"; payload?: string };

export const initialState: UserState = {
  isLoggedIn: false,
  isLoading: true,
  userName: "",
  email: "",
};

export const reducer = (state: UserState, action: UserAction): UserState => {
  if (action.type === "LOGIN") {
    if (typeof action.payload === "string") {
      return { ...state, isLoggedIn: true, isLoading: false, userName: action.payload };
    }
    const { userName, email } = action.payload || {};
    return {
      ...state,
      isLoggedIn: true,
      isLoading: false,
      userName: userName || state.userName || "",
      email: email || state.email || "",
    };
  } else if (action.type === "LOGOUT") {
    return { ...state, isLoggedIn: false, isLoading: false, userName: "", email: "" };
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
        if (
          user.emailVerified ||
          user.email === (process.env.NEXT_PUBLIC_ADMIN_EMAIL || "durjoybarua1971@gmail.com")
        ) {
          document.cookie = "user_auth=true; path=/; max-age=86400; SameSite=Lax";
          dispatch({
            type: "LOGIN",
            payload: {
              userName: user.displayName || user.email?.split("@")[0] || "",
              email: user.email || "",
            },
          });
        } else {
          document.cookie = "user_auth=; path=/; max-age=0; SameSite=Lax";
          dispatch({ type: "LOGOUT" });
        }
      } else {
        document.cookie = "user_auth=; path=/; max-age=0; SameSite=Lax";
        dispatch({ type: "LOGOUT" });
      }
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

