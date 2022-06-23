
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./context/Auth";
import Login from "./components/login/login";
import Home from "./components/home/home";
import State from './context/State';

function App() {
  return (
    <div className="App">
      <Auth>
        <State>
          <Home />
          <Login />
        </State>
      </Auth>
    </div>
  );
}

export default App;
