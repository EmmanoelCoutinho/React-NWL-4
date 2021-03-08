import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile () {
  const { level } = useContext(ChallangesContext)

  return(
    <div className={ styles.profileContainer }>
      <img src="https://github.com/EmmanoelCoutinho.png" alt="Profile-image"/>
      <div>
        <strong>EmmanoelCoutinho</strong>

        <p>
          <img src="icons/level.svg" alt="level-icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}