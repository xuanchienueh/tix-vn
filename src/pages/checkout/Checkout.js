import React, { Fragment, useEffect, useRef } from "react";
import { Tabs, Spin } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { LAY_DS_GHE_USER_KHAC_DANG_CHON } from "../../redux/actions/QuanLyDatVeAction/constName";
import { TAB_ACTIVE } from "../../redux/actions/QuanLyDatVeAction/constName";
import {
  checkStatusSeatAction,
  chonGheAction,
  datVeAction,
  layDanhSachPhongVe,
} from "../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction";
import "./checkout.scss";
import { imgNotFound } from "../../util/settings/config";
import { lichSuDatVe } from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import { connection } from "../..";
import { NavLink } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import Loading from "../loading/Loading";

export function Checkout() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangChon, DS_GheNguoiKhacDangChon, DS_Ghe_Sold } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  // console.log(chiTietPhongVe);
  let { maLichChieu } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhongVe(maLichChieu));
    let timer = setInterval(() => {
      dispatch(layDanhSachPhongVe(maLichChieu, false));
    }, 7000);
    return () => clearInterval(timer);

    /* Load danh sách ghế đang được user khác chọn từ server về */
  }, [maLichChieu]);

  //
  const renderGhe = () => {
    return chiTietPhongVe.danhSachGhe?.map((ghe, index) => {
      let styleGhe = "Thuong";
      if (ghe.loaiGhe === "Vip") styleGhe = "Vip";
      if (ghe.taiKhoanNguoiDat) styleGhe = "daBan";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) styleGhe = "ghebanDaDat";

      /*    DS_GheNguoiKhacDangChon.forEach((gheNguoiKhacDangChon) => {
        if (ghe.maGhe === gheNguoiKhacDangChon.maGhe)
          styleGhe = "gheUserKhacDangChon";
      }); */
      danhSachGheDangChon.forEach((gheDangChon) => {
        if (gheDangChon.maGhe === ghe.maGhe) styleGhe = "daDat";
      });

      //
      return (
        <Fragment key={index}>
          <button
            className={styleGhe}
            disabled={ghe.taiKhoanNguoiDat || styleGhe === "gheUserKhacDangChon" ? true : false}
            onClick={() => {
              dispatch(chonGheAction(ghe));
              checkStatusSeat();
            }}
          >
            {styleGhe === "gheUserKhacDangChon" ? <Spin size="small" /> : ghe.tenGhe}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  //
  useEffect(() => {
    dispatch(checkStatusSeatAction(danhSachGheDangChon));
  }, [DS_Ghe_Sold.length]);

  // debounce chọn ghế
  const timerCheckSeat = useRef(null);
  function checkStatusSeat() {
    if (timerCheckSeat.current) clearTimeout(timerCheckSeat.current);
    timerCheckSeat.current = setTimeout(() => {
      dispatch(layDanhSachPhongVe(maLichChieu, false));
    }, 1500);
  }
  //
  let tongTien = danhSachGheDangChon
    .reduce((tongTien, item) => (tongTien += item.giaVe), 0)
    .toLocaleString("en");

  //
  let danhSachVe = danhSachGheDangChon.map((item) => {
    return { giaVe: item.giaVe, maGhe: item.maGhe };
  });

  //
  let thongTinDatVe = { maLichChieu, danhSachVe };
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
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-9 bg-[#565656] ">
            <div className="bg-black w-4/5 h-4 text-white text-center mx-auto pb-5">Màn hình</div>
            <div className="trapezoid"></div>
            <div className="mt-8 flex justify-center">
              <span>{renderGhe()}</span>
            </div>
            <div className="ml-0 lg:ml-8">
              <h1 className="text-white font-bold">Chú thích:</h1>
              <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <button className="Thuong" /> <span className="text-white">Ghế trống</span>
                </div>
                <div className="flex items-center">
                  <button className="Vip" /> <span className="text-white">Ghế Vip</span>
                </div>
                <div className="flex items-center">
                  <button className="daDat" /> <span className="text-white">Ghế bạn đang chọn</span>
                </div>
                <div className="flex items-center">
                  <button className="daBan" /> <span className="text-white">Ghế đã bán</span>
                </div>

                <div className="flex items-center">
                  <button className="gheUserKhacDangChon w-9">
                    <Spin size="small" />
                  </button>
                  <span className="text-white">
                    <span>Ghế người khác</span> <br /> <span>đang chọn</span>
                  </span>
                  <br />
                </div>
                <div className="flex items-center">
                  <button className="ghebanDaDat" />{" "}
                  <span className="text-white">Ghế bạn đã đặt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 h-full">
            <h1 className="text-center text-green-600 text-2xl  ">{tongTien}đ</h1>
            <hr />

            <div className="ml-4 my-4">
              <span className="bg-orange-600 text-white p-1 rounded">C18</span>
              <span className="ml-2 font-bold">{chiTietPhongVe.thongTinPhim?.tenPhim}</span>
            </div>
            <div className="ml-4 my-4">
              <h1 className="font-semibold">{chiTietPhongVe.thongTinPhim?.tenCumRap}</h1>
              <p>Địa điểm: {chiTietPhongVe.thongTinPhim?.diaChi}</p>
              <p className="font-semibold">
                {chiTietPhongVe.thongTinPhim?.ngayChieu} - {chiTietPhongVe.thongTinPhim?.gioChieu} -{" "}
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
                onClick={() => handleBtnDatVe()}
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

const { TabPane } = Tabs;

export default function (props) {
  const dispatch = useDispatch();
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  function callback(key) {
    console.log(key);
  }
  function tabClick(key) {
    dispatch({ type: TAB_ACTIVE, payload: key });
  }

  return (
    <div className="container mx-auto">
      <Tabs
        activeKey={tabActive}
        onChange={callback}
        onTabClick={tabClick}
        centered
        defaultActiveKey="1"
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
        <TabPane
          tab={
            <a href="/home">
              <HomeOutlined className="text-3xl" />
            </a>
          }
          key="3"
        ></TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector((state) => state.QuanLyNguoiDungReducer);
  useEffect(() => dispatch(lichSuDatVe()), []);

  // console.log(thongTinNguoiDung);
  const renderLichSuDatVe = () => {
    return thongTinNguoiDung?.thongTinDatVe?.map((item, index) => {
      let dsGhe = [];
      for (let i of item.danhSachGhe) {
        dsGhe.push(i.tenGhe);
      }
      dsGhe = [...new Set(dsGhe)];
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={item.hinhAnh}
              onError={(e) => imgNotFound(e)}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{item.tenPhim}</h2>
              <p className="text-gray-500">
                Ngày đặt: {moment(item.ngayDat).format("hh:mm A - DD/MM/YYYY")}
              </p>
              <p className="text-gray-500">
                Địa điểm: {item.danhSachGhe[0].tenCumRap} - {item.danhSachGhe[0].tenHeThongRap}
              </p>
              <div className="text-gray-500">
                {" "}
                Số ghế:
                {dsGhe?.map((ghe) => (
                  <span className="mx-1 text-green-600" key={ghe}>
                    {ghe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-1 py-12 lg:px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-600">
            Lịch sử đặt vé:
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
            Chúc bạn xem phim vui vẻ!
          </p>
        </div>
        <div className="flex flex-wrap -m-2">{renderLichSuDatVe()}</div>
      </div>
    </section>
  );
}
