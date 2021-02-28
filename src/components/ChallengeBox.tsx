import { useCallback, useEffect, useState } from 'react'

import { useChallenge } from '../hooks/ChallengeContext';
import { useCountdown } from '../hooks/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const [ hasActiveCHallenge, setHasActiveCHallenge ] = useState(true);
  
  const { activeChallenge, challengesCompletedUp, experienceGained } = useChallenge(); 
  const { resetCountdown } = useCountdown(); 
  
  useEffect(() => {
    setHasActiveCHallenge(!!activeChallenge)
  }, [activeChallenge])

  const finishChallenge = useCallback(() => {
    experienceGained(activeChallenge.amount);
    setHasActiveCHallenge(false);
    challengesCompletedUp();
    resetCountdown();
  }, [activeChallenge]);

  const failChallenge = useCallback(() => {
    setHasActiveCHallenge(false);
    resetCountdown();
  }, []);

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveCHallenge && activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>{`Ganhe ${activeChallenge.amount} xp`}</header>

          <div>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Exercício"/>
            <strong>
              { activeChallenge.type === 'body' ? 'Exercite-se' : 'Mova os olhos' }
            </strong>
            <p>{activeChallenge.description}</p>
          </div>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={failChallenge}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSucceedButton}
              onClick={finishChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <img src="icons/level-up.svg" alt="Level Up"/>
          <p>Avance de level completando os desafios.</p>
        </div>
      )}
    </div>
  )
}