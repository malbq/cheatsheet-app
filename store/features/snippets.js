import { createSlice } from '@reduxjs/toolkit'
import { uid } from 'uid'

export const snippetsSlice = createSlice({
  name: 'snippets',
  initialState: [],
  reducers: {
    writeSnippet: (state, { payload: snippet }) => {
      state.push({
        id: uid(),
        ...snippet
      })
    },
    removeSnippet: (state, { payload: snippetId }) => {
      state = state.filter((snippet) => snippet.id === snippetId)
    }
  }
})

export const { writeSnippet } = snippetsSlice.actions


export default snippetsSlice.reducer

export const getSnippets = (categoryId) => (state) =>(
  state.snippets.filter(
    (snippet) => snippet.categoryId === categoryId
  )
)
