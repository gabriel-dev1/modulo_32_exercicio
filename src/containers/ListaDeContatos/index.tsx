import { useSelector } from 'react-redux'
import Contatos from '../../components/Contatos'
import { Main, Title } from '../../GlobalStyles'
import { RootReducer } from '../../store'
import ButtonAdicionar from '../../components/BotaoAdicionar'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contatos = itens

  return (
    <>
      <Main>
        <Title>Lista de contatos</Title>
        <ul>
          {contatos.map((c) => (
            <li key={c.id}>
              <Contatos
                id={c.id}
                nomeCompleto={c.nomeCompleto}
                email={c.email}
                telefone={c.telefone}
              />
            </li>
          ))}
        </ul>
        <ButtonAdicionar />
      </Main>
    </>
  )
}

export default ListaDeContatos
