import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import ThongTinTaiKhoan from "./ThongTinTaiKhoan";
import { thongTinUserAction } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import { useDispatch } from "react-redux";
import LichSuDatVe from "./LichSuDatVe";
const { TabPane } = Tabs;
const onChange = (key) => {
  // console.log(key);
};
export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thongTinUserAction());

    return () => {};
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange} centered size="large">
        <TabPane tab="Thông tin tài khoản" key="1">
          <ThongTinTaiKhoan />
        </TabPane>
        <TabPane tab="Lịch sử đặt vé" key="2">
          <LichSuDatVe />
        </TabPane>
      </Tabs>
    </div>
  );
}
