import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { layDanhSachPhongVe } from "../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import "./checkout.scss";

export default function Checkout() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  let { id } = useParams();
  const dispatch = useDispatch();
  console.log(chiTietPhongVe);
  useEffect(() => dispatch(layDanhSachPhongVe(id)), [id]);

  return (
    <div className="checkout ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-9 bg-[#565656] ">
            <div className="bg-black w-4/5 h-4 text-white text-center mx-auto pb-5">
              Màn hình
            </div>
          </div>

          <div className="col-span-3 h-full">
            <h1 className="text-center text-green-600 text-2xl  ">0 đ</h1>
            <hr />

            <div className="ml-4 my-4">
              <span className="bg-orange-600 text-white p-1 rounded">C18</span>
              <span className="ml-2 font-bold">Lật mặt 48h</span>
            </div>
            <div className="ml-4 my-4">
              <h1 className="font-semibold">BHD Star - Vincom 3/2</h1>
              <p className="font-semibold">25/4/2022 - 12:05 Rạp 12</p>
            </div>
            <hr />
            <div className="flex justify-between mx-4 my-4">
              <span className="text-orange-600 font-semibold">Ghế</span>
              <span className="text-green-600 font-bold">0 đ</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Email: </i>
              <span className="font-bold">{userLogin.email}</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Account: </i>
              <span className="font-bold">{userLogin.taiKhoan}</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Số điện thoại: </i>
              <span className="font-bold">{userLogin.soDT}</span>
            </div>
            <hr />
            <div className="h-1/2 flex flex-col justify-end">
              <button
                type="button"
                className="w-full text-xl mx-4 py-3 font-semibold rounded bg-green-400 text-gray-100"
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
