import React, { useState, useEffect } from "react";
import { Form, Input, Select, Radio, Button, AutoComplete } from "antd";
import { usePrompt } from "../../hooks/usePrompt";
import { GROUP_ID } from "../../util/settings/config";
import {
  updateInfoUserAct,
  listUserTypeAct,
} from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import ConfirmReload from "../../util/confirmReload/confirmReload";
import Swal from "sweetalert2";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const { Search } = Input;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="84">+84</Option>
    </Select>
  </Form.Item>
);

const EditUser = () => {
  const [form] = Form.useForm();
  const [isPromise, setIsPromise] = useState(null);
  const [readyToNewPage, setReadyToNewPage] = useState(false);
  const [listUserType, setListUserType] = useState(null);
  useEffect(() => {
    setIsPromise(listUserTypeAct());
    return () => localStorage.removeItem("userEditing");
  }, []);

  usePrompt("Dữ liệu chưa được lưu, bạn có muốn chuyển trang?", readyToNewPage);

  // xử lý hành động load lại trang web
  ConfirmReload((e) => {
    e.preventDefault();
    e.returnValue = "";
  });
  // kết thúc xử lý action reload
  let userEditing = JSON.parse(localStorage.getItem("userEditing"));
  const onFinish = async (values) => {
    let submit = {
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      email: values.email,
      soDt: values.soDt,
      maNhom: GROUP_ID,
      maLoaiNguoiDung: values.maLoaiNguoiDung,
      hoTen: values.hoTen,
    };

    setReadyToNewPage(false);
    let resultSubmit = await updateInfoUserAct(submit);
    resultSubmit && Swal.fire({ title: "Cập nhật thành công!", icon: "success", timer: 1500 });
  };

  isPromise !== null && isPromise.then((kq) => setListUserType(kq));

  return (
    <div className="w-4/5">
      <h1 className="text-2xl font-semibold mb-4">Cập nhật thông tin tài khoản:</h1>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={({ values, errorFields, outOfDate }) => {
          console.log("dữ liệu submit không đúng", values);
        }}
        initialValues={{
          prefix: "84",
          maLoaiNguoiDung: userEditing?.maLoaiNguoiDung,
          matKhau: userEditing?.matKhau,
          email: userEditing?.email,
          taiKhoan: userEditing?.taiKhoan,
          soDt: userEditing?.soDt,
          hoTen: userEditing?.hoTen,
        }}
        scrollToFirstError
        onFieldsChange={() => setReadyToNewPage(true)}
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Email không hợp lệ!",
            },
            {
              required: true,
              message: "Vui lòng nhập email của bạn!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="matKhau"
          label="Mật khẩu"
          tooltip="Mật khẩu ít nhất có 1 ký tự viết hoa, 1 ký tự viết thường, 1 ký tự số, 1 ký tự đặc biệt và dài từ 8 đến 10 ký tự!"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu của bạn!",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
              message: "Mật khẩu không đủ mạnh!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="taiKhoan" label="Tài khoản">
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="soDt"
          label="Số điện thoại"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại của bạn!",
            },
            {
              pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
              message: "Số điện thoại không đúng!",
            },
          ]}
        >
          <Input addonBefore={prefixSelector} maxLength={10} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="hoTen"
          label="Họ và tên"
          rules={[
            {
              required: true,
              message: "Trường này không được để trống!",
            },
          ]}
        >
          <AutoComplete onChange={(value) => {}} placeholder="Họ và tên">
            <Input />
          </AutoComplete>
        </Form.Item>

        <Form.Item name="maLoaiNguoiDung" label="Loại người dùng">
          <Radio.Group name="radio-group">
            {listUserType?.map((item, key) => (
              <Radio value={item.maLoaiNguoiDung} key={key}>
                {item.tenLoai}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <div className="w-full flex justify-center">
          <Button type="default" style={{ marginRight: "2rem" }} htmlType="submit">
            Cập nhật
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditUser;
