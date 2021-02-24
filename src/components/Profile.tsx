import styles from '../styles/components/Profile.module.css'

export function Profile () {
  return(
    <div className={ styles.profileContainer }>
      <img src="https://github.com/EmmanoelCoutinho.png" alt="Profile-image"/>
      <div>
        <strong>EmmanoelCoutinho</strong>

        <p>
          <img src="icons/level.svg" alt="level-icon"/>
          Level 1000
        </p>
      </div>
    </div>
  );
}