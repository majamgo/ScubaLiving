import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Produkter from './components/Produkter/Produkter';
import Rejser from './components/Rejser/Rejser';
import Kurser from './components/Kurser/Kurser';
import Kontakt from './components/Kontakt/Kontakt';
import OmOs from './components/OmOs/OmOs';
import Login from './components/Login/Login';

function App() {
  return (

    <BrowserRouter>
      <div className="app">

        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/produkter" component={Produkter} />
        <Route path="/rejser" component={Rejser} />
        <Route path="/kurser" component={Kurser} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/omos" component={OmOs} />
        <Route path="/login" component={Login} />

      </div>
    </BrowserRouter>

  );
}

export default App;
