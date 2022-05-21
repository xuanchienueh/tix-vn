import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CHON_GHE } from "../../redux/actions/QuanLyDatVeAction/constName";
import {
  datVeAction,
  layDanhSachPhongVe,
} from "../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import "./checkout.scss";
import { USER_LOGIN } from "../../util/settings/config";

export default function Checkout() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangChon } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  // console.log(userLogin);
  let { id } = useParams();
  const dispatch = useDispatch();

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
      if (
        JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan ===
        ghe.taiKhoanNguoiDat
      ) {
        styleGhe = "ghebanDaDat";
      }
      // console.log(JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan);
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
    .reduce((tongTien, item) => (tongTien += item.giaVe), 0)
    .toLocaleString("en");

  let danhSachVe = danhSachGheDangChon.map((item) => {
    return { giaVe: item.giaVe, maGhe: item.maGhe };
  });
  let thongTinDatVe = { maLichChieu: id, danhSachVe: danhSachVe };
  // console.log(thongTinDatVe);
  const handleBtnDatVe = () => {
    const swalTailwinCssBottons = Swal.mixin({
      customClass: {
        confirmButton: "bg-green-600 text-white rounded  py-1 px-2",
        cancelButton: "bg-red-600 text-white rounded py-1 px-2 mr-2",
      },
      buttonsStyling: false,
      // didOpen: () => {
      //   console.log(thongTinDatVe.danhSachVe.length);
      // },
    });
    if (thongTinDatVe.danhSachVe.length === 0) {
      Swal.fire({
        title: "Bạn chưa chọn ghế!",
        text: "Vui lòng chọn vị trí bạn muốn đặt!",
        icon: "question",
        showConfirmButton: true,
      });
    } else {
      swalTailwinCssBottons
        .fire({
          title: "Bạn đang đặt vé?",
          text: "Vé sẽ không được hoàn trả sau khi đặt!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Đặt ngay!",
          cancelButtonText: "Hủy đặt!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalTailwinCssBottons.fire({
              showConfirmButton: false,
              title: "OK",
              text: "Đặt vé thành công!",
              icon: "success",
            });
            console.log("dat ve thanh cong");
            dispatch(datVeAction(thongTinDatVe));
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalTailwinCssBottons.fire("Đã hủy!", "Thanks you!", "error");
            console.log("that bai");
          }
        });
    }
  };

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
              <div className="flex items-center">
                <button className="ghebanDaDat" />{" "}
                <span className="text-white">Ghế bạn đã đặt</span>
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
                onClick={() => {
                  handleBtnDatVe();
                }}
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
