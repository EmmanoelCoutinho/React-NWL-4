import { ChallangeBox } from '../components/ChallangeBox'
import { CompletedChallanges } from "../components/CompletedChanllages"
import { Countdown } from "../components/Countdown"
import { ExperienseBar } from "../components/ExperienceBar"
import { Profile } from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>MoveIt</title>
      </Head>
      <ExperienseBar />
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
    </div>
  )
}
