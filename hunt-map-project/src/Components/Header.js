import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-style">
          <Link to="/Hunt-Map-Distance-Finder"><h1>Hunt Map Distance Finder</h1></Link>
          <Link to="/Hunt-Map-Distance-Finder"><h2>Maps</h2></Link>
          <ul>
            <li>
              <Link to="/Hunt-Map-Distance-Finder/S"><p>Stillwater Bayou</p></Link>
            </li>
            <li>
              <Link to="/Hunt-Map-Distance-Finder/L"><p>Lawson Delta</p></Link>
            </li>
            <li>
              <Link to="/Hunt-Map-Distance-Finder/D"><p>DeSalle</p></Link>
            </li>
          </ul>
        </div>
      );
}

export default Header;