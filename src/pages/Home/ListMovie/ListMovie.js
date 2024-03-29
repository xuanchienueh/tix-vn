import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Slider from "react-slick";
import CardAntd from "../../../components/FilmItem/CardAntd";
import styles from "./listMovie.module.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} style={{ ...style, display: "block" }} onClick={onClick}>
      <i className="fas fa-chevron-right fa-2x"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className}`} style={{ ...style, display: "block" }} onClick={onClick}>
      <i className="fas fa-chevron-left fa-2x"></i>
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          slidesPerRow: 1,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <div />,
          prevArrow: <div />,
        },
      },
    ],
  };
  const arrFilm = useSelector((state) => state.CarouselReducer.listFilm);
  const filmDangChieu = arrFilm.filter((item) => item.dangChieu === true);
  const filmSapChieu = arrFilm.filter((item) => item.sapChieu === true);

  const renderFilm = (arr) =>
    arr.map((item) => {
      return (
        <div key={item.maPhim}>
          <CardAntd props={item} />
        </div>
      );
    });
  return (
    <div className={styles.listMovie}>
      <div className="relative">
        <div className="container mx-auto sm:px-0 xl:px-[60px] ">
          <Slider {...settings}>
            {props ? renderFilm(filmDangChieu) : renderFilm(filmSapChieu)}
          </Slider>
        </div>
      </div>
    </div>
  );
}

ListMovie.propTypes = {
  props: PropTypes.bool.isRequired,
};
