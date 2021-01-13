
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import SignInPage from './pages/signIn';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SignInPage} exact></Route>
        {/* <Router path="/" component={Home} exact></Router> */}
        
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
