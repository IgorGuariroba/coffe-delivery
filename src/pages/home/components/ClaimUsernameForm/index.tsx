import { Form } from './styles'
import { TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm()
  async function handlePreRegister(data: any) {
    console.log(data)
  }
  return (
    <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Form>
  )
}
