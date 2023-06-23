import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from './actions';

export default function reducer(initialState, {action, payload}) {
  switch (action) {
    case ADD_BOOK:
      const saveLocal = [...initialState.favoriteBooks, payload]
      saveToLocalStorage(saveLocal)
      return {
        ...initialState,
        favoriteBooks: [...initialState.favoriteBooks, payload]
      };

    case REMOVE_BOOK:
      const updatedBooks = initialState.favoriteBooks.filter(
        (book) => book.id !== payload
      );
      saveToLocalStorage(updatedBooks)

      return {
        ...initialState,
        favoriteBooks: updatedBooks
      };

    case SEARCH_BOOKS:
      return {
        ...initialState,
        bookSearchResults: payload
      };

    default:
      return initialState;
  }
}

function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks));
}