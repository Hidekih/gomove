import { useCallback, useEffect, useState } from 'react'

import { useChallenge } from '../hooks/ChallengeContext';
import { useCountdown } from '../hooks/CountdownContext';

import { Container, ChallengeBoxActive, ChallengeBoxNotActive, FooterButton } from '../styles/components/ChallengeBox'

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
    <Container>
      { hasActiveChallenge && activeChallenge ? (
        <ChallengeBoxActive>
          <header>{`Ganhe ${activeChallenge.amount} xp`}</header>

          <div>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Exercício"/>
            <strong>
              { activeChallenge.type === 'body' ? 'Exercite-se' : 'Mova os olhos' }
            </strong>
            <p>{activeChallenge.description}</p>
          </div>

          <footer>
            <FooterButton 
              buttonStyle="fail"
              type="button"
              onClick={failChallenge}
            >
              Falhei
            </FooterButton>
            <FooterButton 
              buttonStyle="success"
              type="button"
              onClick={finishChallenge}
            >
              Completei
            </FooterButton>
          </footer>
        </ChallengeBoxActive>
      ) : (
        <ChallengeBoxNotActive>
          <strong>Inicie um ciclo para receber desafios</strong>
          <img src="icons/level-up.svg" alt="Level Up"/>
          <p>Avance de level completando os desafios.</p>
        </ChallengeBoxNotActive>
      )}
    </Container>
  )
}