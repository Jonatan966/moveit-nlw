import styles from '../styles/components/LeaderboardPeople.module.css';
import profileStyles from '../styles/components/Profile.module.css';

interface LeaderboardPeopleProps {
  position: number;
  completedChallenges: number;
  experience: number;
}

function LeaderboardProfile() {
  return (
    <div className={profileStyles.profileContainer}>
      <img src='https://github.com/Jonatan966.png' alt="Jonatan F"/>
      
      <div>
        <strong>Teste</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

function LeaderboardPeople({position, completedChallenges, experience}: LeaderboardPeopleProps) {
  return (
    <div className={styles.leaderItem}>
      <span>
        <h1>{position}</h1>
      </span>
      <span>
        <LeaderboardProfile/>
      </span>
      <span>
        <strong>{completedChallenges}</strong>
        concluídos
      </span>
      <span>
        <strong>{experience}</strong>
        xp
      </span>

    </div>
  );
}

export default LeaderboardPeople;