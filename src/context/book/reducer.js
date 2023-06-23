import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from './actions.js'

// TODO: import actions and implement reducer for each action
export default function reducer(initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      const addedBook = action.payload
      saveToLocalStorage(addedBook)
      return {
        ...initialState, 
        favoriteBooks : [...state.favoriteBooks, addedBook]
      };
      
    case REMOVE_BOOK: 
    bookIdToRemove = action.payload;
    const removedBook = initialState.favoriteBooks.filter(
      (book) => book.id !== bookIdToRemove
    )
    saveToLocalStorage(removedBook)

    return {
      ...initialState,
      favoriteBooks: removedBook
    };
  case SEARCH_BOOKS:
    const searchResults = action.payload
    // TODO: Handle the SEARCH_BOOKS action and return the updated state
    return {
      ...initialState,
      bookSearchResults: searchResults,
    };

    default: 
    return initialState
    };
  

}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}