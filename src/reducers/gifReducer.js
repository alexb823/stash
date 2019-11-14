import axios from 'axios';

//Action types
const GIF_SEARCH_REQUEST = 'GIF_SEARCH_REQUEST';
const GIF_SEARCH_FAIL = 'GIF_SEARCH_FAIL';
const GIF_SEARCH_SUCCESS = 'GIF_SEARCH_SUCCESS';

//Action creators
const gifSearchRequest = () => ({
  type: GIF_SEARCH_REQUEST,
});

const gifSearchSuccess = gifData => ({
  type: GIF_SEARCH_SUCCESS,
  gifData,
})

const gifSearchFail = () => ({
  type: GIF_SEARCH_FAIL,
});

//Reducer
const initialState = {status: 'initial', gifData: []};

export const gifReducer = (state = initialState, action) => {
  switch(action.type) {
    case GIF_SEARCH_REQUEST:
      return {status: 'fetching', gifData: []};
    case GIF_SEARCH_SUCCESS:
      return {status: 'fetched', gifData: action.gifData};
    case GIF_SEARCH_FAIL:
      return {status: 'failed', gifData: [...state.gifData]};
    default:
    return state;
  }
}

//Thunks
export const fetchGifData = query => {
  return dispatch => {
    dispatch(gifSearchRequest());
    return axios
      .get('https://api.giphy.com/v1/gifs/search', {
        params: {api_key: process.env.REACT_APP_GIPHY_API_KEY, q: query}
      })
      .then(({data}) => dispatch(gifSearchSuccess(data.data)))
      .catch(() => dispatch(gifSearchFail()))
  }
}
  