import React from 'react';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import '@fontsource/roboto/700.css'

import Avatar from '@mui/joy/Avatar';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><Avatar alt="Remy Sharp" src="/images/Bharat.PNG"  sx={{ width: 56, height: 56 }}/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link" to="/">Home</Link>
    <Link className="nav-item nav-link" to="/about">About</Link>
    <Link className="nav-item nav-link" to="/contact">Contact</Link>
    </div>
  </div>
</nav>
        {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/about">About</Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/contact">Contact</Link>
            </Typography>
          </Toolbar>
        </AppBar> */}
      </div>
<br/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about"  element={<About/>} />
        <Route exact path="/contact"  element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
