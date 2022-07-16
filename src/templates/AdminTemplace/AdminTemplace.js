import { Fragment, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, Navigate, NavLink, useNavigate } from "react-router-dom";
import { TeamOutlined } from "@ant-design/icons";
import DropdownUser from "../Layout/Header/DropdownUser";
import { USER_LOGIN } from "../../util/settings/config";
import { useDispatch } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem(<a>Quản lý phim</a>, "1", <i className="fas fa-video"></i>, [
    getItem(<NavLink to="/admin/films">Danh sách phim</NavLink>, "4"),
    getItem(<NavLink to="/admin/addfilm">Thêm phim</NavLink>, "5"),
  ]),
  getItem("Quản lý user", "sub2", <TeamOutlined />, [
    getItem(<NavLink to="/admin/listuser">Danh sách user</NavLink>, "6"),
    getItem(<NavLink to="/admin/adduser">Thêm user</NavLink>, "8"),
  ]),
];

const AdminTemplace = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "NAVIGATE", payload: navigate });
    if (window.screen.width < 1000) {
      alert("Vui lòng sử dụng màn hình rộng hơn");
      navigate("/home", { replace: true });
    }
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

  if (userLogin && userLogin.maLoaiNguoiDung === "KhachHang") {
    return <Navigate to="/profile" />;
  }

  if (!userLogin || userLogin.maLoaiNguoiDung !== "QuanTri") {
    return <Navigate to="/home" />;
  }

  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <NavLink to="/home" className="logo">
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              width={200}
            />
          </NavLink>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background text-right">
            <DropdownUser />
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background w-full mt-2"
              style={{ padding: 0, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default AdminTemplace;
