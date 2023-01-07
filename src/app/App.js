import React from 'react';
import './App.css';
import './assets/css/main.css';
import Routes from './Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export default function App(props) {
  return (
    <div>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}
