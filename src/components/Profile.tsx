import { useChallenge } from '../hooks/ChallengeContext';
import { useSession } from 'next-auth/client';

import { Container } from '../styles/components/Profile';

export function Profile() {
  const [ session ] = useSession();
  const { level } = useChallenge();

  return (
    <>
      <Container>
        <img src={session.user.image} alt="Alexandre Hideki Siroma"/>
        <div>
          <strong>{session.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            {`Level ${level}`}
          </p>
        </div>
      </Container>
    </>
  )
}