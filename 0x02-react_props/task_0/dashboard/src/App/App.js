import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
