import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-6 bg-coolGray-100 text-[#949494] bg-[#222] ">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-coolGray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <span
              rel="noopener noreferrer"
              className="flex justify-center space-x-3 md:justify-start hidden md:flex"
            >
              <div className="flex items-center justify-center rounded-full">
                <Link to="/">
                  <img src="./img/logo.png" width={100} alt="logo" className="ml-3" />
                </Link>
              </div>
              <span className="self-center text-2xl font-semibold"></span>
            </span>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-left">Điều khoản sử dụng</p>
            <ul className="text-left ml-3">
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Điều khoản chung
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Điều khoản giao dịch
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Chính sách thanh toán
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Câu hỏi thường gặp
                </a>
              </li>
              {/**/}
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 ml-6">
            <p className="pb-1 text-lg font-medium text-left">Tix Việt Nam</p>
            <ul className="text-left ml-3 ">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-gray-300 hover:text-red-600 text-gray-300"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Tiện ích online
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Thẻ quà tặng
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-red-600 text-gray-300">
                  Liên hệ quảng cáo
                </a>
              </li>
              {/**/}
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2022 All rights reserved</span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
