import { Produto } from '../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritoState = {
  itens: Produto[]
}
const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produtoFavorito = action.payload

      const produtoExistente = state.itens.find(
        (p) => p.id === produtoFavorito.id
      )
      if (produtoExistente) {
        state.itens = state.itens.filter((p) => p.id !== produtoFavorito.id)
      } else {
        state.itens.push(produtoFavorito)
      }
    }
  }
})

export const { adicionarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
