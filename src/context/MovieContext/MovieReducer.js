import {
  DEFAULT_MOVIES,
  GET_GENRES,
  GET_MOVIE,
  SEARCH_MOVIES,
  SET_LOADING,
} from "../types";

const handlers = {
  [SEARCH_MOVIES]: (state, { payload }) => ({
    ...state,
    movies: payload,
    loading: false,
  }),
  [GET_MOVIE]: (state, { payload }) => ({
    ...state,
    movie: payload,
    loading: false,
  }),
  [GET_GENRES]: (state, { payload }) => ({
    ...state,
    genres: payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  [DEFAULT_MOVIES]: (state, { payload }) => ({
    ...state,
    movies: payload,
    loading: false,
  }),
  DEFAULT: (state) => state,
};

export const MovieReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
