import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Empleados from './pages/Empleados';
import Solicitud from './pages/Solicitud';
import useFooter from './components/useFooter';

function App() {

  const EmpleadosWithFooter = useFooter(Empleados);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/empleados">
            <EmpleadosWithFooter />
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
