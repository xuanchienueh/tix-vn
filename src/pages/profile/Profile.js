import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan";
import { InfoUserAction } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import { useDispatch } from "react-redux";
import HistoryBooking from "./HistoryBooking";
const { TabPane } = Tabs;
const onChange = (key) => {};
export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InfoUserAction());

    return () => {};
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange} centered size="large">
        <TabPane tab="Thông tin tài khoản" key="1">
          <ThongTinTaiKhoan />
        </TabPane>
        <TabPane tab="Lịch sử đặt vé" key="2">
          <HistoryBooking />
        </TabPane>
      </Tabs>
    </div>
  );
}
