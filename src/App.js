import React from 'react';
import "./styles.css";

import Header from './components/header';
import Main from './pages/main';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;
