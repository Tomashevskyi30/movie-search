import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./MovieCardStyles";
import Rating from "@material-ui/lab/Rating";
import { formatDate, getMovieGenres, getNames, getYear } from "../../utils";
import image404 from "../../img/404.jpg";
const MovieCard = ({ movie, genres }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.cardWrapper}>
      <Card className={classes.card} variant="outlined">
        {movie.release_date ? (
          <Link to={`/movie-search/movies/${movie.id}`} className={classes.link}>
            <Typography variant="h5" className={classes.cardTitle}>
              {`${movie.title}(${getYear(movie.release_date)})`}
            </Typography>
          </Link>
        ) : (
          <Typography variant="h5" className={classes.cardTitle}>
            {`${movie.title}`}
          </Typography>
        )}

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

        <CardContent className={classes.innerCard}>
          {movie.poster_path !== null ? (
            <Link to={`/movie-search/movies/${movie.id}`} className={classes.link}>
              <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                title="poster"
                alt="logo"
              />
            </Link>
          ) : (
            <CardMedia
              className={classes.media}
              image={`${image404}`}
              title="poster"
              alt="logo"
            />
          )}

          <CardContent className={classes.cardBody}>
            <Typography variant="body2" className={classes.cardInfo}>
              {movie.overview}
            </Typography>
            <Typography variant="body2" className={classes.cardYear}>
              Release date:{" "}
              {movie.release_date ? formatDate(movie.release_date) : `unknown`}
            </Typography>
            <Typography variant="body2" className={classes.cardGenres}>
              genres:{getNames(getMovieGenres(genres, movie.genre_ids))}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Divider className={classes.dividerRoot} light />
    </Grid>
  );
};
export default MovieCard;
