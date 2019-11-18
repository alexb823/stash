import axios from 'axios';

//Action types
const GIF_SEARCH_REQUEST = 'GIF_SEARCH_REQUEST';
const GIF_SEARCH_FAIL = 'GIF_SEARCH_FAIL';
const GIF_SEARCH_SUCCESS = 'GIF_SEARCH_SUCCESS';
const GIF_FETCHED_MORE = 'GIF_FETCHED_MORE';

//Action creators
const gifSearchRequest = () => ({
  type: GIF_SEARCH_REQUEST,
});

const gifSearchSuccess = (gifData, totalCount) => ({
  type: GIF_SEARCH_SUCCESS,
  gifData,
  totalCount,
});

const gifFetchedMore = (gifMoreData, totalCount) => ({
  type: GIF_FETCHED_MORE,
  gifMoreData,
  totalCount,
});

const gifSearchFail = () => ({
  type: GIF_SEARCH_FAIL,
});

//Reducer
const initialState = { status: 'initial', gifData: [], totalCount: 0 };

export const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIF_SEARCH_REQUEST:
      return { ...state, status: 'fetching' };
    case GIF_SEARCH_SUCCESS:
      return {
        status: 'fetched',
        gifData: action.gifData,
        totalCount: action.totalCount,
      };
    case GIF_FETCHED_MORE:
      return {
        status: 'fetched',
        gifData: [...state.gifData, ...action.gifMoreData],
        totalCount: action.totalCount,
      };
    case GIF_SEARCH_FAIL:
      return { ...state, status: 'failed' };
    default:
      return state;
  }
};

//Thunks
export const fetchGifData = query => {
  return dispatch => {
    dispatch(gifSearchRequest());

    return axios
      .get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: query,
          limit: 30,
        },
      })
      .then(({ data }) =>
        dispatch(gifSearchSuccess(data.data, data.pagination.total_count))
      )
      .catch(() => dispatch(gifSearchFail()));
  };
};

export const fetchMoreGifData = (query, offset) => {
  return dispatch => {
    // dispatch(gifSearchRequest());

    return axios
      .get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: query,
          offset,
          limit: 30,
        },
      })
      .then(({ data }) =>
        dispatch(gifFetchedMore(data.data, data.pagination.total_count))
      )
      .catch(() => dispatch(gifSearchFail()));
  };
};
