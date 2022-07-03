import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

export default function HistoryBooking() {
  const { thongTinDatVe } = useSelector((state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung);
  const renderBookingHistory = () => {
    return thongTinDatVe?.map((info, i) => (
      <div key={i} className="xl:w-1/3 md:w-1/2 p-4 w-full">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-full h-10 inline-flex items-center justify-start rounded-full  text-indigo-500 mb-4">
            <div className="rounded-full overflow-hidden mr-4">
              <img
                src={info.hinhAnh}
                className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full "
              />
            </div>
            <div>
              <h2 className="text-lg  text-gray-900 font-medium title-font mb-2">{info.tenPhim}</h2>
              <h2 className="text-lg  text-gray-900 font-medium title-font mb-2">
                {info.danhSachGhe[0].tenHeThongRap}
              </h2>
            </div>
          </div>
          <h2 className="text-sm text-gray-900 font-medium title-font mb-2">
            Ngày đặt: {moment(info.ngayDat).format("DD/MM/YYYY")} - {info.danhSachGhe[0].maCumRap}
          </h2>
          <p className="leading-relaxed text-base">
            Số ghế:{" "}
            {info.danhSachGhe.map((soGhe, i) => (
              <span key={i} className="mr-1 text-green-600">
                {soGhe.tenGhe}
              </span>
            ))}
          </p>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-1 lg:px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Lịch sử đặt vé:
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">{renderBookingHistory()}</div>
        </div>
      </section>
    </div>
  );
}
