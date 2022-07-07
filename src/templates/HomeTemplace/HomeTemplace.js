import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

const HomeTemplace = () => {
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
