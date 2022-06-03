import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DanhSachUser.scss";
import { Table, Switch, Radio, Form, Space, Input } from "antd";
import {
  DeleteUser,
  layDSNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction/ActionName";
import Swal from "sweetalert2";
import { debounce } from "lodash";

const data = [];

for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    hoTen: "John Brown",
    taiKhoan: "John Brown",
    maLoaiNguoiDung: "khách hàng",
    matKhau: Math.random(),
    soDt: Number(`${i}2`),
    email: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};

const DanhSachUser = () => {
  const [loading, setLoading] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
  const [tableLayout, setTableLayout] = useState(undefined);
  const [bottom, setBottom] = useState("bottomCenter");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState(undefined);
  const handleLoadingChange = (enable) => setLoading(enable);
  const handleTableLayoutChange = (e) => setTableLayout(e.target.value);
  const handleEllipsisChange = (enable) => setEllipsis(enable);
  const handleRowSelectionChange = (enable) => setRowSelection(enable ? {} : undefined);
  const handleYScrollChange = (enable) => setYScroll(enable);
  const handleXScrollChange = (e) => setXScroll(e.target.value);
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      sorter: (a, b) => a - b,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
    },
    {
      title: "Loại user",
      dataIndex: "maLoaiNguoiDung",
      filters: [
        {
          text: "Quản trị",
          value: "QuanTri",
        },
        {
          text: "Khách hàng",
          value: "KhachHang",
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      sorter: true,
      render: (infoUser) => (
        <Space size="middle">
          <a
            onClick={() => {
              Swal.fire({
                title: "Bạn đang xóa tài khoản?",
                text: `Bạn đang xóa tài khoản "${infoUser.taiKhoan}"`,
                showCancelButton: true,
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(DeleteUser(infoUser.taiKhoan));
                }
              });
            }}
          >
            <i className="fas fa-trash fa-2x text-red-500"></i>
          </a>
          <a>
            <Space>
              <i className="fas fa-edit fa-2x text-green-500"></i>
            </Space>
          </a>
        </Space>
      ),
    },
  ];
  const scroll = {};
  if (yScroll) scroll.y = 240;
  if (xScroll) scroll.x = "100vw";

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps = {
    bordered: true,
    loading,
    size: "small",
    title: undefined,
    showHeader: true,
    rowSelection,
    scroll,
    tableLayout,
  };
  // bên trên là code của thư viện antd
  const dispatch = useDispatch();
  const { dsAllUser } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(dsAllUser.length);
  useEffect(() => {
    dispatch(layDSNguoiDungAction());
  }, []);
  const debounceInputSearch = useCallback(
    debounce((value) => dispatch(layDSNguoiDungAction(value)), 500),
    []
  );

  return (
    <div className="DS_User_admin">
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item label="Loading">
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>

        <Form.Item label="Checkbox">
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header">
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>

        <Form.Item label="Ellipsis">
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>

        <Form.Item label="Table Scroll">
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout">
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tìm kiếm">
          <Input
            placeholder="Tìm kiếm theo họ tên"
            onChange={(e) => debounceInputSearch(e.target.value)}
            allowClear
            style={{ width: "100%" }}
          />
        </Form.Item>
      </Form>

      <Table
        {...tableProps}
        pagination={{
          position: [bottom],
        }}
        columns={tableColumns}
        dataSource={dsAllUser}
        scroll={scroll}
        rowKey="taiKhoan"
      />
    </div>
  );
};

export default DanhSachUser;
