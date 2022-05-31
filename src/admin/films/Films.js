import React, { useEffect, useState } from "react";
import { Table, Input, Space, Form, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../App";
import { layDanhSachPhim } from "../../redux/actions/CarouselAction/carousel";
import { NavLink } from "react-router-dom";
import "./Films.scss";

const { Search } = Input;
const columns = [
  {
    title: "Mã phim",
    dataIndex: "maPhim",
    key: "maPhim",
    sorter: (a, b) => a.maPhim - b.maPhim,
    defaultSortOrder: "descend",
    width: "7%",
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
    filterSearch: true,
    onFilter: (value, record) => record.address.startsWith(value),
    width: "15%",
    sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
  },

  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (hinhAnh) => <img src={hinhAnh} width={100} />,
    width: "10%",
  },
  {
    title: () => <h3 className="text-center">Mô Tả</h3>,
    dataIndex: "moTa",
    key: "moTa",
    render: (moTa) => <p>{moTa}</p>,
    width: "50%",
  },
  {
    title: "Hành động",
    key: "action",
    sorter: true,
    render: (index) => (
      <div className="text-green-500 cursor-pointer" key={index.maPhim}>
        <i className="text-red-500 fas fa-trash fa-2x"></i>
        <i
          className="ml-4 fas fa-wrench fa-2x"
          onClick={() => {
            history.push(`/admin/editfilm/${index.maPhim}`);
          }}
        ></i>
      </div>
    ),
  },
];

const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1890ff" }} />;
const onSearch = (value) => console.log(value);
export default function Films() {
  const dispatch = useDispatch();
  const [pageCurrent, setPageCurrent] = useState(1);

  const { danhSachPhim } = useSelector((state) => state.CarouselReducer);
  // console.log(danhSachPhim);
  useEffect(() => dispatch(layDanhSachPhim()), []);

  const onChange = (pagination, filters, sorter, extra) => {
    setPageCurrent(pagination.current);
    console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => window.scrollTo(0, 0), [pageCurrent]);
  // xử lý header position fixed
  const scroll = {};
  scroll.y = 540;
  // xử lý select từng dòng
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    console.log("newSelectedRowKeys", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  //các props của table
  const tableProps = {
    bordered: true,
    rowSelection,
    showHeader: true,
  };

  return (
    <div className="pageAdminFilms">
      <div className="flex justify-between">
        <NavLink to="/admin/films/addnewfilm" className="btn btn-success mb-4">
          Thêm phim
        </NavLink>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton={<i className="fas fa-search"></i>}
          className="mb-1 w-1/2"
        />
      </div>
      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
      <Table
        {...tableProps}
        scroll={scroll}
        columns={columns}
        dataSource={danhSachPhim}
        onChange={onChange}
      />
    </div>
  );
}
