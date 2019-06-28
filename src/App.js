import React from 'react';
import Routes from './routes';

import "./styles.css";

import Header from './components/header';
import Main from './pages/main';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
)

export default App;
