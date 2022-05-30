import React, { useEffect, useState } from "react";
import { Table, Input, Space, Form, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhim } from "../../redux/actions/CarouselAction/carousel";
import { NavLink } from "react-router-dom";
import "./Films.scss";

const { Search } = Input;
const columns = [
  {
    title: "Mã phim",
    dataIndex: "maPhim",
    sorter: (a, b) => a.maPhim - b.maPhim,
    defaultSortOrder: "descend",
    width: "7%",
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.address.startsWith(value),
    width: "15%",
    sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
  },

  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    render: (hinhAnh) => <img src={hinhAnh} width={100} />,
    width: "10%",
  },
  {
    title: () => <h3 className="text-center">Mô Tả</h3>,
    dataIndex: "moTa",
    render: (moTa) => <p>{moTa}</p>,
    width: "50%",
  },
  {
    title: "Hành động",
    key: "action",
    sorter: true,
    render: (index) => (
      <div className="text-green-500 cursor-pointer" key={index}>
        <i className="text-red-500 fas fa-trash fa-2x"></i>
        <i className="ml-4 fas fa-wrench fa-2x"></i>
      </div>
    ),
  },
];
let data = [];

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);
export default function Films() {
  const dispatch = useDispatch();
  const [pageCurrent, setPageCurrent] = useState(1);

  const { danhSachPhim } = useSelector((state) => state.CarouselReducer);
  data = danhSachPhim;
  console.log(danhSachPhim);
  useEffect(() => dispatch(layDanhSachPhim()), []);

  const onChange = (pagination, filters, sorter, extra) => {
    setPageCurrent(pagination.current);
    console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => window.scrollTo(0, 0), [pageCurrent]);

  const scroll = {};
  scroll.y = 540;
  const rowSelection = {};
  const tableProps = {
    bordered: true,
    rowSelection,
    showHeader: true,
  };

  return (
    <div className="pageAdminFilms">
      {/* <Form.Item label="Fixed Header">
        <Switch checked={!!yScroll} onChange={handleYScrollChange} />
      </Form.Item> */}
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton={<i className="fas fa-search"></i>}
        className="mb-1"
      />
      <NavLink to="/admin/films/addnewfilm" className="btn btn-success mb-5">
        Thêm phim
      </NavLink>
      <Table
        {...tableProps}
        scroll={scroll}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}
