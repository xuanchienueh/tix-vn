import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

const UserTemplace = (props) => {
  const { Component, ...restProps } = props;
  if (localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/home" />;
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
export default UserTemplace;
