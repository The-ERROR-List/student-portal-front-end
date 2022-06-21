
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./context/Auth";
import Login from "./components/login/login";
import Main from "./components/main/main";
import State from './context/State';
function App() {
  return (
    <div className="App">
      <Auth>
      <State>
        <Main />
        <Login />
        </State>
      </Auth>
    </div>
  );
}

export default App;
