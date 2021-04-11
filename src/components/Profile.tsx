import { useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';
import useSWR from 'swr';
import { AuthContext } from '../contexts/AuthContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  const {getData, logOut} = useContext(AuthContext);

  const {data} = useSWR('user-data', getData);
  
  return (
    <div className={styles.profileContainer}>
      {data 
        ? <img src={data.avatar_url} alt="Jonatan F"/>
        : <FaUserCircle color='var(--gray-line)' size={35}/> 
      }
      
      <div>
        <strong>{data ? data.name : 'Buscando. . .'}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>

      <button title='Desconectar-se' onClick={logOut}>
        <FiPower size={30}/>
      </button>
    </div>
  )
}