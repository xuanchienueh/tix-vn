import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCarousel } from "../../../redux/actions/CarouselAction/carousel";
import "./HomeCarousel.scss";
const contentStyle = {
  height: "580px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const HomeCarousel = () => {
  const { carousel } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCarousel()), []);

  const renderImg = () => {
    return carousel.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              className="w-full opacity-0"
              src={item.hinhAnh}
              alt={`${item.hinhAnh}`}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="antd_carousel">
      <Carousel>
        {renderImg()}
        {/* 
      <div>
        <div style={contentStyle}>
          <img
            className="w-full"
            src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat-5_800x450.jpg"
            alt="3"
          />
        </div>
      </div>
       */}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
