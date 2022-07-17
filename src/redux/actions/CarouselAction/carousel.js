import { manageFilmService } from "../../../services/FilmServices";
import { GET_CAROUSEL, GET_LIST_MOVIE } from "./ActionName";

export const getCarousel = () => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.getListBannerService();
      dispatch({ type: GET_CAROUSEL, payload: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getListFilm = (movieName = "") => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.getListFilmService(movieName);
      dispatch({ type: GET_LIST_MOVIE, payload: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};
