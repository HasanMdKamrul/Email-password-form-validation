import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <h1>
            <Link to= '/register'>Register</Link>
            <Link to= '/login'>Login</Link>
            </h1>  
            <Outlet/>
        </div>
    );
};

export default Main;