import {
  Button,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext/MovieContext";
import { getNames, getYear } from "../utils";
import { useStyles } from "./MoviePageStyles";
import image404 from "../img/404.jpg";
export const MoviePage = ({ match }) => {
  const classes = useStyles();
  const { getMovie, loading, movie } = useContext(MovieContext);

  useEffect(() => {
    getMovie(match.params.id);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  const {
    title,
    genres,
    poster_path,
    budget,
    overview,
    runtime,
    revenue,
    production_countries,
    release_date,
    production_companies,
    id,
  } = movie;
  let renderCompanies = "";
  let renderGenres = "";
  let renderCountries = "";
  if (genres) {
    renderGenres = getNames(genres);
  }
  if (production_countries) {
    renderCountries = getNames(production_countries);
  }
  if (production_companies) {
    renderCompanies = getNames(production_companies);
  }
  const goToPageHandler = () => {
    window.open(`https://www.themoviedb.org/movie/${id}`);
  };

  return (
    <div>
      <Container max-width="sm" className={classes.container}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <div className={classes.ratingBlock}>
          <Rating
            className={classes.ratingStars}
            readOnly={true}
            value={Math.round(movie.vote_average)}
            max={10}
          />
          <Typography variant="h6" className={classes.ratingNum}>
            {movie.vote_average}
          </Typography>
        </div>
        <div className={classes.movieBody}>
          {poster_path ? (
            poster_path !== null ? (
              <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/w185/${poster_path}`}
                title="poster"
              />
            ) : (
              <CardMedia
                className={classes.media}
                image={`${image404}`}
                title="poster"
              />
            )
          ) : (
            <CardMedia
              className={classes.media}
              image={`${image404}`}
              title="poster"
            />
          )}
          <Typography className={classes.overview}>{overview}</Typography>
        </div>
        <div className={classes.movieInfo}>
          <Typography>
            {release_date && `Year: ${getYear(release_date)}`}
          </Typography>
          <Typography>Country: {renderCountries}</Typography>
          <Typography>Genres: {renderGenres}</Typography>
          <Typography>
            Budget: {new Intl.NumberFormat().format(budget)} $
          </Typography>
          <Typography>
            Revenue: {new Intl.NumberFormat().format(revenue)} $
          </Typography>
          <Typography>Runtime: {runtime} min</Typography>
          <Typography>Production: {renderCompanies}</Typography>
        </div>
        <div className={classes.btnContainer}>
          <Link to="/movie-search" className={classes.link}>
            <Button className={classes.btn} variant="contained">
              Back
            </Button>
          </Link>
          <Button
            onClick={goToPageHandler}
            className={classes.btn}
            variant="contained"
          >
            Page on movieDB
          </Button>
        </div>
      </Container>
    </div>
  );
};
