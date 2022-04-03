import React from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../style/main.scss";

export default function Header_home() {
  return (
    <header id="header-diner" className="container">
      <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          Diner
        </a>
        <div className="search_menu">
          <form className="form-inline" action="/action_page.php">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search here..."
            />
            <button className="btn" type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
          <button className="change_theme">
            <i className="far fa-sun" />
            <i className="far fa-moon" />
          </button>
          <button
            className="menu"
            data-toggle="modal"
            data-target="#menu_Modal"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="modal" id="menu_Modal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    <i className="fas fa-times" />
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">404</a>
                    </li>
                    <li>
                      <a href="#">Landing Page</a>{" "}
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Shot Codes</a>{" "}
                    </li>
                    <li>
                      <a href="#">Email</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
