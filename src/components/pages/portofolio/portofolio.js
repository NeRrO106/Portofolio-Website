import React from "react";
import "./portofolio.css";

const Portofolio = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-custom-dropdown dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            C
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            C++
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            C#
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            Java
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            Python
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            Unity
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            FullStack
          </button>
        </li>
        <li>
          <button className="btn btn-custom-dropdown" href="#">
            Frontend
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Portofolio;
