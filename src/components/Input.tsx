import { ChangeEvent } from 'react';
import {FiArrowRight} from 'react-icons/fi';

import styles from '../styles/components/Input.module.scss';

interface InputProps {
  username: string;
  onChange: (obj) => void;
}

function Input({username, onChange}: InputProps) {
  function inputChange(obj: ChangeEvent<HTMLInputElement>) {
    onChange(obj.target.value);
  }

  return (
    <label className={styles.InputContainer}>
      <input 
        type="text"
        placeholder='Digite seu username'
        onChange={inputChange}
        name='username'
      />
      <button 
        disabled={!username}
        type='submit'
      >
        <FiArrowRight size={25}/>
      </button>
    </label>
  )
}

export default Input;