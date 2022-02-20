import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Aboutpage from "./Components/Aboutpage";
import Contactpage from "./Components/Contactpage";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage}>
            <Homepage />
          </Route>
          <Route path="/about" exact component={Aboutpage}>
            <Aboutpage />
          </Route>
          <Route path="/contact" exact component={Contactpage}>
            <Contactpage />
          </Route>
        </Switch>
        <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
