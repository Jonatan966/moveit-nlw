import styles from '../styles/components/LeaderboardPeople.module.scss';
import profileStyles from '../styles/components/Profile.module.scss';

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
    <tr className={styles.leaderItem}>
      <td>
        <h1>{position}</h1>
      </td>
      <td>
        <LeaderboardProfile/>
      </td>
      <td>
        <strong>{completedChallenges}</strong>
        concluídos
      </td>
      <td>
        <strong>{experience}</strong>
        xp
      </td>

    </tr>
  );
}

export default LeaderboardPeople;