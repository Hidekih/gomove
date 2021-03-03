import { useChallenge } from '../hooks/ChallengeContext';
import { Overlay, Container, CloseModalButton, TwitterShareBtn} from '../styles/components/LevelUpModal';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenge();
  
  return (
    <Overlay>

      <Container>
        <div>
          <CloseModalButton type="button" onClick={closeLevelUpModal}>
            <img src="icons/close.svg" alt="Fechar modal"/>
          </CloseModalButton>

          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo nível!</p>
        </div>

        <footer>
          <TwitterShareBtn 
            url={'https://gomove-gamma.vercel.app/'}
            title={'Alcancei um novo nível no GoMove!'}  
          >
            <span>Compartilhar no Twitter</span>
            <img src="icons/twitter.svg" alt=""/>
          </TwitterShareBtn>
        </footer>
      </Container>

    </Overlay>
  )
}