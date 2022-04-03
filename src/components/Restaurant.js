import React from "react";

export default function Restaurant() {
  return (
    <section id="restaurant">
      <div className="row">
        <div className="restaurant_img col-lg-6 col-md-12">
          <img src="./img/banner3.jpg" alt />
        </div>
        <div className="restaurant_content col-lg-6 col-md-12">
          <div className="introduction">
            <p className="chukieu">More than 3000 Restaurants</p>
            <h3>Book a table easly at the best price</h3>
            <span>
              Vestibulum ante ipsum primis in faucibus orci luctus turpis
              sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam
              tesque et libero ut justo ultrices in.
            </span>
          </div>
          <div className="deal_food row">
            <div className="deal_food_item col-lg-6 col-md-6 col-6">
              <div className="icon">
                <i className="fas fa-thumbs-up" />
              </div>
              <h3>Best Deals</h3>
              <p>Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
            </div>
            <div className="deal_food_item col-lg-6 col-md-6 col-6">
              <div className="icon">
                <i className="fas fa-utensils" />
              </div>
              <h3>Best Food</h3>
              <p>Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
