import React, { useState } from "react";
import "./Films.scss";
import { Table, Switch, Radio, Form, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];
const data = [];

for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};

const defaultFooter = () => "Here is footer";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [tableLayout, setTableLayout] = useState(undefined);
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomCenter");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState(undefined);
  const handleLoadingChange = (enable) => setLoading(enable);
  const handleSizeChange = (e) => setSize(e.target.value);

  const handleTableLayoutChange = (e) => setTableLayout(e.target.value);

  const handleExpandChange = (enable) => setExpandable(enable ? defaultExpandable : undefined);

  const handleEllipsisChange = (enable) => setEllipsis(enable);

  const handleFooterChange = (enable) => setShowFooter(enable);

  const handleRowSelectionChange = (enable) => setRowSelection(enable ? {} : undefined);

  const handleYScrollChange = (enable) => setYScroll(enable);

  const handleXScrollChange = (e) => setXScroll(e.target.value);
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
    size,
    expandable,
    title: undefined,
    showHeader: true,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  return (
    <div className="pageAdminFilms">
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      >
        <Form.Item label="loading">
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>

        <Form.Item label="Footer">
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable">
          <Switch checked={!!expandable} onChange={handleExpandChange} />
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
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
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
        <Form.Item label="Pagination Top">
          <Radio.Group
            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={data}
        scroll={scroll}
      />
    </div>
  );
};

export default App;
