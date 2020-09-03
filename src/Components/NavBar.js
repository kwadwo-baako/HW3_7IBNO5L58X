import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="#">Hulk</a>

          <a href="#" className="logo is-active">
            Mavel
          </a>
          <a href="#">Venom</a>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
