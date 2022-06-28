
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./context/Auth";
import Login from "./components/login/login";
import Home from "./components/home/home";
import State from './context/State';
import Content from './context/content'
import Announcement from "./context/announcement"
import Zoom from './context/zoom'
import Style_Content from './components/class/content/style';
function App() {
  return (
    <div className="App">
      {/* <Style_Content/> */}
      <Zoom>

        <Announcement>
          <Content>
            <Auth>
              <State>
                <Home />
                <Login />
              </State>
            </Auth>
          </Content>
        </Announcement>
      </Zoom>

    </div >
  );
}

export default App;
