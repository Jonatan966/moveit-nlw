import { Profile } from "./Profile";
import styles from '../styles/components/LeaderboardPeople.module.css';

interface LeaderboardPeopleProps {
  position: number;
  completedChallenges: number;
  experience: number;
}

function LeaderboardPeople({position, completedChallenges, experience}: LeaderboardPeopleProps) {
  return (
    <div className={styles.leaderItem}>
      <span>
        <h1>{position}</h1>
      </span>
      <span>
        <Profile/>
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