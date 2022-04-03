import React from "react";

export default function Delicious() {
  return (
    <section id="deliciousness" className="pb-5">
      <div className="background">
        <div className="deliciousness_content">
          <h3>Deliciousness jumping into the mouth.</h3>
          <div className="deliciousness_button">
            <button
              type="button"
              className="btn btn-outline-light btn_read_more"
            >
              <span>Read More</span>
              <i className="fas fa-angle-right" />
            </button>
            <button type="button" className="btn btn_contact_us">
              <span>Contact US</span>
              <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
        <div className="row count_number">
          <div className="count_item col-lg-3 col-md-3 col-6">
            <div className="wrap">
              <div className="icon">
                <i className="fas fa-building" />
              </div>
              <span className="counter">15,100</span>
              <p>Branches</p>
            </div>
          </div>
          <div className="count_item col-lg-3 col-md-3 col-6">
            <div className="wrap">
              <div className="icon">
                <i className="fas fa-utensils" />
              </div>
              <span className="counter">19,256</span>
              <p>Food Items</p>
            </div>
          </div>
          <div className="count_item col-lg-3 col-md-3 col-6">
            <div className="wrap">
              <div className="icon">
                <i className="fas fa-users" />
              </div>
              <span className="counter">12,100</span>
              <p>Chefs</p>
            </div>
          </div>
          <div className="count_item col-lg-3 col-md-3 col-6">
            <div className="wrap">
              <div className="icon">
                <i className="far fa-smile" />
              </div>
              <span className="counter">2,560</span>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background_video">
        <div className="video row py-lg-5">
          <a href data-toggle="modal" data-target="#video_Modal">
            <i className="fas fa-play" />
          </a>
        </div>
        <div className="modal" id="video_Modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  id="close_video"
                  data-dismiss="modal"
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <iframe
                  src="https://player.vimeo.com/video/305185528"
                  frameBorder={0}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
