import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { useStyles } from "./styles";
import { MovieState } from "./context/MovieContext/MovieState";
import {StartPage} from "./pages/StartPage"
import { MoviePage } from "./pages/MoviePage";
function App() {
  const classes = useStyles();
  return (
    <MovieState>
      <BrowserRouter>
        <Header />
        <main className={classes.container}>
          <Container max-width="sm">
            <Switch>
              <Route path="/" exact component={StartPage} />
              <Route path="/movies/:id" component={MoviePage} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </MovieState>
  );
}

export default App;
