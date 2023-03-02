import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { createContext, useEffect, useState } from "react";

import { auth } from "../firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import ContextProvider from "../components/context/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/mulish"
        rel="stylesheet"></link>
      <AuthContextProvider>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </AuthContextProvider>
    </>
  );
}
