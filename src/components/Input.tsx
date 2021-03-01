import { useState } from 'react';
import {FiArrowRight} from 'react-icons/fi';

import styles from '../styles/components/Input.module.css';

function Input() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  return (
    <label className={styles.InputContainer}>
      <input 
        type="text"
        placeholder='Digite seu username'
        onChange={obj => setIsButtonEnabled(!!obj.target.value)}
        name='username'
      />
      <button 
        disabled={!isButtonEnabled}
        type='submit'
      >
        <FiArrowRight size={25}/>
      </button>
    </label>
  )
}

export default Input;