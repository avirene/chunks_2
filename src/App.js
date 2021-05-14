import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PracticePage } from './components/PracticePage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/practice">
          <PracticePage />
        </Route>
        <Route path="/">
            <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
