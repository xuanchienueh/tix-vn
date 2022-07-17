import {
  GET_CAROUSEL,
  GET_LIST_MOVIE,
  OPEN_MODAL_YOUTUBE,
} from "../../actions/CarouselAction/ActionName";

const initialStateCarousel = {
  carousel: [],
  listFilm: [],
  openTrailer: { link: "", domButtonOpenTrailer: "" },
};

const CarouselReducer = (state = initialStateCarousel, { type, payload }) => {
  switch (type) {
    case GET_CAROUSEL:
      state.carousel = payload;
      return { ...state };

    case GET_LIST_MOVIE:
      return { ...state, listFilm: payload };

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
