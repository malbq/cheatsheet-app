import { createSlice } from '@reduxjs/toolkit'
import { generateSlug } from '../../utils'

export const categorySlice = createSlice({
  name: 'categories',
  initialState: [{id:'test', name: 'Test'}],
  reducers: {
    writeCategory: (state, { payload: categoryName }) => {
      if(state.some((category) => category.name === categoryName)) {
        throw Error('Categoria já existente')
      }

      state.push({
        id: generateSlug(categoryName),
        name: categoryName
      })
    },
    removeCategory: (state, { payload: categoryId }) => {
      return state.filter((category) => category.id !== categoryId)
      // remove all snippets
    }
  }
})

export const { writeCategory, removeCategory } = categorySlice.actions

export default categorySlice.reducer

export const getCategories = (state) => state.categories

export const getCategory = (categoryId) => (state) => (
  state.categories.find(
    (category) => category.id === categoryId
  )
)
