import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home'
import Menu from './Menu';

const Navbar=()=>{
    return(
        <Router>
            <Menu />
            <Route path="/" component={Home} />
        </Router>
    )
}

export default Navbar