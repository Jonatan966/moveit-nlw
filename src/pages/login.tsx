import Head from 'next/head';
import {SiGithub} from 'react-icons/si';
 
import Input from '../components/Input';
import styles from '../styles/pages/Login.module.css';

function Login() {
  return (
    <div className={styles.loginPage}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="Simbolo.svg"/>

      <div className={styles.loginPanel}>
        <img src='logo-full.svg'/>
        <h1>Bem-vindo(a)</h1>

        <span>
          <SiGithub color='#B2B9FF' size={40}/>
          <p>
            Faça login com seu Github para começar
          </p>
        </span>

        <Input/>
      </div>
    </div>
  )
}

export default Login;