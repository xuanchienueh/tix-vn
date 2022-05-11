import React from "react";
import customCss from "./CardAntd.module.scss";
const styleCss = {
  display: "-webkit-box",
  height: "1rem",
  fontSize: "1rem",
  lineHeight: "1",
  WebkitLineClamp: "1" /* số dòng hiển thị */,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
export default function CardAntd({ props }) {
  return (
    <div
      className={`max-w-xs p-3 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 ${customCss["cardParent"]}`}
    >
      <img
        src={props.hinhAnh}
        alt="1"
        className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500"
      />
      <div className="mt-6 mb-2 flex align-items-center relative">
        <div
          class={`${customCss["datVe"]}  py-3 font-semibold rounded bg-[#fb4226] inset-0`}
        >
          <div>ĐẶT VÉ</div>
        </div>
        <span className="p-1 font-semibold rounded bg-[#fb4226] text-white mr-1">
          C18
        </span>
        <span className="font-semibold" style={{ ...styleCss }}>
          {props.tenPhim}
        </span>
      </div>
    </div>
  );
}
