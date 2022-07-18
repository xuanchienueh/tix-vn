import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { getInfoShowtime } from "../../redux/actions/QuanLyRapAction/ActionName";
import ShowtimeDetail from "./ShowtimeDetail";
import Header from "../../templates/Layout/Header/Header";

const styleBlur = {
  filter: "blur(3px)",
  WebkitFilter: "blur(3px)",
  minHeight: "1000px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const styleNotBlur = {
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  top: "3%",
  left: "0px",
  zIndex: "1",
  width: "100%",
  height: "106%",
};

export default function Detail() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  let { id } = useParams();
  const dispatch = useDispatch();
  let { infoShowtime } = useSelector((state) => state.cinemaManagerReducer);
  useEffect(() => {
    dispatch(getInfoShowtime(id));
    window.scrollTo(0, 10);
    return () => {
      window.removeEventListener("resize", handleGetDim);
    };
  }, [id]);

  const handleGetDim = ({ target }) => {
    setScreenWidth(target.innerWidth);
  };
  window.addEventListener("resize", handleGetDim);
  return (
    <>
      <Header />
      <div className="detailMovie">
        <div
          className="pt-0 lg:pt-20 relative "
          style={{
            ...styleBlur,
            backgroundImage: `url("${infoShowtime.hinhAnh}")`,
          }}
        ></div>
        <div className="notBlur" style={{ ...styleNotBlur }}>
          <div className="container mx-auto">
            <div className="py-20 lg:py-20 px-4 md:px-4  w-full lg:max-w-full md:flex items-center">
              <div className=" w-60 mx-auto md:w-72 lg:w-80 flex-none overflow-hidden">
                <img src={infoShowtime.hinhAnh} alt="1" className="rounded-xl mb-4" />
              </div>
              <div className="mx-0 lg:mx-[10%]  bg-black bg-opacity-25 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex  justify-between items-center leading-normal">
                <div className="text-white">
                  <h1 className="text-white text-4xl font-bold">{infoShowtime.tenPhim}</h1>
                  <p>Tình trạng: {infoShowtime.dangChieu ? "Đang chiếu" : "Sắp chiếu"}</p>
                  <div className="mt-4">
                    Điểm IMBb:{"   "}
                    {screenWidth < 1000 ? (
                      <span></span>
                    ) : (
                      <Rate disabled allowHalf count={10} value={infoShowtime.danhGia} />
                    )}{" "}
                    <span className="text-yellow-400 ml-2 text-2xl">{infoShowtime.danhGia}</span>
                  </div>
                  <p className="mt-4">{infoShowtime.moTa}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto bg-white rounded-xl w-full lg:w-4/5">
            <ShowtimeDetail screenWidth={screenWidth} cinemaSystem={infoShowtime.heThongRapChieu} />
          </div>
        </div>
      </div>
    </>
  );
}
