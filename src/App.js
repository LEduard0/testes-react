//import para as propriedades do React
import React from 'react';
//Import para as rotas do site
import Routes from './routes';
//Import para o css do site
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
