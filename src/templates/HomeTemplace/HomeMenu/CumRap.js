import { memo, Fragment } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { imgNotFound } from "../../../util/settings/config";
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

function CumRap({ props }) {
  // console.log(props);
  return (
    <Tabs tabPosition="left" tabBarStyle={{ width: "400px" }}>
      {Array.isArray(props) &&
        props.map((rapPhim, index) => (
          <TabPane
            tab={
              <div className="flex w-full">
                <img width={50} src={rapPhim.hinhAnh} />
                <div className="ml-3 w-4/5">
                  <h5 style={{ ...styleCss }}>{rapPhim.tenCumRap}</h5>
                  <div style={{ ...styleCss }} className="w-[300px]">
                    {rapPhim.diaChi}
                  </div>
                </div>
              </div>
            }
            key={index}
          >
            {rapPhim.danhSachPhim?.map((phim, index) => (
              <Fragment key={index}>
                <div className="max-w-sm w-full lg:max-w-full lg:flex mt-2">
                  <div
                    className="h-14 lg:h-14 lg:w-12 flex-none bg-cover  lg:rounded-t-none text-center overflow-hidden"
                    // style={{ backgroundImage: `url("${phim.hinhAnh}")` }}
                  >
                    <img
                      src={phim.hinhAnh}
                      alt={phim.tenPhim}
                      onError={(e) => imgNotFound(e)}
                    />
                  </div>
                  <div className="flex-grow border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-0 flex flex-col justify-between leading-normal ml-3">
                    <div>
                      <NavLink
                        to="#"
                        className="text-gray-900 font-semibold mb-2 text-base hover:text-[#fb4226]"
                      >
                        {phim.tenPhim}
                      </NavLink>
                      <p className="text-gray-700 text-xs">{rapPhim.diaChi}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-2 border-b border-gray-400">
                  {phim.lstLichChieuTheoPhim
                    ?.slice(0, 12)
                    .map((lichChieu, index) => (
                      <NavLink
                        to={`/checkout/${lichChieu.maLichChieu}`}
                        key={index}
                      >
                        <button className="font-bold rounded-sm border border-gray-200 p-2 text-green-700  text-xs bg-[#fafafa] hover:text-[#fb4226]">
                          {moment(lichChieu.ngayChieuGioChieu).format(
                            "hh:mm A"
                          )}
                        </button>
                      </NavLink>
                    ))}
                </div>
              </Fragment>
            ))}
          </TabPane>
        ))}
    </Tabs>
  );
}
export default memo(CumRap);
