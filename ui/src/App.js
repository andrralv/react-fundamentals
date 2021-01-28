import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Empleados from "./pages/Empleados";
import Solicitud from './pages/Solicitud';
import Footer from './components/Footer';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const SolicitudWithFooter = Footer(Solicitud);
  const EmpleadosWithFooter = Footer(Empleados);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/empleados">
              <EmpleadosWithFooter />
          </Route>
          <Route path="/">
              <SolicitudWithFooter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
