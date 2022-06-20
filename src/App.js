// import './App.scss';
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./context/Auth";
import Login from "./components/login/login";
import Main from "./components/main/main";
import Content from "./components/content/content";
function App() {
  return (
    <>
      <Content />
      {/* <div className="App">
       <Auth>
        <Main />
        <Login />
      </Auth> 
    </div> */}
    </>

  );
}

export default App;
