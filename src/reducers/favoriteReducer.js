//Action types
const ADDED_TO_FAVORITES = 'ADDED_TO_FAVORITES';
const REMOVED_FROM_FAVORITES = 'REMOVED_FROM_FAVORITES';

//Action creators
export const addedToFavorites = gif => ({
  type: ADDED_TO_FAVORITES,
  gif,
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
    default:
      return state;
  }
};
