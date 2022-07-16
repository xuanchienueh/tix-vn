import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

const HomeTemplace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "NAVIGATE", payload: navigate });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </Fragment>
  );
};
export default HomeTemplace;
