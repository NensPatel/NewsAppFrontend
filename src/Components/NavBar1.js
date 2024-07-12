import React from "react";
import { Link } from "react-router-dom";

function NavBar1() {
  return (
    <div>
      <nav className=" navbar">
        <div className="container">
          <Link className="text-decoration-none text-white" to="/">
            <img src="/favicon.ico" alt="logo" className="h-25 w-25" />
          </Link>
          <h5 className="text-success fs-6">000000000000</h5>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
