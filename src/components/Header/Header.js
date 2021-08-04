import { Typography, AppBar, Toolbar } from "@material-ui/core";

import MovieIcon from "@material-ui/icons/Movie";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <MovieIcon style={{ alignSelf: "center" }} />
        <Typography style={{ marginLeft: "10px" }} variant="h5">
          Movie-searcher
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
