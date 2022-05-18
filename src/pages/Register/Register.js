import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegisterAction } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";

export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      dispatch(userRegisterAction(values));
    },
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="taiKhoan">
                Tài khoản
                <label>
                  <input
                    type="text"
                    name="taiKhoan"
                    onChange={formik.handleChange}
                    value={formik.values.taiKhoan}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
                <label>
                  <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Mật khẩu
                <label>
                  <input
                    type="password"
                    name="matKhau"
                    onChange={formik.handleChange}
                    value={formik.values.matKhau}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Nhập lại mật khẩu
                <label>
                  <input
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.matKhau}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <span className="text-xs text-red-400">Password must be same!</span>

            <div className="mt-4">
              <label htmlFor="soDt" className="block">
                Số điện thoại
                <label>
                  <input
                    type="text"
                    name="soDt"
                    onChange={formik.handleChange}
                    value={formik.values.soDt}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Mã nhóm
                <label>
                  <input
                    type="text"
                    name="maNhom"
                    onChange={formik.handleChange}
                    value={formik.values.maNhom}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                Họ tên
                <label>
                  <input
                    type="text"
                    name="hoTen"
                    onChange={formik.handleChange}
                    value={formik.values.hoTen}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Bạn đã có tài khoản?
              <NavLink className="text-blue-600 hover:underline" to="/login">
                {" "}
                Đăng nhập
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
