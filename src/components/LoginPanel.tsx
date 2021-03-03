import { SiGithub } from 'react-icons/si';
import redirector from 'next/router';

import styles from '../styles/components/LoginPanel.module.css';

interface LoginPanelProps {
  clientID: string;
}

function LoginPanel({clientID}: LoginPanelProps) {
  async function submitLogin() {
    redirector.push(`https://github.com/login/oauth/authorize?client_id=${clientID}`);
  }

  return (
    <div className={styles.loginPanel}>
      <img src='logo-full.svg'/>
      <h1>Bem-vindo(a)</h1>

      <span>
        <SiGithub color='#B2B9FF' size={40}/>
        <p>
          Faça login com seu Github para começar
        </p>
      </span>

      <button onClick={submitLogin}>
        Fazer login com o <SiGithub size={40}/>
      </button>
    </div>
  );
}

export default LoginPanel;