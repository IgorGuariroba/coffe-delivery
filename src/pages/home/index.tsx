import {Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styled'

import previewImage from '../../assets/app.preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento Descomplicado</Heading>

        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>
      </Hero>

      <Preview>
        <Image 
        src={previewImage}
        height={480}
        quality="100"
        priority={true}
        alt="Calendario simbolizando aplicação em funcionamento"
      />
      </Preview>
    </Container>
  )
}
