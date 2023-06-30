import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatosClass from '../../models/contato'
import { remover, editar } from '../../store/reducers/contatos'
import * as S from './styles'
import { Input, Button } from '../../GlobalStyles'

type Props = ContatosClass

const Contatos = ({ nomeCompleto, email: emailTwo, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditar] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const cancelar = () => {
    setEditar(false)
    setNome(nomeCompleto)
    setEmail(emailTwo)
  }

  useEffect(() => {
    if (nomeCompleto.length > 0) {
      setNome(nomeCompleto)
    }
  }, [nomeCompleto])

  useEffect(() => {
    if (emailTwo.length > 0) {
      setEmail(emailTwo)
    }
  }, [emailTwo])

  useEffect(() => {
    if (telefone.length > 0) {
      setTel(telefone)
    }
  }, [telefone])

  return (
    <S.Card>
      {editando ? (
        <>
          <span>Nome do contato:</span>
          <Input onChange={(e) => setNome(e.target.value)} />
          <span>Email do contato:</span>
          <Input onChange={(e) => setEmail(e.target.value)} />
          <span>Telefone do contato:</span>
          <Input onChange={(e) => setTel(e.target.value)} />
        </>
      ) : (
        <>
          <div>
            <S.Span>Nome do contato:</S.Span>
            <S.Paragraph>{nome}</S.Paragraph>
          </div>
          <div>
            <S.Span>Email do contato: </S.Span>
            <S.Paragraph>{email}</S.Paragraph>
          </div>
          <div>
            <S.Span>Telefone do contato: </S.Span>
            <S.Paragraph as="p">{tel}</S.Paragraph>
          </div>
        </>
      )}
      <S.Actions>
        {editando ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(editar({ nomeCompleto, email, telefone, id }))
                setEditar(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.RemoveButton onClick={cancelar}>Cancelar</S.RemoveButton>
          </>
        ) : (
          <>
            <Button onClick={() => setEditar(true)}>editar</Button>
            <S.RemoveButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.RemoveButton>
          </>
        )}
      </S.Actions>
    </S.Card>
  )
}

export default Contatos
