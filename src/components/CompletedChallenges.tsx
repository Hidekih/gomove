import { useChallenge } from '../hooks/ChallengeContext';

import { Container } from '../styles/components/CompletedChallenges';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenge();
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}