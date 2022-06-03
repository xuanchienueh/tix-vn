import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, Button, Select, Cascader, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  layDSRap,
  LayThongTinCumRapTheoHeThongAction,
} from "../../../redux/actions/QuanLyRapAction/ActionName";
import { taoLichChieuAction } from "../../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import Swal from "sweetalert2";

const TaoLichChieu = () => {
  const dispatch = useDispatch();
  const { maPhim, tenphim } = useParams();
  const { heThongRap } = useSelector((state) => state.QuanLyRapReducer);
  const [maHeThongRap, setMaHeThongRap] = useState("");
  const [arrRap, setArrRap] = useState(null);
  const [isPromise, setisPromise] = useState(null);
  const [dataSubmit, setDataSubmit] = useState({
    maPhim: maPhim,
    ngayChieuGioChieu: "",
    maRap: "",
    giaVe: 0,
  });

  useEffect(() => dispatch(layDSRap()), []);

  useEffect(() => {
    if (maHeThongRap !== "") setisPromise(LayThongTinCumRapTheoHeThongAction(maHeThongRap));
  }, [maHeThongRap]);

  isPromise !== null && isPromise.then((result) => setArrRap(result));

  const submitForm = () => {
    let rightNow = new Date().getTime();
    if (dataSubmit.ngayChieuGioChieu._d.getTime() > rightNow) {
      let ngayChieuGioChieu = moment(dataSubmit.ngayChieuGioChieu).format("DD/MM/YYYY HH:mm:ss");
      taoLichChieuAction({ ...dataSubmit, ngayChieuGioChieu });
    } else {
      Swal.fire({ title: "Ngày giờ chiếu là quá khứ!", icon: "error", timer: 1500 });
    }
  };

  let infoPhim = {};
  if (localStorage.getItem("infoPhim")) {
    infoPhim = JSON.parse(localStorage.getItem("infoPhim"));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">Tạo lịch chiếu: {tenphim}</h1>
      <img src={infoPhim.hinhAnh} alt={infoPhim.tenPhim} width={200} />
      <br />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "default" }}
        size={"default"}
        onFinish={submitForm}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            onChange={(value, option) => setMaHeThongRap(value)}
            placeholder="Chọn hệ thống rạp"
          >
            {heThongRap?.map((item, i) => (
              <Select.Option key={i} value={item.maHeThongRap}>
                {item.maHeThongRap}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Rạp">
          <Cascader
            options={arrRap}
            placeholder="Chọn rạp"
            onChange={(value) => setDataSubmit({ ...dataSubmit, maRap: value[0] })}
          />
        </Form.Item>
        <Form.Item label="Ngày giờ chiếu">
          <DatePicker
            showTime
            format="DD/MM/YYYY HH:mm:ss"
            onChange={(value, dateString) => {
              setDataSubmit({ ...dataSubmit, ngayChieuGioChieu: value });
            }}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={200000}
            onChange={(value) => setDataSubmit({ ...dataSubmit, giaVe: value })}
          />
        </Form.Item>

        <Form.Item label="Chức năng">
          <button type="submit" className="btn text-white bg-green-600">
            Tạo lịch chiếu
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TaoLichChieu;
