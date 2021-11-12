import { ReactNode } from 'react'

import Main from '../Main'
import MenuBar from '../MenuBar'
import { Container, Wrapper } from './styles'

interface LayoutProps {
  children: ReactNode
}

function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  )
}

export default Layout
