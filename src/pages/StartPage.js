import { CircularProgress, Typography } from "@material-ui/core";
import { Fragment, useContext } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import SearchForm from "../components/SearchForm/SearchForm";

import { MovieContext } from "../context/MovieContext/MovieContext";

export const StartPage = () => {
  const { movies, loading,genres } = useContext(MovieContext);
  console.log(movies);
  return (
    <Fragment>
      <SearchForm/>
      <div className="row">
        {loading ? (
          <CircularProgress/>
        ) : movies.length === 0 ? (
          <Typography color='error' variant="h3">There are no movies with this name</Typography>
        ) : (
          movies.map((movie) => {
            return (
              <div className="col-sm-4 mb-4" key={movie.id}>
                <MovieCard movie={movie} genres={genres} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};
