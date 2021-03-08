import { clear } from 'console';
import { useContext, useEffect, useState } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';

import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const { newChallange } = useContext(ChallangesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinhished, setHasFinhished] = useState(false)

  let countdownTimeout : NodeJS.Timeout;

  const minutes = Math.floor(time / 60)
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }
  
  function resetCountDown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time -1)
      }, 1000)
    } else if (isActive && time === 0){
      setHasFinhished(true)
      setIsActive(false)
      newChallange()
    }
  }, [isActive, time])

  return(
  <div>
    <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    {hasFinhished ? (
      <button
      disabled
      className={styles.countdownButton}
      >
        Ciclo encerrado
        <img src="icons/check.svg" alt="check"/>
      </button>
    ) : (
      <>
        {isActive ? (
      <button type="button"
      className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
      onClick={resetCountDown}
      >
        Abandonar ciclo
      </button>
    ) : (
      <button type="button"
      className={styles.countdownButton}
      onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    )}
      </>
    )}
   
  </div>
  );
}