import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeMenu.module.scss";

import { Tabs } from "antd";
import "antd/dist/antd.css";
import CumRap from "./CumRap";
const { TabPane } = Tabs;

export default function HomeMenu() {
  const { heThongRap } = useSelector((state) => state.QuanLyRapReducer);
  function callback(key) {}
  const renderHeThongRap = () =>
    heThongRap.map((item) => {
      return (
        <TabPane tab={<img width={50} src={item.logo} />} key={item.maHeThongRap}>
          <CumRap props={item.lstCumRap} />
        </TabPane>
      );
    });
  return (
    <div className={styles.homeMenuscss}>
      <div className={`pr-0  h-[500px] homeMenuscss overflow-y-scroll hidden xl:block`}>
        <Tabs defaultActiveKey="1" tabPosition="left" onTabClick={callback}>
          {renderHeThongRap()}
        </Tabs>
      </div>
    </div>
  );
}
