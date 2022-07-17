import { GET_INFO_FILM } from "../../actions/QuanLyPhimAction/constAction";

const initialState = {
  getInfoFilm: {},
};

const manageFilmRuducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFO_FILM:
      return { ...state, getInfoFilm: payload };

    default:
      return state;
  }
};
export default manageFilmRuducer;
