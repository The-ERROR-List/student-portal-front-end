
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./context/Auth";
import Login from "./components/login/login";
import Home from "./components/home/home";
import State from './context/State';
import Content from'./context/content'
function App() {
  return (
    <div className="App">
      <Content>
      <Auth>
        <State>
          <Home />
          <Login />
        </State>
      </Auth>
      </Content>

    </div>
  );
}

export default App;
