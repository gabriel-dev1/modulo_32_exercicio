import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/contato'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: '----',
      email: '----',
      telefone: '----'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (contatoExiste) {
        alert('Esse contato já existe.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions
export default contatosSlice.reducer
