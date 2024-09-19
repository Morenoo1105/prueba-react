import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-400">
      <div className="container mx-auto flex flex-row justify-between">
        <Link to="/">
          <h1>DEMO Streaming</h1>
        </Link>

        <nav>
          <ul className="flex flex-row gap-4">
            <li>Log in</li>
            <li>Start your free trial</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
