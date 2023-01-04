import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    const { user, login, logout } = useAuth();
  return (
    <>
      <p>Logg inn her</p>
      <main className={styles.main}>
                <div>
                    <h1>Hello Context</h1>
                    <h2>User: {user ? "login" : "logout"}</h2>
                    <div>
                        <button onClick={login}>Login</button>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </main>
    </>
  )
}