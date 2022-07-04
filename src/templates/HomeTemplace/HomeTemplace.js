import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

const HomeTemplace = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <div className="">
              <Component {...propsRoute} />
            </div>

            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
export default HomeTemplace;
