import { Fragment } from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";
import { TOKEN } from "../../util/settings/config";

const CheckoutTemplace = () => {
  if (!localStorage.getItem(TOKEN)) {
    return <Navigate to="/login" />;
  }
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default CheckoutTemplace;
