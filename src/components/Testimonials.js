import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonials_title">
        <p className="chukieu">Testimonials</p>
        <h3>What People Say</h3>
      </div>
      <div
        className="testimonials_content carousel slide"
        id="demo"
        data-bs-ride="carousel"
      >
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={0}
            className="active"
          />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={3} />
        </div>

        <div className="carousel-inner">
          <div className="testimonials_item carousel-item active">
            <div className="avatar">
              <img src="./img/team1.jpg" alt />
            </div>
            <p className="icon">"</p>
            <h3>OMG! Icannot believe. It's Awesome"</h3>
            <p className="content">
              My new site is so much faster and easier to work with than my old
              site. They are here to help the customers to get their success.
              Nemo sit eos, quod minus eius illo labore. Pellen tesque libero ut
              justo, ultrices in ligula.
            </p>
            <p className="name_customer">Johnson william</p>
            <span>Customer</span>
          </div>
          <div className="testimonials_item carousel-item">
            <div className="avatar">
              <img src="./img/team2.jpg" alt />
            </div>
            <p className="icon">"</p>
            <h3>OMG! Icannot believe. It's Awesome"</h3>
            <p className="content">
              My new site is so much faster and easier to work with than my old
              site. They are here to help the customers to get their success.
              Nemo sit eos, quod minus eius illo labore. Pellen tesque libero ut
              justo, ultrices in ligula.
            </p>
            <p className="name_customer">Johnson william</p>
            <span>Customer</span>
          </div>
          <div className="testimonials_item carousel-item">
            <div className="avatar">
              <img src="./img/team3.jpg" alt />
            </div>
            <p className="icon">"</p>
            <h3>OMG! Icannot believe. It's Awesome"</h3>
            <p className="content">
              My new site is so much faster and easier to work with than my old
              site. They are here to help the customers to get their success.
              Nemo sit eos, quod minus eius illo labore. Pellen tesque libero ut
              justo, ultrices in ligula.
            </p>
            <p className="name_customer">Johnson william</p>
            <span>Customer</span>
          </div>
          <div className="testimonials_item carousel-item">
            <div className="avatar">
              <img src="./img/team1.jpg" alt />
            </div>
            <p className="icon">"</p>
            <h3>OMG! Icannot believe. It's Awesome"</h3>
            <p className="content">
              My new site is so much faster and easier to work with than my old
              site. They are here to help the customers to get their success.
              Nemo sit eos, quod minus eius illo labore. Pellen tesque libero ut
              justo, ultrices in ligula.
            </p>
            <p className="name_customer">Johnson william</p>
            <span>Customer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
