import { ReactNode } from 'react'

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Foguete não tem ré !!!</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              87
            </Status>

            <Status>
              <RetweetIcon />
              154
            </Status>

            <Status>
              <LikeIcon />
              763
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
