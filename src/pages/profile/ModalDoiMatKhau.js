import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, Input, AutoComplete } from "antd";

import { MA_NHOM, USER_LOGIN } from "../../util/settings/config";
import { customerUpdateInfoAction } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import Swal from "sweetalert2";
import { history } from "../../App";
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

function ModalDoiMatKhau({ infoUser }) {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onFinish = async (values) => {
    let doiMatKhau = {
      taiKhoan: infoUser.taiKhoan,
      matKhau: values.nhapLaiMatKhau,
      email: infoUser.email,
      soDt: infoUser.soDT,
      maNhom: MA_NHOM,
      hoTen: infoUser.hoTen,
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    };
    if (infoUser.matKhau === values.matKhauCu) {
      let resultSubmit = await customerUpdateInfoAction(doiMatKhau);
      resultSubmit && history.push("/home") && handleClose();
      resultSubmit &&
        Swal.fire({ title: "Đổi mật khẩu thành công!", icon: "success", timer: 1500 });
    } else {
      Swal.fire({ title: "Mật khẩu cũ không đúng!", icon: "warning", timer: 1500 });
      handleShow();
    }
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Đổi mật khẩu
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={({ values, errorFields, outOfDate }) => {
              console.log("dữ liệu submit không đúng", values);
            }}
            scrollToFirstError
          >
            <Form.Item name="matKhauCu" label="Mật khẩu cũ">
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu mới"
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

            <div className="w-full flex justify-center">
              <div className="p-2 w-1/2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Đóng
                </button>
              </div>
              <div className="p-2 w-1/2">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalDoiMatKhau;
