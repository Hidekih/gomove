import { 
  Container, 
  Position, 
  User, 
  Challenges, 
  Experience 
} from '../styles/components/UserRankStatus';

interface UserProps {
  name: string;
  level: number;
  challengesCompleted: number;
  experience: number;
}

export function UserRankStatus() {
  return(
    <Container>
      <Position><span>{1}</span></Position>

      <User>
        <img src={'https://avatars.githubusercontent.com/u/59781045?s=460&u=bc1b2e17c7e5396d657fedca7d3e905270816d32&v=4'} alt="Profile"/>
        <div>
          <strong>{'Alexandre Hideki Siroma'}</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            {`Level ${1}`}
          </p>
        </div>
      </User>

      <Challenges>
        <p>
          <span>{123}</span> 
          completados
        </p>
      </Challenges>

      <Experience>
        <p>
          <span>{123123}</span> 
          xp
        </p>
      </Experience>
    </Container>
  )
}