import Head from 'next/head';
import LoginPanel from '../components/LoginPanel';
 
import styles from '../styles/pages/Login.module.css';

interface LoginPageProps {
  clientID: string;
}

function Login({clientID}: LoginPageProps) {
  return (
    <div className={styles.loginPage}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="Simbolo.svg"/>

      <LoginPanel clientID={clientID}/>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      clientID: process.env.GITHUB_CLIENT_ID
    }
  }
}

export default Login;