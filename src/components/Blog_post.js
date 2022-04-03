import React from "react";

export default function Blog_post() {
  return (
    <section id="blog_post">
      <div className="blog_title">
        <p className="chukieu">Latest Posts</p>
        <h3>Blog Posts</h3>
      </div>
      <div className="blog_content container">
        <div className="blog_items row">
          <div className="blog_item col-lg-4 col-md-6 col-12 ">
            <div className="background_heading">
              <button className="btn">
                {" "}
                <a href="#">Reciepe</a>
              </button>
              <div className="icon_clock">
                {" "}
                <i className="far fa-clock" />
              </div>
              <span>10 Min Cook</span>
            </div>
          </div>
          <div className="blog_item col-lg-4 col-md-6 col-12 ">
            <div className="background_heading">
              <button className="btn">
                {" "}
                <a href="#">Reciepe</a>
              </button>
              <div className="icon_clock">
                {" "}
                <i className="far fa-clock" />
              </div>
              <span>10 Min Cook</span>
            </div>
          </div>
          <div className="blog_item col-lg-4 col-md-6 col-12 ">
            <div className="background_heading">
              <button className="btn">
                {" "}
                <a href="#">Reciepe</a>
              </button>
              <div className="icon_clock">
                {" "}
                <i className="far fa-clock" />
              </div>
              <span>10 Min Cook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
