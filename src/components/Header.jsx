import React from "react";
import { Link } from "react-router-dom";
import NaviTab from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="header">
      <NaviTab></NaviTab>
      <div className="width">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              fill="currentColor"
              d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"
            />
          </svg>
        </a>
        <h1>
          <Link to="/">COiner!</Link>
        </h1>
      </div>
    </header>
  );
}
