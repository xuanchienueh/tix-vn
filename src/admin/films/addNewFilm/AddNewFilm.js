import { Input, InputNumber, Radio, Switch } from "antd";
import { Button, DatePicker, Form } from "antd";
import Swal from "sweetalert2";
import React, { useState } from "react";
import "./addNewFilm.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { themPhim } from "../../../redux/actions/QuanLyPhimAction/ActionName";
import { MA_NHOM } from "../../../util/settings/config";

export default function AddNewFilm() {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => setComponentSize(size);
  const [srcImg, setSrcImg] = useState("");
  const handleChangeInput = (name, value) => formik.setFieldValue(name, value);
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      danhGia: 0,
      dangChieu: false,
      sapChieu: true,
      hot: false,
      ngayKhoiChieu: "",
      hinhAnh: {},
      maNhom: MA_NHOM,
    },
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        key === "hinhAnh"
          ? formData.append("File", values.hinhAnh, values.hinhAnh.name)
          : formData.append(key, values[key]);
      }
      // console.log("forrmData", formData.get("File"));
      dispatch(themPhim(formData));
    },
  });
  const handleChangImg = async (e) => {
    let file = e.target.files[0];
    // console.log(file);
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
            onChange={(date, dateString) => handleChangeInput("ngayKhoiChieu", dateString)}
          />
        </Form.Item>
        <Form.Item label="IMDb">
          <InputNumber min={1} max={10} onChange={(value) => handleChangeInput("danhGia", value)} />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            onChange={(checked) => {
              handleChangeInput("sapChieu", !checked);
              handleChangeInput("dangChieu", checked);
            }}
          />
        </Form.Item>

        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={(checked) => handleChangeInput("hot", checked)} />
        </Form.Item>
        <Form.Item label="Hình ảnh" extra={<img src={srcImg} width={100} />}>
          <input type="file" onChange={handleChangImg} accept="image/*" />
        </Form.Item>
        <div className="text-center">
          <button
            className="bg-blue-500 py-2 px-3 rounded text-white hover:text-black"
            type="submit"
          >
            Thêm phim
          </button>
        </div>
      </Form>
    </div>
  );
}
