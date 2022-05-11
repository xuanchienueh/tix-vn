import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
// import slider from "react-slick/lib/slider";
import CardAntd from "../../../components/FilmItem/CardAntd";
import "./ListMovie.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fas fa-chevron-right fa-2x"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fas fa-chevron-left fa-2x"></i>
    </div>
  );
}

export default function ListMovie({ props }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const arrFilm = useSelector((state) => state.CarouselReducer.danhSachPhim);
  const arrFilmDangChieu = arrFilm.filter((item) => item.dangChieu === true);
  const arrFilmSapChieu = arrFilm.filter((item) => item.sapChieu === true);

  const renderFilm = (arr) =>
    arr.map((item) => {
      return (
        <div key={item.maPhim}>
          <CardAntd props={item} />
        </div>
      );
    });
  return (
    <div className="relative">
      <div className="container px-[60px]">
        <Slider {...settings}>
          {/* {props ? renderFilm(arrFilmDangChieu) : renderFilm(arrFilmSapChieu)} */}
          {renderFilm(arrFilm)}
        </Slider>
      </div>
    </div>
  );
}
