import Head from 'next/head';
import { GetServerSideProps } from 'next';


import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ChallangeBox } from "../components/ChallangeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallangeContexts';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props)

  return (
    <ChallengesProvider
     level={props.level}
     currentExperience={props.currentExperience}
     challengesCompleted={props.challengesCompleted}
     >

      <div className={styles.container}>
        <Head>
          <title>Início | MoveIt</title>
        </Head>

        <ExperienceBar />

      <CountdownProvider>
        <section>
            <div>
                <Profile />
                <CompletedChallanges />
                <Countdown />
            </div>
            <div>
              <ChallangeBox />
            </div>
          </section>
      </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// o nome deve ser obrigatoriamente esse e nesta página
// deve ser asíncrona tbm
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}