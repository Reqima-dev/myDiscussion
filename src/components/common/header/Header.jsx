import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import {Link} from "react-router-dom"

const Header = () => {

  const [navbar, setNavbar] = useState(false)


  return (
    <>
      <Head />

      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={ navbar ? "navbar": 'flex'} 
              onClick={() => setNavbar(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">Culture</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/memes">memes</Link>
              </li>
              <li>
                <Link to="/sports">sports</Link>
              </li>
              <li>
                <Link to="/boxed">boxed</Link>
              </li>
              <li>
                <Link to="/reviews">reviews</Link>
              </li>
            </ul>
            <button className="barIco" onClick={() => setNavbar (!navbar)}>
              {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
