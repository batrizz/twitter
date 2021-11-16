import { ReactNode } from 'react'

import { Container, Avatar, Info, FollowButton } from './styles'

interface FollowSugestionProps {
  name: string
  nickname: string
}

function FollowSugestion({ name, nickname }: FollowSugestionProps) {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  )
}

export default FollowSugestion
