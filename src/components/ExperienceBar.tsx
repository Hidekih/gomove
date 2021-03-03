import { useChallenge } from '../hooks/ChallengeContext';

import { Container, CurrentExperienceContainer } from '../styles/components/ExperienceBar'

export const ExperienceBar = () => {
  const { currentXp, experienceToNextLevel } = useChallenge();

  const experienceBarFilled = currentXp / experienceToNextLevel * 100;
  
  return (
    <Container>
      <span>0 xp</span>
      
      <CurrentExperienceContainer>
        <div style={{ width: `${ experienceBarFilled }%` }}/>
        <span style={{ left: `${ experienceBarFilled }%` }}>
          {`${ currentXp } xp`}
        </span>
      </CurrentExperienceContainer>

      <span>{`${experienceToNextLevel} xp`}</span>
    </Container>
  )
}