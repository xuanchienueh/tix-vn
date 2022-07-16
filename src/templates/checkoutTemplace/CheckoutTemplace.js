import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { TOKEN } from "../../util/settings/config";
import { useDispatch } from "react-redux";

const CheckoutTemplace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "NAVIGATE", payload: navigate });
  }, []);

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
