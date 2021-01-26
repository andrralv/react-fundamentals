import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Empleados from './pages/Empleados';
import Solicitud from './pages/Solicitud';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/empleados">
            <Empleados />
          </Route>
          <Route path="/">
            <Solicitud />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
