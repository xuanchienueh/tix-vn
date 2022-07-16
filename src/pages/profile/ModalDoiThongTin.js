import { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Form, Input, AutoComplete } from "antd";
import { MA_NHOM, USER_LOGIN } from "../../util/settings/config";
import { customerUpdateInfoAction } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
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
  const navigate = useNavigate();
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
      resultSubmit && navigate("/home");
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
ModalDoiThongTin.propTypes = {
  infoUser: PropTypes.object.isRequired,
};

export default ModalDoiThongTin;
