// TODO: import actions and implement reducer for each action
import { ADD_BOOK, SEARCH_BOOKS, REMOVE_BOOK } from "./actions"

export default function reducer(state, data) {
  let favoriteBooks = null
  switch (data.action) {
    case ADD_BOOK:
      favoriteBooks = [...state.favoriteBooks, data.payload]
      saveToLocalStorage(favoriteBooks)
      return { ...state, favoriteBooks }
    case SEARCH_BOOKS:
      return { ...state, bookSearchResults: data.payload }
    case REMOVE_BOOK:
      favoriteBooks = state.favoriteBooks.filter(
        (book) => book.id !== data.payload
      )
      saveToLocalStorage(favoriteBooks)
      return { ...state, favoriteBooks }
    default:
      return state
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem("favoriteBooks", JSON.stringify(favBooks))
}
