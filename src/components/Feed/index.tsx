import { ReactNode } from 'react'

import Tweet from '../Tweet'

import { Container, Tab, Tweets } from './styles'

interface FeedProps {
  children: ReactNode
}

function Feed() {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  )
}

export default Feed
