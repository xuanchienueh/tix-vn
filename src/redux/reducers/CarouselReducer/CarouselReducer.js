import {
  GET_CAROUSEL,
  LAY_DANH_SACH_PHIM,
  OPEN_MODAL_YOUTUBE,
} from "../../actions/CarouselAction/ActionName";

const initialStateCarousel = {
  carousel: [],
  danhSachPhim: [],
  openTrailer: { link: "", domButtonOpenTrailer: "" },
};

const CarouselReducer = (state = initialStateCarousel, { type, payload }) => {
  switch (type) {
    case GET_CAROUSEL:
      state.carousel = payload;
      return { ...state };

    case LAY_DANH_SACH_PHIM:
      return { ...state, danhSachPhim: payload };

    case OPEN_MODAL_YOUTUBE:
      state.openTrailer.link = payload.link;
      if (payload.domButtonOpenTrailer) {
        state.openTrailer.domButtonOpenTrailer = payload.domButtonOpenTrailer;
      }
      return { ...state };

    default:
      return state;
  }
};
export default CarouselReducer;
