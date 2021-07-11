import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categories'
import snippetsReducer from './features/snippets'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    snippets: snippetsReducer
  }
})

export default store
