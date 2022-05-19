import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CHON_GHE } from "../../redux/actions/QuanLyDatVeAction/constName";
import { layDanhSachPhongVe } from "../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import "./checkout.scss";

export default function Checkout() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangChon } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  let { id } = useParams();
  const dispatch = useDispatch();
  // console.log(chiTietPhongVe);
  useEffect(() => dispatch(layDanhSachPhongVe(id)), [id]);
  const renderGhe = () => {
    return chiTietPhongVe.danhSachGhe?.map((ghe, index) => {
      let styleGhe = "Thuong";
      if (ghe.taiKhoanNguoiDat) {
        styleGhe = "daBan";
      } else if (ghe.loaiGhe === "Vip") {
        styleGhe = "Vip";
      }
      danhSachGheDangChon.forEach((gheDangChon) => {
        if (gheDangChon.maGhe === ghe.maGhe) styleGhe = "daDat";
      });
      return (
        <Fragment key={index}>
          <button
            className={styleGhe}
            disabled={ghe.taiKhoanNguoiDat ? true : false}
            onClick={() => dispatch({ type: CHON_GHE, payload: ghe })}
          >
            {ghe.tenGhe}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  let tongTien = danhSachGheDangChon
    .reduce((tongTien, item) => {
      return (tongTien += item.giaVe);
    }, 0)
    .toLocaleString("en");
  return (
    <div className="checkout ">
      <div className=" mx-auto ">
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-8 bg-[#565656] ">
            <div className="bg-black w-4/5 h-4 text-white text-center mx-auto pb-5">
              Màn hình
            </div>
            <div className="trapezoid"></div>
            <div className="mt-8 flex justify-center">
              <span>{renderGhe()}</span>
            </div>
            <div className="ml-8">
              <h1 className="text-white font-bold">Chú thích:</h1>
              <div className="flex items-center">
                <button className="Thuong" />{" "}
                <span className="text-white">Ghế trống</span>
              </div>
              <div className="flex items-center">
                <button className="Vip" />{" "}
                <span className="text-white">Ghế Vip</span>
              </div>
              <div className="flex items-center">
                <button className="daDat" />{" "}
                <span className="text-white">Ghế bạn đang chọn</span>
              </div>
              <div className="flex items-center">
                <button className="daBan" />{" "}
                <span className="text-white">Ghế đã bán</span>
              </div>
            </div>
          </div>

          <div className="col-span-4 h-full">
            <h1 className="text-center text-green-600 text-2xl  ">
              {tongTien}đ
            </h1>
            <hr />

            <div className="ml-4 my-4">
              <span className="bg-orange-600 text-white p-1 rounded">C18</span>
              <span className="ml-2 font-bold">
                {chiTietPhongVe.thongTinPhim?.tenPhim}
              </span>
            </div>
            <div className="ml-4 my-4">
              <h1 className="font-semibold">
                {chiTietPhongVe.thongTinPhim?.tenCumRap}
              </h1>
              <p>Địa điểm: {chiTietPhongVe.thongTinPhim?.diaChi}</p>
              <p className="font-semibold">
                {chiTietPhongVe.thongTinPhim?.ngayChieu} -{" "}
                {chiTietPhongVe.thongTinPhim?.gioChieu} -{" "}
                {chiTietPhongVe.thongTinPhim?.tenRap}
              </p>
            </div>
            <hr />
            <div className="flex justify-between mx-4 my-4">
              <span className="text-orange-600 font-semibold">
                Ghế:{" "}
                {danhSachGheDangChon.map((gheDangChon, index) => (
                  <span className="text-green-700 mx-1" key={index}>
                    {gheDangChon.stt}
                  </span>
                ))}
              </span>
              <span className="text-green-600 font-bold">{tongTien}đ</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Email: </i>
              <span className="font-bold">{userLogin?.email}</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Account: </i>
              <span className="font-bold">{userLogin?.taiKhoan}</span>
            </div>
            <hr />
            <div className="mx-4 my-4">
              <i>Số điện thoại: </i>
              <span className="font-bold">{userLogin?.soDT}</span>
            </div>
            <hr />
            <div className=" flex flex-col justify-end">
              <button
                type="button"
                className="m-4  text-xl py-3 font-semibold rounded bg-green-400 text-gray-100"
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
