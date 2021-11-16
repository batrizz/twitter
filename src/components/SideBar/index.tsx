import { ReactNode } from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import News from '../News'
import FollowSugestion from '../FollowSugestion'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <>
                <FollowSugestion name="Carlos Miguel" nickname="@solrachix" />
                <FollowSugestion name="Higor dos Anjos" nickname="@higoranjo" />
                <FollowSugestion name="Maria Eugênia" nickname="@mage" />
              </>
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <>
                <News />
                <News />
                <News />
              </>
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <>
                <News />
                <News />
                <News />
              </>
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
