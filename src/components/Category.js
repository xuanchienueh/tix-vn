import React from "react";

export default function Category() {
  return (
    <section id="category">
      <div className="category_title">
        <p className="chukieu">What's New</p>
        <h3>Popular Categories</h3>
      </div>
      <ul className="category_content row">
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g1.jpg" alt />
          <div className="name_price">
            <h6>Vegetarian</h6>
            <span>$350</span>
          </div>
        </li>
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g2.jpg" alt />
          <div className="name_price">
            <h6>Drinks</h6>
            <span>$550</span>
          </div>
        </li>
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g3.jpg" alt />
          <div className="name_price">
            <h6>Lunch</h6>
            <span>$650</span>
          </div>
        </li>
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g4.jpg" alt />
          <div className="name_price">
            <h6>Bakely</h6>
            <span>$550</span>
          </div>
        </li>
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g5.jpg" alt />
          <div className="name_price">
            <h6>Desserts</h6>
            <span>$750</span>
          </div>
        </li>
        <li className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src="./img/g6.jpg" alt />
          <div className="name_price">
            <h6>Pizza</h6>
            <span>$850</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
