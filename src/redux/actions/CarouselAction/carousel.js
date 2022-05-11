// import { DOMAIN_API } from "../../../util/settings/config";
import { GET_CAROUSEL, LAY_DANH_SACH_PHIM } from "./ActionName";
import { qlPhimService } from "../../../services/QuanLyPhimService";

export const getCarousel = () => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.LayDanhSachBanner();
      dispatch({ type: GET_CAROUSEL, payload: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};

export const layDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      let result = await qlPhimService.LayDanhSachPhim();
      dispatch({ type: LAY_DANH_SACH_PHIM, payload: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};
