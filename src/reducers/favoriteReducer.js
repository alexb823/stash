//Action types
const ADDED_TO_FAVORITES = 'ADDED_TO_FAVORITES';
const REMOVED_FROM_FAVORITES = 'REMOVED_FROM_FAVORITES';

//Action creators
export const addedToFavorites = gif => ({
  type: ADDED_TO_FAVORITES,
  gif,
});

export const removedFromFavorites = id => ({
  type: REMOVED_FROM_FAVORITES,
  id,
});

//Reducer
const initialState = { favoriteGifs: [], favoriteIdHash: {} };

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_TO_FAVORITES:
      return {
        favoriteGifs: [...state.favoriteGifs, action.gif],
        favoriteIdHash: { ...state.favoriteIdHash, [action.gif.id]: true },
      };
    case REMOVED_FROM_FAVORITES:
      return {
        favoriteGifs: [...state.favoriteGifs].filter(
          gif => gif.id !== action.id
        ),
        favoriteIdHash: (() => {
          const newIdHash = {...state.favoriteIdHash};
          delete newIdHash[action.id];
          return newIdHash
        })()
      };
    default:
      return state;
  }
};
