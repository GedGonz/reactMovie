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


function App() {
  return (
    
      <Router>
        <Nav/>
        <div className="container-fluid">
          <Switch>
              <Route exact path="/">
                <GridCard />
              </Route>
              <Route  path="/detail/:id">
                <Movie />
              </Route>
              <Route  path="/search">
                <Search />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
