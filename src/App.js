import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import HomeTemplace from "./templates/HomeTemplace/HomeTemplace";
import CheckoutTemplace from "./templates/checkoutTemplace/CheckoutTemplace";
import UserTemplace from "./templates/UserTemplace/UserTemplace";
import Loading from "./pages/loading/Loading";
import AdminTemplace from "./templates/AdminTemplace/AdminTemplace";
import ShowTime from "./admin/showtime/ShowTime";
import EditUserClassCpn from "./admin/quanLyUser/EditUserClassCpn";

const history = createBrowserHistory();

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const ListUser = lazy(() => import("./admin/quanLyUser/ListUser"));
const Home = lazy(() => import("./pages/Home/Home"));
const Detail = lazy(() => import("./pages/Detail/Detail"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const AddUser = lazy(() => import("./admin/quanLyUser/AddUser"));
const EditUser = lazy(() => import("./admin/quanLyUser/EditUser"));
const Films = lazy(() => import("./admin/films/Films"));
const AddNewFilm = lazy(() => import("./admin/films/addNewFilm/AddNewFilm"));
const EditFilm = lazy(() => import("./admin/films/edit/EditFilm"));
const TaoLichChieu = lazy(() => import("./admin/films/taoLichChieu/TaoLichChieu"));

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Suspense fallback={<Loading />}>
        <Switch>
          <HomeTemplace path="/contact" exact Component={Contact} />
          <HomeTemplace path="/news" exact Component={News} />
          <HomeTemplace path="/profile" exact Component={Profile} />
          <HomeTemplace path="/home" exact Component={Home} />
          <HomeTemplace path="/detail/:id" exact Component={Detail} />
          <AdminTemplace
            path="/admin/taolichchieu/:maPhim/:tenphim"
            exact
            Component={TaoLichChieu}
          />
          <AdminTemplace path="/admin/listuser" exact Component={ListUser} />
          <AdminTemplace path="/admin/adduser" exact Component={AddUser} />
          <AdminTemplace path="/admin/edituser/:taiKhoan" exact Component={EditUser} />
          <AdminTemplace path="/admin/films" exact Component={Films} />
          <AdminTemplace path="/admin/addfilm" exact Component={AddNewFilm} />
          <AdminTemplace path="/admin/films/addnewfilm" exact Component={AddNewFilm} />
          <AdminTemplace path="/admin/showtime" exact Component={ShowTime} />
          <AdminTemplace path="/admin/editfilm/:maPhim" exact Component={EditFilm} />
          <CheckoutTemplace path="/checkout/:maLichChieu" exact Component={Checkout} />
          <UserTemplace path="/login" exact Component={Login} />
          <UserTemplace path="/register" exact component={Register} />

          <HomeTemplace path="/" exact Component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}
export { history };
export default App;
