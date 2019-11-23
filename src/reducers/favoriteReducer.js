//Action types
const ADDED_TO_FAVORITES = 'ADDED_TO_FAVORITES';
const REMOVED_FROM_FAVORITES = 'REMOVED_FROM_FAVORITES';
const GOT_FAVORITES_FROM_LS = 'GOT_FAVORITES_FROM_LS';

//Action creators
export const addedToFavorites = gif => ({
  type: ADDED_TO_FAVORITES,
  gif,
});

export const removedFromFavorites = id => ({
  type: REMOVED_FROM_FAVORITES,
  id,
});

export const gotFavoritesFromLS = favoriteData => ({
  type: GOT_FAVORITES_FROM_LS,
  favoriteData,
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
          const newIdHash = { ...state.favoriteIdHash };
          delete newIdHash[action.id];
          return newIdHash;
        })(),
      };
    case GOT_FAVORITES_FROM_LS:
      return { ...action.favoriteData };
    default:
      return state;
  }
};

