import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider, useAuth } from "../context/AuthContext";
import React from "react";

import ContextProvider from "../context/Context";

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
