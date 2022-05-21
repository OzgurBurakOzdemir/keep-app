import MyNavbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "rsuite/dist/rsuite.min.css";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <MyNavbar />
          <Sidebar />
        </header>
      </Provider>
    </div>
  );
}

export default App;
