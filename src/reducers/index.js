import { combineReducers } from 'redux';
import { gifReducer } from './gifReducer';
import { favoriteReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  searchData: gifReducer,
  favoriteData: favoriteReducer,
});

export default rootReducer;
