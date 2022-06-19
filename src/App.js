// import Auth from "./context/Auth";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
// import './App.css'
function App() {
  return (
    <div>
      {/* <Auth> */}
        <Login />
        <Signup />
      {/* </Auth> */}
    </div>
  );
}

export default App;
