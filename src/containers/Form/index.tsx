import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Main } from '../../GlobalStyles'
import { adicionar } from '../../store/reducers/contatos'
import { FormStyles, FormTitle, InputAdicionar, SaveButton } from './styles'

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

    if (nomeCompleto == '') {
      alert('O nome do contato está vazio.')
    }

    navigate('/')
  }

  return (
    <>
      <Main>
        <FormTitle>Resgistrar contato</FormTitle>
        <FormStyles onSubmit={adicionarContato}>
          <InputAdicionar
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome do contato"
          />
          <InputAdicionar
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email do contato"
          />
          <InputAdicionar
            onChange={(e) => setTel(e.target.value)}
            type="number"
            placeholder="Telefone do contato"
          />
          <SaveButton type="submit">Adicionar</SaveButton>
        </FormStyles>
      </Main>
    </>
  )
}

export default Form
