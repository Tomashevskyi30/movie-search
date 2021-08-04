import { Typography, AppBar, Toolbar } from "@material-ui/core";

import MovieIcon from '@material-ui/icons/Movie';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <MovieIcon/>
        <Typography variant="h6">Movie-searcher</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header