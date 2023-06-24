import { Container, Form, Header } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Agendamento Descomplicado</Heading>
        <Text>
          Precisamos de informações para criar seu perfil! Ah, você pode editar
          essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="descomplica.com/" placeholder="seu-usuario" />
        </label>
        <label>
          <Text size="sm">Endereço de e-mail</Text>
          <TextInput placeholder="seu-email" />
        </label>

        <Button type="submit">
          {' '}
          Proximo Passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
