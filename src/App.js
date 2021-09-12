import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import GridCard from './components/GridCard';
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Spinner from "./components/Spinner";


function App() {
  return (
    
      <Router basename={process.env.PUBLIC_URL}>
        <Nav/>
        <div className="container-fluid">
          <Switch>
              <Route exact path="/detail/:id">
                <Movie />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/spinner">
                <Spinner />
              </Route>
              <Route exact path="/">
                <GridCard />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
