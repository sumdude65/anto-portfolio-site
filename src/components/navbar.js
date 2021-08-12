import React, { useState } from "react";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    const firstLine = document.getElementById("navbar-1");
    const secondLine = document.getElementById("navbar-2");
    const thirdLine = document.getElementById("navbar-3");
    if (secondLine.style.transform === "rotate(45deg)") {
      firstLine.style.display = "inline-block";
      secondLine.style.transform = "rotate(0deg)";
      thirdLine.style.transform = "rotate(0deg)";
      setShowModal(false);
    } else {
      firstLine.style.display = "none";
      secondLine.style.transform = "rotate(45deg)";
      thirdLine.style.transform = "rotate(-45deg)";
      setShowModal(true);
    }
  };
  return (
    <header>
      <div className="logo">
        <h1>Frank</h1>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span id="navbar-1"></span>
        <span id="navbar-2"></span>
        <span id="navbar-3"></span>
      </div>
      {/*navigation modal for phones*/}
      {showModal ? (
        <div className="navbar-modal">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
