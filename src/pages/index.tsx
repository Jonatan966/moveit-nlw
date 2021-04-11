import Head from 'next/head'
import {GetServerSideProps} from 'next';

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.scss'
import { ChallengesProvider } from '../contexts/ChallengesContext';
import NavigationBar from '../components/NavigationBar';
import { AuthProvider } from '../contexts/AuthContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <AuthProvider>
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <NavigationBar/>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar/>

          <CountdownProvider>
            <section>
              <div className=''>
                <Profile/>
                <CompletedChallenges/>
                <Countdown/>
              </div>
              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountdownProvider>
        </div>  
      </ChallengesProvider>
    </AuthProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { level, currentExperience, challengesCompleted, access_token} = context.req.cookies;

  if (!access_token) {
    context.res.statusCode = 302;
    context.res.setHeader('Location', '/login');
    return {props: {}};
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}