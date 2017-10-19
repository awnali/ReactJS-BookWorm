import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () =>
    <div className="App">
        <Link to="/login" >Login</Link>
        <Link to="/" >Home</Link>
    </div>

export default HomePage;
