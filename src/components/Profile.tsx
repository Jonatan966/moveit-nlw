import { useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  const {getData} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    getData().then(item => {
      setName(item.name);
      setAvatar(item.avatar_url);
    });  
  }, []);

  return (
    <div className={styles.profileContainer}>
      {!avatar 
        ? <FaUserCircle color='var(--gray-line)' size={35}/> 
        : <img src={avatar} alt="Jonatan F"/>
      }
      
      <div>
        <strong>{name ? name : 'Buscando. . .'}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}