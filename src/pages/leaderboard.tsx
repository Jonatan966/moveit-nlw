import LeaderboardPeople from "../components/LeaderboardPeople";
import NavigationBar from "../components/NavigationBar";

import styles from '../styles/pages/Home.module.scss';
import leaderStyles from '../styles/pages/Leaderboard.module.scss';

import peoples from '../../leaderboard.json';

function Leaderboard() {
  return (
    <>
      <NavigationBar activeMenu={1}/>

      <div style={{width: '100%'}} className={styles.container}>
        
        <h1 className={leaderStyles.leaderPageTitle}>
          Leaderboard
          <strong>2 peoples</strong>
        </h1>

        <table className={leaderStyles.leaderTable}>
          <thead>
            <tr>
              <th><span>Posição</span></th>
              <th>Usuário</th>
              <th>Desafios</th>
              <th><span>Experiência</span></th>
            </tr>
          </thead>

          <tbody>

            <LeaderboardPeople 
              completedChallenges={2}
              experience={2}
              position={2}
            />

            <LeaderboardPeople 
              completedChallenges={2}
              experience={2}
              position={2}
            />

            <LeaderboardPeople 
              completedChallenges={2}
              experience={2}
              position={2}
            />

          </tbody>
        </table>
      </div>
    </>
  )
}

/**
 *           {peoples.map((people, position) => 
            <LeaderboardPeople
              completedChallenges={people.completedChallenges}
              position={position+1}
              experience={people.experience}
            />        
          )}

 */

export default Leaderboard;