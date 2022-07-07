import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

const UserTemplace = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/home" />;
  }
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};
export default UserTemplace;
