import React from 'react'

import { Container } from './home.style'

import Header from '../../components/header'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Hello Home</h1>
    </Container>
  )
}

export default Home