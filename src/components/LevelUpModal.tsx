import { useChallenge } from '../hooks/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';
import { TwitterIcon ,TwitterShareButton } from 'react-share';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenge();
  return (
    <div className={styles.overlay}>

      <div className={styles.container}>
        <div>
          <button className={styles.closeModalButton} type="button" onClick={closeLevelUpModal}>
            <img src="icons/close.svg" alt="Fechar modal"/>
          </button>

          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo nível!</p>
        </div>

        <footer>
          <TwitterShareButton 
            className={styles.shareButton}
            url={'https://gomove-gamma.vercel.app/'}
            title={'Alcancei um novo nível no GoMove!'}  
          >
            <span>Compartilhar no Twitter</span>
            <img src="icons/twitter.svg" alt=""/>
          </TwitterShareButton>
        </footer>
      </div>

    </div>
  )
}