
import './App.sass';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Auth from "./context/Auth";
import { When } from 'react-if'
// import Login from "./components/login/Login";
// import Signup from "./components/signup/signup";
function App() {
  return (
    <div className="App">

      <Header />
      <Auth>
        {/* <Login /> */}
        {/* <Signup /> */}
      </Auth>
    </div>
  );
}

export default App;
