import { useCountdown } from '../hooks/CountdownContext';

import { CountdownContainer, CountdownButton } from '../styles/components/Countdown';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useCountdown();

  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split(''); 
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton 
          disabled
        >
          Ciclo Encerrado
          <img src="icons/check-circle.svg" alt="Finalizado"/>
        </CountdownButton>
      ) : !isActive ? (
        <CountdownButton 
          type="button" 
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <img src="icons/play-arrow.svg" alt="Iniciar"/>
        </CountdownButton>
      ): (
        <CountdownButton 
          isActive
          type="button" 
          onClick={resetCountdown}>
            Abandonar Ciclo
        </CountdownButton>
      )}
    </div>
  )
}