import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';

const App = () => {
  return (
    <div className="App">
      <Notifications />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
