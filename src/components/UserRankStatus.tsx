import { 
  Container, 
  Position, 
  User, 
  Challenges, 
  Experience 
} from '../styles/components/UserRankStatus';

interface UserRankStatusProps {
  position: number;
  name: string;
  avatar_url: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export function UserRankStatus({ position, name, avatar_url, level, challengesCompleted, experience } : UserRankStatusProps) {
  return(
    <Container>
      <Position><span>{position}</span></Position>

      <User>
        <img src={avatar_url} alt="Profile"/>
        <div>
          <strong>{name}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            {`Level ${level}`}
          </p>
        </div>
      </User>

      <Challenges>
        <p>
          <span>{challengesCompleted}</span> 
          completados
        </p>
      </Challenges>

      <Experience>
        <p>
          <span>{experience}</span> 
          xp
        </p>
      </Experience>
    </Container>
  )
}