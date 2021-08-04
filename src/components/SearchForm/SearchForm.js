import React, { useContext, useEffect, useState } from "react";
import { Grid, IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { useStyles } from "./SearchFormStyles";
import { MovieContext } from "../../context/MovieContext/MovieContext";
const SearchForm = () => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const movies = useContext(MovieContext);

  const onSearch = (e) => {
    e.preventDefault();
    movies.clearMovies();
    if (value.trim()) {
      movies.searchMovies(value.trim());
    } else {
      movies.getDefaultMovies();
    }
    setValue("");
  };
  useEffect(() => {
    movies.getDefaultMovies();
    movies.getGenres();
  }, []);
  const onDefault = () => {
    movies.getDefaultMovies();
  };
  return (
    <Grid align="center">
      <Paper component="form" className={classes.root}>
        <IconButton onClick={onDefault}>
          <MovieFilterIcon />
        </IconButton>

        <InputBase
          className={classes.input}
          placeholder="Type the movie"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={onSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};
export default SearchForm;
