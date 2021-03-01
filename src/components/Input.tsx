import {FiArrowRight} from 'react-icons/fi';

import styles from '../styles/components/Input.module.css';

function Input() {
  return (
    <label className={styles.InputContainer}>
      <input type="text"/>
      <button>
        <FiArrowRight size={25}/>
      </button>
    </label>
  )
}

export default Input;