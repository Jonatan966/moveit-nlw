import Head from 'next/head';
import LoginPanel from '../components/LoginPanel';
 
import styles from '../styles/pages/Login.module.css';

function Login() {
  return (
    <div className={styles.loginPage}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="Simbolo.svg"/>

      <LoginPanel/>
    </div>
  )
}

export default Login;