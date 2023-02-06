import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from "../context/AuthContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <link href="https://fonts.cdnfonts.com/css/mulish" rel="stylesheet"></link>
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    </>
);
}