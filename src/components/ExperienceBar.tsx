import { useChallenge } from '../hooks/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css'

export const ExperienceBar = () => {
  const { currentXp, experienceToNextLevel } = useChallenge();

  const experienceBarFilled = currentXp / experienceToNextLevel * 100;
  
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
        <div>
          <div style={{ width: `${ experienceBarFilled }%` }}/>
          <span className={styles.currentExperience}style={{ left: `${ experienceBarFilled }%` }}>
            {`${ currentXp } xp`}
          </span>
        </div>
      <span>{`${experienceToNextLevel} xp`}</span>
    </header>
  )
}