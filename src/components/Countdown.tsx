import { useContext } from 'react';
import {FaCheckCircle} from 'react-icons/fa';
import {BsPlayFill, BsX} from 'react-icons/bs';

import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.scss';


export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    totalTime,
    startCountdown,
    resetCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const timeLeft = Math.round(((minutes * 60) + seconds) * 100) / (totalTime * 60);

  return (
    <div>
      <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
          <div>
            <div/>
          </div>
          Ciclo encerrado
          <FaCheckCircle size={25} color='var(--green)'/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type='button' 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              <div>
                <div style={{width: `${100-timeLeft}%`}}/>
              </div>
              Abandonar ciclo
              <BsX size={25}/>
            </button>
          ) : (
            <button 
              type='button' 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <BsPlayFill size={25}/>
            </button>
          ) }

        </>
      ) }

    </div>
  )
}