import {
  GET_CAROUSEL,
  LAY_DANH_SACH_PHIM,
  OPEN_MODAL_YOUTUBE,
} from "../../actions/CarouselAction/ActionName";

const initialStateCarousel = {
  carousel: [],
  danhSachPhim: [],
  openTrailer: { open: false, link: "", domElement: "" },
};

const CarouselReducer = (state = initialStateCarousel, { type, payload }) => {
  switch (type) {
    case GET_CAROUSEL:
      state.carousel = payload;
      return { ...state };
    case LAY_DANH_SACH_PHIM:
      return { ...state, danhSachPhim: payload };

    case OPEN_MODAL_YOUTUBE: {
      state.openTrailer.open = payload.open;
      state.openTrailer.link = payload.link;
      if (payload.domElement) {
        state.openTrailer.domElement = payload.domElement;
      } else {
        state.openTrailer.domElement = "";
      }

      return { ...state };
    }
    default:
      return state;
  }
};
export default CarouselReducer;
