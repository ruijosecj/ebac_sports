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
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoFavorito = action.payload

      if (state.itens.find((p) => p.id === produtoFavorito.id)) {
        const favoritosSemProduto: Produto = state.itens.filter(
          (p) => p.id !== produtoFavorito.id
        )
        state.itens.push(favoritosSemProduto)
      } else {
        state.itens.push(produtoFavorito)
      }
    }
  }
})

export const { adicionar } = favoritoSlice.actions
export default favoritoSlice.reducer
