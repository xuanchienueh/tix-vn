import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeMenu from "../../templates/HomeTemplace/HomeMenu/HomeMenu";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { layDanhSachPhim } from "../../redux/actions/CarouselAction/carousel";
import ListMovie from "./ListMovie/ListMovie";
import PageModal from "../Modal/PageModal";

const { TabPane } = Tabs;

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(layDanhSachPhim()), []);
  const [dangChieu, setDangChieu] = useState(true);
  const DangChieu = (value) => setDangChieu(value);
  return (
    <div className="homepage">
      <PageModal />
      <div className="xl:max-w-[1100px] mx-auto">
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={<p onClick={() => DangChieu(true)}>Đang chiếu</p>}
            key="1"
          >
            <ListMovie props={dangChieu} />
          </TabPane>
          <TabPane
            tab={<p onClick={() => DangChieu(false)}>Sắp chiếu</p>}
            key="2"
          >
            <ListMovie props={dangChieu} />
          </TabPane>
        </Tabs>
        <HomeMenu />
      </div>
    </div>
  );
}
