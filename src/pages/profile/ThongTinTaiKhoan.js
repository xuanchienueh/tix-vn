import React, { useState, useEffect } from "react";
import { Form, Input, AutoComplete } from "antd";
import { MA_NHOM } from "../../util/settings/config";
import { useDispatch, useSelector } from "react-redux";
import { QLNguoiDungService } from "../../services/QuanLyNguoiDungService";
import ModalDoiMatKhau from "./ModalDoiMatKhau";

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

export default function ThongTinTaiKhoan() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    // let timer1 = setTimeout(() => setShow(true), 500);
    QLNguoiDungService.thongTinUser().then((kq) => {
      setInfoUser(kq.data.content);
      setShow(true);
    });
    return () => {
      // clearTimeout(timer1);
    };
  }, []);

  const onFinish = (values) => {
    let submit = {
      taiKhoan: values.taiKhoan,
      matKhau: values.nhapLaiMatKhau,
      email: values.email,
      soDt: values.soDt,
      maNhom: MA_NHOM,
      hoTen: values.hoTen,
      maLoaiNguoiDung: "QuanTri",
    };
    console.log(submit);
  };

  return show ? (
    <div className="my-8 w-4/5">
      <Form {...formItemLayout} form={form}>
        <Form.Item label="E-mail">
          <span>{infoUser.email}</span>
        </Form.Item>

        <Form.Item name="taiKhoan" label="Tài khoản">
          <h1>{infoUser.taiKhoan}</h1>
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <h1>{infoUser.soDT}</h1>
        </Form.Item>

        <Form.Item name="hoTen" label="Họ và tên">
          <h1>{infoUser.hoTen}</h1>
        </Form.Item>

        <div className="w-full flex justify-around">
          <div>
            <button>dfádfuhsauidyuáygd</button>
          </div>
          <div>
            <ModalDoiMatKhau infoUser={infoUser} />
          </div>
        </div>
      </Form>

      {/* <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={({ values, errorFields, outOfDate }) => {
          console.log("dữ liệu submit không đúng", values);
        }}
        initialValues={{
          taiKhoan: infoUser.taiKhoan,
          password: infoUser.matKhau,
          email: infoUser.email,
          soDt: infoUser.soDT,
          hoTen: infoUser.hoTen,
          disabled: true,
        }}
        scrollToFirstError
        disabled={true}
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
          name="password"
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

          <Form.Item
          name="nhapLaiMatKhau"
          label="Nhập lại mật khẩu"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("Mật khẩu nhập lại không đúng!"));
              },
            }),
          ]}
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
          <Input maxLength={10} style={{ width: "100%" }} />
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
          <AutoComplete onChange={() => {}} placeholder="Họ và tên">
            <Input />
          </AutoComplete>
        </Form.Item>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-gray-100 ml-[25%] p-3 w-1/3 rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
          >
            Cập nhật
          </button>
        </div>
      </Form> */}
    </div>
  ) : (
    <div>that bai</div>
  );
}
