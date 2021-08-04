import { useReducer } from "react";

import { MovieContext } from "./MovieContext";
import { MovieReducer } from "./MovieReducer";
import axios from "axios";
import { CLEAR_MOVIES, DEFAULT_MOVIES, GET_GENRES, GET_MOVIE, SEARCH_MOVIES, SET_LOADING } from "../types";

const apiKey = `a5f72ec172de533c43bef2ced8373222`;

export const MovieState = ({ children }) => {
  const initialState = {
    movie: {},
    movies: [],
    loading: false,
    genres: [],
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const searchMovies = async (value) => {
    setLoading();
    const response = await axios.get(
      `
            https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}&page=1&include_adult=false`
    )
    dispatch({
        type:SEARCH_MOVIES,
        payload:response.data.results
    })
  };
  const getMovie = async(id)=>{
      setLoading()
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
      dispatch({
          type:GET_MOVIE,
          payload:response.data
      })
  }
  const getGenres = async()=>{
      setLoading()
      const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      )
      dispatch({
          type:GET_GENRES,
          payload:response.data.genres
      })
  }
  const getDefaultMovies = async ()=>{
    setLoading()
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
    dispatch({
        type:DEFAULT_MOVIES,
        payload:response.data.results
    })
  }


  const clearMovies = ()=>dispatch({type:CLEAR_MOVIES})
  const setLoading = () => dispatch({ type: SET_LOADING });

  const {movie,movies,genres,loading} = state;

  return(
      <MovieContext.Provider value={{
          setLoading,
          searchMovies,
          loading,
          getMovie,
          getDefaultMovies,
          clearMovies,
          genres,
          getGenres,
          movie,
          movies
      }}>
          {children}
      </MovieContext.Provider>
  )

};
