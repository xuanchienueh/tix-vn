import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../style/main.scss";

export default function Header_home() {
  const [show, setShow] = useState(false);
  let close = () => setShow(false);

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
          <button className="menu" onClick={() => setShow(!show)}>
            <i className="fas fa-bars" />
          </button>
          <div className="modal" id="menu_Modal">
            <Modal show={show} onHide={close}>
              <Modal.Header className="modal-header">
                <button type="button" className="close mr-5" onClick={close}>
                  <i className="fas fa-times" />
                </button>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-body">
                  <ul>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Home
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        About
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Services
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        404
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Landing Page
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Shot Codes
                      </a>
                    </li>
                    <li className="text-center py-3">
                      <a className="text-white font-weight-bold" href="#">
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </nav>
    </header>
  );
}
