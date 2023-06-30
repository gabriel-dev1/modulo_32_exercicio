import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Main, Input } from '../../GlobalStyles'
import { adicionar } from '../../store/reducers/contatos'
import { FormStyles, SaveButton } from './styles'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeCompleto, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTel] = useState('')

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionar({
        nomeCompleto,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <>
      <Main>
        <FormStyles onSubmit={adicionarContato}>
          <label>Nome do contato:</label>
          <Input onChange={(e) => setNome(e.target.value)} />
          <label>Email do contato:</label>
          <Input onChange={(e) => setEmail(e.target.value)} />
          <label>Telefone do contato:</label>
          <Input onChange={(e) => setTel(e.target.value)} />
          <SaveButton type="submit">Salvar</SaveButton>
        </FormStyles>
      </Main>
    </>
  )
}

export default Form
