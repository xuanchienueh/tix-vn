import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container py-md-5 py-2">
          <div className="row ">
            <div className="dinner row__contact col-lg-4 ">
              <h3>Diner</h3>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet Semper at elit.
              </p>
              <a className="icon__diner" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="icon__diner" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="icon__diner" href="#">
                <i className="fab fa-instagram" />
              </a>
              <a className="icon__diner" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <div className="row__contact col-lg-2">
              <h4>Usefull Links</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog posts</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="row__contact col-lg-2">
              <h4>More Info</h4>
              <ul>
                <li>
                  <a href="#">History</a>
                </li>
                <a href="#"></a>
                <li>
                  <a href="#" />
                  <a href="#">Vision &amp; Values</a>
                </li>
                <li>
                  <a href="#">Awards</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="row__contact col-lg-4 form-group">
              <h4>Subscribe to our Newsletter</h4>
              <p>
                Enter your email and receive the latest news, updates and
                special offers from us.
              </p>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                style={{ backgroundColor: "#232220", border: "none" }}
              />
              <button
                type="button"
                className="border-0 rounded btn btn-info form-control"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
