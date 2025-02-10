import React from "react";
import "../styles/styles.css"
const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand my-3" href="#">
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
