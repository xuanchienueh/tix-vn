import { Fragment, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Route, Redirect, NavLink } from "react-router-dom";
import {
  FileOutlined,
  UserOutlined,
  TeamOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import DropdownUser from "../Layout/Header/DropdownUser";
import { USER_LOGIN } from "../../util/settings/config";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem(<a>Films</a>, "1", <i className="fas fa-video"></i>, [
    getItem(<NavLink to="/admin/films">Film</NavLink>, "4"),
    getItem(<NavLink to="/admin/addfilm">Add Film</NavLink>, "5"),
  ]),
  getItem(
    <NavLink to="/admin/dashboard">Users</NavLink>,
    "2",
    <UserOutlined />
  ),
  getItem(
    <NavLink to="/admin/showtime">ShowTime</NavLink>,
    "3",
    <DesktopOutlined />
  ),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const AdminTemplace = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  if (userLogin && userLogin.maLoaiNguoiDung === "KhachHang") {
    return <Redirect to="/profile" />;
  }
  if (!userLogin || userLogin.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/home" />;
  }

  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <NavLink to="/home" className="logo">
                  <img
                    src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat-3_800x450.jpg"
                    width={100}
                  />
                </NavLink>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  items={items}
                />
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background text-right">
                  <DropdownUser />
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 0, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default AdminTemplace;
