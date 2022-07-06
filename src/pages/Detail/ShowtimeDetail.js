import React from "react";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const { TabPane } = Tabs;
const styleCss = {
  display: "-webkit-box",
  display: "block",
  height: "1rem",
  fontSize: "0.8rem",
  lineHeight: "1",
  WebkitLineClamp: "1" /* số dòng hiển thị */,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginTop: "0.7rem",
};

export default function ShowtimeDetail({ cinemaSystem }) {
  const renderShowtime = () =>
    cinemaSystem.map((item, index) => (
      <TabPane tab={<img src={item.logo} width={50} />} key={index}>
        {item.cumRapChieu?.map((cumRap, i) => {
          return (
            <div key={i}>
              <div className="flex">
                <div className="mr-4 mt-4">
                  <img width={50} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                </div>
                <div className="mt-4">
                  <h5 style={{ ...styleCss }} className="font-bold">
                    {cumRap.tenCumRap}
                  </h5>
                  <p style={{ ...styleCss }} className="font-normal">
                    {cumRap.diaChi}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                {cumRap.lichChieuPhim?.map((lichChieu, index) => (
                  <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                    <button className="font-bold rounded-sm border border-gray-200 p-2 text-green-700  text-xs bg-[#fafafa] hover:text-[#fb4226] mr-2">
                      {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                    </button>
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
      </TabPane>
    ));
  if (Array.isArray(cinemaSystem) && cinemaSystem.length > 0) {
    return (
      <div>
        <Tabs tabPosition="left">{renderShowtime()}</Tabs>
      </div>
    );
  } else {
    return (
      <h1 className="text-center text-red-500 h-10 leading-10">Phim này chưa có lịch chiếu!</h1>
    );
  }
}

ShowtimeDetail.propTypes = {
  cinemaSystem: PropTypes.array,
};
