import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs } from "antd";
import "antd/dist/antd.css";
import "./HomeMenu.scss";
import CumRap from "./CumRap";
const { TabPane } = Tabs;

export default function HomeMenu() {
  const { heThongRap } = useSelector((state) => state.QuanLyRapReducer);
  function callback(key) {}
  const renderHeThongRap = () =>
    heThongRap.map((item) => {
      return (
        <TabPane
          tab={<img width={50} src={item.logo} />}
          key={item.maHeThongRap}
        >
          <CumRap props={item.lstCumRap} />
        </TabPane>
      );
    });
  console.log("component cha render");
  console.log(heThongRap);
  return (
    <div className={`pr-0 container h-[500px] homeMenuscss overflow-y-scroll`}>
      <Tabs defaultActiveKey="1" tabPosition="left" onTabClick={callback}>
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}
