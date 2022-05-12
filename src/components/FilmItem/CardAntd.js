import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL_YOUTUBE } from "../../redux/actions/CarouselAction/ActionName";
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
  const dispatch = useDispatch();
  const openTrailer = useSelector((state) => state.CarouselReducer.openTrailer);
  const getStringLinkYoutube = (linkYoutube) =>
    linkYoutube.slice(linkYoutube.length - 11);

  const handleOpenTrailer = () => {
    let KeywordLinkYoutube = getStringLinkYoutube(props.trailer);
    dispatch({
      type: OPEN_MODAL_YOUTUBE,
      payload: { link: KeywordLinkYoutube },
    });
    openTrailer.domButtonOpenTrailer.click();
  };
  return (
    <div
      className={`max-w-xs p-3 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 ${customCss["cardParent"]}`}
    >
      <div className={` relative`}>
        <div
          className={`${customCss["openTrailer"]} bg-gradient-to-t from-gray-800  inset-0`}
          onClick={() => handleOpenTrailer()}
        >
          <div className="w-10 h-10 rounded-full border-solid border-2 border-white text-white flex items-center justify-center">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <img
          src={props.hinhAnh}
          alt="1"
          className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500"
        />
      </div>
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
