import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="bg-blue-500 text-white p-3 w-[200px] rounded-lg">
          <Link to="/solutions/hexnode-kiosk">
            Go to see task
          </Link>

        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-blue-500 text-white p-3 rounded-lg w-[200px]">
          <Link target='_blank' to="https://www.hexnode.com/solutions/hexnode-kiosk/">
            Go to real
          </Link>
        </p>
      </header>
    </div>
  );
};

export default Solutions;