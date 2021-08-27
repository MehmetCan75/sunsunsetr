import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Mainpage from './Components/Mainpage/Mainpage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Villa from './Components/Villa/Villa';
import Apparts from './Components/Apparts/Apparts';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/sunsunsetr" exact component={Mainpage} />
      <Route path="/Villa" exact component={Villa} />
      <Route path="/appartement" exact component={Apparts} />
      <Route path="/contact" exact component={Contact} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
