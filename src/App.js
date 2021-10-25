import './App.scss';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
