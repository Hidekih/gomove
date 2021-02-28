import styles from '../styles/components/Profile.module.css';
import { useChallenge } from '../hooks/ChallengeContext';

export function Profile() {
  const { level } = useChallenge();

  return (
    <>
      <div className={styles.profileContainer}>
        <img src="https://github.com/hidekih.png" alt="Alexandre Hideki Siroma"/>
        <div>
          <strong>Alexandre Hideki Siroma</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            {`Level ${level}`}
          </p>
        </div>
      </div>
    </>
  )
}