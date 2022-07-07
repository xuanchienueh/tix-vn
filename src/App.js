import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter history={history}>
      <Loading />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<HomeTemplace />}>
            <Route path="" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="admin" element={<AdminTemplace />}>
            <Route path="adduser" element={<AddUser />} />
            <Route path="films" element={<Films />} />
            <Route path="films/addnewfilm" element={<AddNewFilm />} />
            <Route path="editfilm/:maPhim" element={<EditFilm />} />
            <Route path="listuser" element={<ListUser />} />
            <Route path="addfilm" element={<AddNewFilm />} />
            <Route path="edituser/:taiKhoan" element={<EditUser />} />
            <Route path="taolichchieu/:maPhim/:tenphim" element={<TaoLichChieu />} />
          </Route>

          <Route element={<UserTemplace />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="checkout/:maLichChieu" element={<Checkout />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export { history };
export default App;
