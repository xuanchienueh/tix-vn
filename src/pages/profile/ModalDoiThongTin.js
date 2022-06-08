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
function ModalDoiThongTin({ infoUser }) {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onFinish = async (values) => {
    let submit = {
      taiKhoan: infoUser.taiKhoan,
      matKhau: infoUser.matKhau,
      email: values.email,
      soDt: values.soDt,
      maNhom: MA_NHOM,
      hoTen: values.hoTen,
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    };
    let resultSubmit = await customerUpdateInfoAction(submit);
    if (resultSubmit) {
      handleClose();
      resultSubmit && history.push("/home");
      resultSubmit &&
        Swal.fire({ title: "Đổi thông tin thành công!", icon: "success", timer: 1500 });
    } else {
      handleShow();
    }
  };
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Đổi thông tin
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={({ values, errorFields, outOfDate }) => {
              console.log("dữ liệu submit không đúng", values);
              console.log(infoUser);
            }}
            initialValues={{
              email: infoUser.email,
              soDt: infoUser.soDT,
              hoTen: infoUser.hoTen,
            }}
            scrollToFirstError
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
                onClick={handleClose}
                type="button"
                className="bg-red-500 text-gray-100  px-3 py-0 w-1/3 rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600
                      shadow-lg"
              >
                Đóng
              </button>
              <button
                type="submit"
                className=" bg-indigo-500 text-gray-100 ml-[25%] p-3 w-1/3 rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg"
              >
                Cập nhật
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalDoiThongTin;
