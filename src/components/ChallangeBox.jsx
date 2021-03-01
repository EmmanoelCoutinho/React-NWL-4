import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox() {

  const hasActiveChallange = true;

  return(
    <div className={styles.challangeBoxContainer}>
     { hasActiveChallange ? (
       <div className={styles.challangeActive}>
         <header>Ganhe 400 xp</header>
         <main>
           <img src="icons/body.svg"/>
           <strong>Exercite-se</strong>
           <p>20 poilichinelos</p>
         </main>
         <footer>
           <button
           type="button"
           className={styles.challangeFailButton}
           >
             Falhei
             </button>
           <button type="button"
           className={styles.challangeSucceededButton}>
             Completei
             </button>
         </footer>
       </div>
     ) : (
        <div className={styles.challangeNotActive}>
          <strong> Finalize um ciclo para receber um desafio! </strong>
          <p>
            <img src="icons/level-up.svg" alt=""/>   
            Avance de level completando desafios!
          </p>
      </div>
     )}
    </div>
  )
}