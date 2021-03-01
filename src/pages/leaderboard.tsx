import LeaderboardPeople from "../components/LeaderboardPeople";
import NavigationBar from "../components/NavigationBar";

import styles from '../styles/pages/Home.module.css';
import leaderStyles from '../styles/pages/Leaderboard.module.css';

import peoples from '../../leaderboard.json';

function Leaderboard() {
  return (
    <>
      <NavigationBar activeMenu={1}/>

      <div style={{width: '100%'}} className={styles.container}>
        
        <h1 className={leaderStyles.leaderPageTitle}>Leaderboard</h1>

        <div className={leaderStyles.leaderContainer}>
          <div>
            <span>POSIÇÃO</span>
            <span>USUÁRIO</span>
            <span>DESAFIOS</span>
            <span>EXPERIÊNCIA</span>
          </div>

          {peoples.map((people, position) => 
            <LeaderboardPeople
              completedChallenges={people.completedChallenges}
              position={position+1}
              experience={people.experience}
            />        
          )}
        </div>
      </div>
    </>
  )
}

export default Leaderboard;