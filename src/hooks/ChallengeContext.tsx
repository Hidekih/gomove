import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { ThemeProvider } from 'styled-components';

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengeContextData {
  currentXp: number;
  level: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  startNewChallenge(): void;
  challengesCompletedUp(): void;
  experienceGained(experience_gained: number): void;
  closeLevelUpModal(): void;
}

const ChallengeContext = createContext<ChallengeContextData>({} as ChallengeContextData);

interface ContextProps{
  children: ReactNode;
  currentXp: number;
  level: number;
  challengesCompleted: number;
}

export function ChallengeContextProvider({ children, ...rest  }: ContextProps) {
  const [ currentXp, setCurrentXp ] = useState(rest.currentXp);
  const [ level, setLevel ] = useState(rest.level);
  const [ challengesCompleted, setChallengesCompleted ] = useState(rest.challengesCompleted);

  const [ activeChallenge, setActiveChallenge ] = useState(null);
  const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    cookies.set('currentXp', String(currentXp));
    cookies.set('level', String(level));
    cookies.set('challengesCompleted', String(challengesCompleted));
  }, [currentXp, level, challengesCompleted])

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio! 💪', {
        icon: '/favicon.png',
        body: `Valendo ${challenge.amount}xp!`
      });
    };
  }, [challenges]);

  const challengesCompletedUp = useCallback(() => {
    setChallengesCompleted(state => state + 1);
  }, []);

  const experienceGained = useCallback((experience_gained: number) => {
    const totalXp = currentXp + experience_gained;

    if(totalXp >= experienceToNextLevel){
      const levelsToUp = Math.floor(totalXp / experienceToNextLevel);
      levelUp(levelsToUp);

      const xpRest = totalXp - experienceToNextLevel * levelsToUp;
      setCurrentXp(xpRest);

      return;
    }

    setCurrentXp(totalXp);
  }, [currentXp]);

  const levelUp = useCallback((levelsToUp: number) => {
    setLevel(level => level + levelsToUp);
    setIsLevelUpModalOpen(true);
  }, []);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, [])

  return (
    <ChallengeContext.Provider value={{ 
      currentXp,
      level,
      challengesCompleted,
      experienceToNextLevel,
      startNewChallenge, 
      activeChallenge,
      challengesCompletedUp,
      experienceGained,
      closeLevelUpModal
    }}>
      {children}
     {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}

export function useChallenge() {
  const context = useContext(ChallengeContext);

  if(!context) {
    throw new Error("Use useChallenge em uma rota dentro do ChallengeContextProvider");
  }

  return context;
}