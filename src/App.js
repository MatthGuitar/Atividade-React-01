import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {NavBar} from './NavBar'
import {Article} from './Article'
import {Aside} from './Aside'
import {Footer} from './Footer'


function App() {
  return (
   <div className="App">
        <Header/>
        <NavBar/>
        <Article/>
        <Aside/>
        <Footer/>
      </div>

  );
}

export default App;
