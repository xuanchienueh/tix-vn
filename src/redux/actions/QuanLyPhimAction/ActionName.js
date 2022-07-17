import { GET_INFO_FILM } from "./constAction";
import { store } from "../../types/configStore";
import { getListFilm } from "../CarouselAction/carousel";
import Swal from "sweetalert2";
import { manageFilmService } from "../../../services/FilmServices";

const navigate = store.getState().LoadingReducer.navigate;

export const addMovie = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.addMovieService(formData);
      alert("Thêm phim thành công!");
    } catch (err) {
      console.log("add film fail", err.response?.data);
    }
  };
};

export const getInfoFilmAction = (Film_Id) => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.getInfoFilmService(Film_Id);
      dispatch({ type: GET_INFO_FILM, payload: result.data.content });
    } catch (err) {
      console.log("lay thong tin phim fail", err.response);
    }
  };
};

export const updateFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.updateFilmService(formData);
      Swal.fire({ title: "Edit phim thành công!", icon: "success", timer: 1500 });
      navigate("/admin/films");
    } catch (err) {
      console.log("edit film fail", err.response);
    }
  };
};

export const deletePhimAction = (Film_id) => {
  return async (dispatch) => {
    try {
      let result = await manageFilmService.deleteFilmService(Film_id);
      dispatch(getListFilm());
      Swal.fire({ title: "Xóa phim thành công!", icon: "success", timer: 1500 });
    } catch (err) {
      console.log("xoa phim fail", err);
    }
  };
};
