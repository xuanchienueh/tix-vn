import React from "react";
import { useSelector } from "react-redux";

export default function CardAntd({ props }) {
  return (
    <div className="max-w-xs p-3 rounded-md shadow-md bg-coolGray-50 text-coolGray-900">
      <img
        src={props.hinhAnh}
        alt="1"
        className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500"
      />
      <div className="mt-6 mb-2">
        <span className="p-1 font-semibold rounded bg-[#fb4226] text-white mr-1 mb-1">
          C18
        </span>
        <span>{props.tenPhim}</span>
      </div>
    </div>
  );
}
