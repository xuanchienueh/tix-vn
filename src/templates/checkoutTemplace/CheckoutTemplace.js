import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";

const CheckoutTemplace = (props) => {
  const { Component, ...restProps } = props;

  if (!localStorage.getItem(TOKEN)) {
    return <Redirect to="/login" />;
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
export default CheckoutTemplace;
