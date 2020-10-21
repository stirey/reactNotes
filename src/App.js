import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import {
  //renaming BrowserRouter as Router for efficiency later on--less typing
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
//the header will not be affected by route changes since it is not wrapped in a router
      <Header />
//in order for React Router Dom to work, everything that is part of the package has to be wrapped in a Router
      <Router>
        <Sidebar/>
      </Router>
      <Footer/>
    </div>
  );
}
  

export default App;
