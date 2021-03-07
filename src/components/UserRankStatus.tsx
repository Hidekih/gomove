import { 
  Container, 
  Position, 
  User, 
  Challenges, 
  Experience 
} from '../styles/components/UserRankStatus';

interface UserRankStatusProps {
  avatar_url: string;
  name: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export function UserRankStatus({ name, avatar_url, level, challengesCompleted, experience } : UserRankStatusProps) {
  console.log(avatar_url)
  return(
    <Container>
      <Position><span>{1}</span></Position>

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