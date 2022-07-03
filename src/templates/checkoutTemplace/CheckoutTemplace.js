import { Fragment } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { TOKEN } from "../../util/settings/config";

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

CheckoutTemplace.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default CheckoutTemplace;
