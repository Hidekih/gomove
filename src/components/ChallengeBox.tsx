import { useCallback, useEffect, useState } from 'react'

import { useChallenge } from '../hooks/ChallengeContext';
import { useCountdown } from '../hooks/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const [ hasActiveChallenge, setHasActiveChallenge ] = useState(true);
  
  const { activeChallenge, challengesCompletedUp, experienceGained } = useChallenge(); 
  const { resetCountdown } = useCountdown(); 
  
  useEffect(() => {
    setHasActiveChallenge(!!activeChallenge)
  }, [activeChallenge])

  const finishChallenge = useCallback(() => {
    experienceGained(activeChallenge.amount);
    setHasActiveChallenge(false);
    challengesCompletedUp();
    resetCountdown();
  }, [activeChallenge]);

  const failChallenge = useCallback(() => {
    setHasActiveChallenge(false);
    resetCountdown();
  }, []);

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge && activeChallenge ? (
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