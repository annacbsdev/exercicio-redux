import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const FavoritosSlice = createSlice({
  name: 'Favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoNoFavoritos = action.payload
      if (state.itens.find((produto) => produto.id === produtoNoFavoritos.id)) {
        const favoritosSemProduto = state.itens.filter(
          (produto) => produto.id !== produtoNoFavoritos.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens = [...state.itens, produtoNoFavoritos]
      }
    }
  }
})

export const { favoritar } = FavoritosSlice.actions
export default FavoritosSlice.reducer
