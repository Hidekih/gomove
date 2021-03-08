import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useChallenge } from './ChallengeContext';

const COUNTDOWN_INITIAL_TIME = 25 * 60;

interface CountdownContextData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData);

interface ContextProps{
  children: ReactNode;
}

let countdownTimeOut: NodeJS.Timeout;

export function CountdownContextProvider({ children }: ContextProps) {
  const [time, setTime] = useState(COUNTDOWN_INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  const { startNewChallenge } = useChallenge();

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(currentState => currentState-1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(!isActive);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setHasFinished(false);
    setIsActive(false);
    setTime(COUNTDOWN_INITIAL_TIME);
  }

  return (
    <CountdownContext.Provider value={{ 
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdown() {
  const context = useContext(CountdownContext);

  if(!context) {
    throw new Error("Use useCountdown em uma rota dentro do CountdownContextProvider");
  }

  return context;
}
