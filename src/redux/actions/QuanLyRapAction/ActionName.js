import { manageCinemaService } from "../../../services/CinemaService";
import { GET_LIST_CINEMA, GET_INFO_PICTURE_THEATER, GET_INFO_SHOWTIME } from "./ConstName";

export const getListCinemas = () => {
  return async (dispatch) => {
    try {
      let result = await manageCinemaService.getInfoCinemaSystems();
      result.status === 200 && dispatch({ type: GET_LIST_CINEMA, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInfoCinemaCluster = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      let result = await manageCinemaService.LayThongTinCumRapTheoHeThong(maHeThongRap);
      dispatch({ type: GET_INFO_PICTURE_THEATER, payload: result.data.content });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInfoShowtime = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await manageCinemaService.getInfoShowtimeService(id);
      data.statusCode === 200 &&
        dispatch({
          type: GET_INFO_SHOWTIME,
          payload: data.content,
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getInfoMovieClusterFollowSystemAction = async (IdGroupCinema) => {
  let result = undefined;
  let infoRap;
  try {
    let result = await manageCinemaService.LayThongTinCumRapTheoHeThong(IdGroupCinema);
    result = result.data.content;
  } catch (err) {
    console.log("lay thong tin cum rap fail", err);
  }
  infoRap = await result.map((i) => {
    return {
      value: i.maCumRap,
      label: i.tenCumRap,
      children: i.danhSachRap.map((item) => ({ value: item.maRap, label: item.tenRap })),
    };
  });
  return infoRap;
};
