import { BrowserRouter, Route} from "react-router-dom"
import Signin from './components/Signin';
import Employee from './components/Employee';
import Project from './components/Project';
import ShowEmployee from "./components/ShowEmployee";
import ShowProject from "./components/ShowProject";
import Navbar from "./components/Navbar";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/">
            <Signin />
        </Route>

        <Route path="/employee">
            <Employee />
        </Route>

        <Route path="/project">
            <Project />
        </Route>

        <Route path="/showemployee">
            <ShowEmployee />
        </Route>
        <Route path="/showproject">
            <ShowProject />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
