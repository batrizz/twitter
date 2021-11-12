import { ReactNode } from 'react'

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles'

interface ProfilePageProps {
  children: ReactNode
}

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar Pefil</EditButton>

        <h1>Beatriz Nunes</h1>
        <h2>@b.atrizz</h2>

        <p>
          Developer at{' '}
          <a href="https://www.timeware.com.br/?gclid=CjwKCAiAvriMBhAuEiwA8Cs5lSQKc8p9kSWtdpRbKXkWJwLbS5RKsLaxPqswQ-PkI7mgjegFgDn9DxoC3foQAvD_BwE">
            Timeware
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 05 de maio de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>361</strong>
          </span>
          <span>
            <strong>2460</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
