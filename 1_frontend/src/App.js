import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Footer from './components/Footer';
import Header from './components/Header';
// Pages
import HomePage from './pages/HomePage';
import LoginRegisterPage from './pages/LoginRegisterPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hello' component={LoginRegisterPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
