import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/loading/Loading";

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
const CreateMovieSchedule = lazy(() =>
  import("./admin/films/createMovieSchedule/createMovieSchedule")
);
const HomeTemplace = lazy(() => import("./templates/HomeTemplace/HomeTemplace"));
const UserTemplace = lazy(() => import("./templates/UserTemplace/UserTemplace"));
const CheckoutTemplace = lazy(() => import("./templates/checkoutTemplace/CheckoutTemplace"));
const AdminTemplace = lazy(() => import("./templates/AdminTemplace/AdminTemplace"));

function App() {
  return (
    <BrowserRouter>
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
            <Route path="taolichchieu/:maPhim/:tenphim" element={<CreateMovieSchedule />} />
          </Route>

          <Route element={<UserTemplace />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="checkout" element={<CheckoutTemplace />}>
            <Route path=":maLichChieu" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
