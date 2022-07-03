import React, { useEffect, useState, useRef } from "react";
import { Table, Input, Space, Form, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../App";
import { layDanhSachPhim } from "../../redux/actions/CarouselAction/carousel";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "./Films.scss";
import { deletePhimAction } from "../../redux/actions/QuanLyPhimAction/ActionName";
import { debounce } from "lodash";

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1890ff" }} />;
export default function Films() {
  const dispatch = useDispatch();
  const [pageCurrent, setPageCurrent] = useState(1);

  const { danhSachPhim } = useSelector((state) => state.CarouselReducer);
  useEffect(() => dispatch(layDanhSachPhim()), []);

  const onChange = (pagination, filters, sorter, extra) => {
    setPageCurrent(pagination.current);
    // console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => window.scrollTo(0, 0), [pageCurrent]);
  // xử lý header position fixed
  const scroll = {};
  scroll.y = 540;
  // xử lý select từng dòng
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
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

  //xử lý phần search phim
  const debounceSearch = useRef(
    debounce((nextValue) => dispatch(layDanhSachPhim(nextValue)), 500)
  ).current;
  // kết thúc phần search phim
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
      render: (infoPhim) => (
        <div className="text-green-500 cursor-pointer" key={infoPhim.maPhim}>
          <i className="text-red-500 fas fa-trash fa-2x" onClick={() => popupDelete(infoPhim)}></i>
          <i
            className="ml-2 fas fa-wrench fa-2x"
            onClick={() => history.push(`/admin/editfilm/${infoPhim.maPhim}`)}
          ></i>
          <i
            className="fas fa-calendar fa-2x text-blue-600 ml-2"
            onClick={() => {
              history.push(`/admin/taolichchieu/${infoPhim.maPhim}/${infoPhim.tenPhim}`);
              localStorage.setItem("infoPhim", JSON.stringify(infoPhim));
            }}
          ></i>
        </div>
      ),
    },
  ];
  function popupDelete(infoPhim) {
    Swal.fire({
      title: "Bạn đang xóa phim?",

      showDenyButton: true,
      // showCancelButton: true,
      text: `Bạn đang xóa ${infoPhim.tenPhim}`,
      confirmButtonText: "YES!",
      denyButtonText: `NO!`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Saved!", "", "success");
        dispatch(deletePhimAction(infoPhim.maPhim));
      } else if (result.isDenied) {
        Swal.fire({ title: "Phim của bạn chưa được xóa!", icon: "info", timer: 1000 });
      }
    });
  }

  return (
    <div className="pageAdminFilms">
      <div className="flex justify-between">
        <Search
          placeholder="Tìm kiếm phim"
          onSearch={(value) => dispatch(layDanhSachPhim(value))}
          enterButton={<i className="fas fa-search"></i>}
          className="mb-1 w-1/2"
          onChange={(e) => debounceSearch(e.target.value)}
        />
      </div>
      <span style={{ marginLeft: 8 }}>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
      </span>
      <div className="table-quanlyphim">
        <Table
          {...tableProps}
          scroll={scroll}
          columns={columns}
          dataSource={danhSachPhim}
          onChange={onChange}
          rowKey="maPhim"
        />
      </div>
    </div>
  );
}
