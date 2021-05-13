import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './components/HomePage';


const App = () => {
  return <HomePage />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
