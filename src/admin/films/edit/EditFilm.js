import { Input, InputNumber, Radio, Switch } from "antd";
import { Button, DatePicker, Form } from "antd";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import React, { useState, useEffect } from "react";
import "../addNewFilm/addNewFilm.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { MA_NHOM } from "../../../util/settings/config";
import {
  CapNhatPhimUploadAction,
  LayThongTinPhimAction,
} from "../../../redux/actions/QuanLyPhimAction/ActionName";

export default function EditFilm() {
  const dispatch = useDispatch();
  const { maPhim } = useParams();

  useEffect(() => {
    dispatch(LayThongTinPhimAction(maPhim));
  }, []);

  const { layThongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log(layThongTinPhim);

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => setComponentSize(size);
  const [srcImg, setSrcImg] = useState("");
  const handleChangeInput = (name, value) => formik.setFieldValue(name, value);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: layThongTinPhim.maPhim,
      tenPhim: layThongTinPhim?.tenPhim,
      trailer: layThongTinPhim?.trailer,
      moTa: layThongTinPhim?.moTa,
      danhGia: layThongTinPhim?.danhGia,
      dangChieu: layThongTinPhim?.dangChieu,
      sapChieu: layThongTinPhim?.sapChieu,
      hot: layThongTinPhim?.hot,
      ngayKhoiChieu: moment(layThongTinPhim?.ngayKhoiChieu).format("DD-MM-YYYY"),
      hinhAnh: null,
      maNhom: MA_NHOM,
    },

    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        key === "hinhAnh"
          ? values.hinhAnh !== null && formData.append("File", values.hinhAnh, values.hinhAnh.name)
          : formData.append(key, values[key]);
      }

      dispatch(CapNhatPhimUploadAction(formData));
    },
  });

  const handleChangImg = async (e) => {
    let file = e.target.files[0];
    if (file.type.slice(0, 5) !== "image") {
      Swal.fire("Error", "File không hợp lệ!", "info");
      setSrcImg("");
      return undefined;
    }
    await formik.setFieldValue("hinhAnh", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setSrcImg(e.target.result);
    };
  };

  return (
    <div className="addNewFilm">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={formik.handleSubmit}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            defaultValue={moment(formik.values.ngayKhoiChieu, "DD/MM/YYYY")}
            onChange={(date, dateString) => handleChangeInput("ngayKhoiChieu", dateString)}
          />
        </Form.Item>
        <Form.Item label="IMDb">
          <InputNumber
            min={1}
            max={10}
            onChange={(value) => handleChangeInput("danhGia", value)}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            checked={formik.values.dangChieu}
            onChange={(checked) => {
              handleChangeInput("sapChieu", !checked);
              handleChangeInput("dangChieu", checked);
            }}
          />
        </Form.Item>

        <Form.Item label="Hot">
          <Switch
            checked={formik.values.hot}
            onChange={(checked) => handleChangeInput("hot", checked)}
          />
        </Form.Item>
        <Form.Item
          label="Hình ảnh"
          extra={<img src={srcImg == "" ? layThongTinPhim.hinhAnh : srcImg} width={100} />}
        >
          <input type="file" onChange={handleChangImg} accept="image/*" />
        </Form.Item>
        <div className="text-center">
          <button
            className="bg-blue-500 py-2 px-3 rounded text-white hover:text-black"
            type="submit"
          >
            Edit
          </button>
        </div>
      </Form>
    </div>
  );
}
