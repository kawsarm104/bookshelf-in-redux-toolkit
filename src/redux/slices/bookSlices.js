import { createSlice } from '@reduxjs/toolkit'
import books from '../../fakeData/books.json'

export const bookSlice = createSlice({
  name: 'book',
  initialState:{
      discover:books,
      readingList:[],
      finishedList:[],
  },
  reducers: {
    AddToList: (state, action) => {
     state.readingList.push(action.payload)
    },
    RemoveFromList: (state, action) => {
      state.readingList = state.readingList.filter(book => 
        book.id !== action.payload.id
        )
    }

  },
})

export const { AddToList, RemoveFromList} = bookSlice.actions

export default bookSlice.reducer 