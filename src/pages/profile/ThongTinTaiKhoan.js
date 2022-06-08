import React, { useState, useEffect } from "react";
import { QLNguoiDungService } from "../../services/QuanLyNguoiDungService";
import ModalDoiMatKhau from "./ModalDoiMatKhau";
import ModalDoiThongTin from "./ModalDoiThongTin";

export default function ThongTinTaiKhoan() {
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

  return show ? (
    <div className="my-8 ">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-col text-center w-full mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Thông tin cơ bản
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Tài khoản
                  </label>
                  <input
                    type="text"
                    value={infoUser.taiKhoan}
                    id="name"
                    disabled
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value={infoUser.email}
                    id="email"
                    disabled
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Số điện thoại
                  </label>
                  <input
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    id="message"
                    value={infoUser.soDT}
                    disabled
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Họ và tên
                  </label>
                  <input
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    id="message"
                    disabled
                    value={infoUser.hoTen}
                  />
                </div>
              </div>

              <div className="w-full flex justify-around">
                <div>
                  <ModalDoiThongTin infoUser={infoUser} />
                </div>
                <div>
                  <ModalDoiMatKhau infoUser={infoUser} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div></div>
  );
}
