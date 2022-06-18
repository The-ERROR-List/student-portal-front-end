import Auth from "./context/Auth";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
function App() {
  return (
    <div>
      <Auth>
        <Login />
        <Signup />
      </Auth>
    </div>
  );
}

export default App;
