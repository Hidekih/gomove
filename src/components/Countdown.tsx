import { useCountdown } from '../hooks/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useCountdown();

  const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split(''); 
  const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton} 
        >
          Ciclo Encerrado
          <img src="icons/check-circle.svg" alt="Finalizado"/>
        </button>
      ) : !isActive ? (
        <button 
          type="button" 
          className={styles.countdownButton} 
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <img src="icons/play-arrow.svg" alt="Iniciar"/>
        </button>
      ): (
        <button 
          type="button" 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
          onClick={resetCountdown}>
            Abandonar Ciclo
        </button>
      )}
    </div>
  )
}