import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Empleados from './pages/Empleados';
import Solicitud from './pages/Solicitud';
import useFooter from './components/useFooter';

function App() {

  const EmpleadosWithFooter = useFooter(Empleados);
  const SolicitudesWithFooter = useFooter(Solicitud);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/empleados">
            <EmpleadosWithFooter />
          </Route>
          <Route path="/">
            <SolicitudesWithFooter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
