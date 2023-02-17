
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Index'
import SignInPage from './pages/signIn';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        {/* <Router path="/" component={Home} exact></Router> */}

      </Switch>
      {/* <Home /> */}
    </Router>
  );
}

export default App;
