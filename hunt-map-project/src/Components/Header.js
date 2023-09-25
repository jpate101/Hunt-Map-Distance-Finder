import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-style">
          <h1>Hunt Map Distance Finder</h1>
          <h2>Maps</h2>
          <ul>
            <li>
              <Link to="/S"><p>Stillwater Bayou</p></Link>
            </li>
            <li>
              <Link to="/L"><p>Lawson Delta</p></Link>
            </li>
            <li>
              <Link to="/D"><p>DeSalle</p></Link>
            </li>
          </ul>
        </div>
      );
}

export default Header;