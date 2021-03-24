import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Secondnavbar from './components/Secondnavbar';



class App extends Component {
  render(){
    return (
      <div>
     <NavBar />
     <div>
     <ul>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>

       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
       <li><h1>Lorem</h1></li>
     </ul>
     </div>
     <Footer />
      </div>
    );
  }
}

export default App;
