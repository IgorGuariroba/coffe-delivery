import { Container, Header } from '../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente os horários
          ocupados e os novos eventos à medida que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectItem>
        <Text>Google Calendar</Text>
        <Button variant="secondary" size="sm">
          Conectar
          <ArrowRight />
        </Button>
      </ConnectItem>

      <ConnectBox>
        <Button type="submit">
          Proximo Passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
