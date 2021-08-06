import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import GridCard from './components/GridCard';
import Movie from "./components/Movie";


function App() {
  return (

      <Router>
        <div className="container-fluid mt-4">
          <Switch>
              <Route exact path="/">
                <GridCard />
              </Route>
              <Route  path="/detail/:id">
                <Movie />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
